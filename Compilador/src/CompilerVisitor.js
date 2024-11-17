// CompilerVisitor.js
import BiesVisitor from '../gen/biesVisitor.js';
import logger from "./Logger.js";

export default class CompilerVisitor extends BiesVisitor {
    constructor() {
        super();
        this.contextStack = ['0'];
        this.contextCounter = 1;
        this.globalBindingCounter = 0;
        this.collectedFunctions = [];
        this.functionBindings = {}; // Mapa global para bindings de funciones
        this.variables = {};
        this.isInPrintOrFunction = false;
    }


    getCurrentContext() {
        return this.contextStack[this.contextStack.length - 1]; // Devuelve solo el número del contexto
    }

    getNextContext() {
        const newContext = `${this.contextCounter++}`;
        this.contextStack.push(newContext);
        return newContext; // Almacena solo el número sin `$`
    }

    releaseContext() {
        this.contextStack.pop();
    }

    visitProgram(ctx) {
        let functionDeclarations = [];
        let mainBody = [`$FUN $0 args:0 parent:$0`];

        for (let i = 0; i < ctx.children.length; i++) {
            const child = ctx.children[i];

            if (child.constructor.name === 'FunctionDeclarationContext') {
                let bindingIndex = this.globalBindingCounter++;
                const functionCode = this.visit(child);
                functionDeclarations.push(...functionCode);

                const functionName = child.ID().getText();
                mainBody.push(`LDF $${functionName}`);
                mainBody.push(`BST 0 ${bindingIndex}`);
                this.functionBindings[functionName] = { context: 0, index: bindingIndex };
            } else {
                const exprCode = this.visit(child);
                if (Array.isArray(exprCode)) {
                    mainBody.push(...exprCode);
                } else {
                    mainBody.push(exprCode);
                }
            }
        }

        mainBody.push(`$END $0`, `INI $0`);

        logger.debug('visitProgram mainBody:', mainBody);

        // Combina todo en texto con `join('\n')` al final
        return [...functionDeclarations, ...mainBody].join('\n');
    }



    visitVariableDeclaration(ctx) {
        const variableName = ctx.ID().getText();  // Nombre de la variable
        const declarationType = ctx.getChild(0).getText();
        const value = this.visit(ctx.expr());     // Código de la expresión asignada

        // Obtiene el contexto actual
        const currentContext = this.getCurrentContext();

        const bindingIndex = this.globalBindingCounter++;
        logger.debug("Binding index variable: ",bindingIndex);

        this.variables[variableName] = {
            context: currentContext,
            index: bindingIndex,
            type: declarationType, // Guardamos el tipo de declaración ('const', 'var', o 'let')
            mutable: declarationType !== 'const' // Solo 'const' es inmutable
        };

        // Genera código para almacenar el valor en el binding
        const result = [];
        if (Array.isArray(value)) {
            result.push(...value); // Código para evaluar la expresión
        } else {
            result.push(`LDV ${value}`);
        }
        result.push(`BST ${currentContext} ${bindingIndex}`); // Usa el contexto y el índice únicos

        return result;
    }

    visitAssignment(ctx) {
        const variableName = ctx.ID().getText();
        const value = this.visit(ctx.expr()); // Código de la expresión asignada

        const variable = this.variables[variableName];
        if (!variable) {
            throw new Error(`Variable "${variableName}" no está definida.`);
        }

        if (!variable.mutable) {
            throw new Error(`La constante "${variableName}" no puede ser reasignada.`);
        }

        const result = [];
        if (Array.isArray(value)) {
            result.push(...value); // Código para evaluar la expresión
        } else {
            result.push(`LDV ${value}`);
        }
        result.push(`BLD ${variable.context} ${variable.index}`); // Actualiza el valor en el binding

        return result;
    }

    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const paramCount = ctx.paramList() ? ctx.paramList().ID().length : 0;

        // Establece el contexto y añade la función a las funciones recolectadas
        const parentContext = this.getCurrentContext();
        const functionContext = this.getNextContext();

        const parameterPositions = {};
        if (ctx.paramList()) {
            ctx.paramList().ID().forEach((param, index) => {
                parameterPositions[param.getText()] = {position: index, context: functionContext};
            });
        }

        // Almacena la función con su contexto y posiciones de parámetros
        this.collectedFunctions.push({
            name: functionName,
            context: functionContext,
            parameters: parameterPositions
        });

        let result = [`$FUN $${functionName} args:${paramCount} parent:$${parentContext}`];

        // Visita el cuerpo de la función
        const bodyExpr = this.visit(ctx.expr());
        result.push(...bodyExpr, `RET`, `$END $${functionName}`);

        // Libera el contexto al final de la función
        this.releaseContext();
        return result;
    }

    visitParamList(ctx) {
        // Manejar lista de parámetros según el contexto actual
        return ctx.ID().map((param, index) => `BLD ${this.getCurrentContext()} ${index}`);
    }

    visitNumberExpr(ctx) {
        return [`LDV ${ctx.getText()}`];
    }

    visitIdentifierExpr(ctx) {
        const identifier = ctx.ID().getText();
        const currentContext = this.getCurrentContext();

        // Verifica si el identificador es un parámetro en la función actual
        const currentFunction = this.collectedFunctions.find(
            f => f.context === currentContext
        );

        if (currentFunction && identifier in currentFunction.parameters) {
            const { position, context } = currentFunction.parameters[identifier];
            return [`BLD ${context} ${position}`];
        }

        // Si no encuentra la variable en el contexto actual, busca en el global
        if (this.variables[identifier]) {
            const { context, index } = this.variables[identifier];
            return [`BLD ${context} ${index}`];
        }

        throw new Error(`Identificador desconocido: ${identifier}`);
    }


    visitFunctionCall(ctx) {
        this.isInPrintOrFunction = true;
        let functionName;
        if (ctx.ID){
            functionName = ctx.ID().getText();
        } else if (ctx.children && ctx.children[0]) {
            functionName = ctx.children[0].getText();

            functionName = functionName.replace(/\(\)$/, '');
        } else {
            functionName = null;
        }
        logger.debug("FunctionName: ", functionName);
        const args = ctx.expr ? ctx.expr() : [];

        // Obtiene el contexto y el índice de binding de la función desde `functionBindings`
        const binding = this.functionBindings[functionName];
        if (!binding) {
            throw new Error(`Función desconocida: ${functionName}`);
        }

        let output = [];

        // Carga los argumentos de la llamada a función
        args.forEach(arg => {
            const argCode = this.visit(arg);
            if (Array.isArray(argCode)) {
                output.push(...argCode);
            } else {
                output.push(`LDV ${argCode}`);
            }
        });

        // Usa `BLD` con el contexto e índice dinámicos de `binding`
        output.push(`BLD ${binding.context} ${binding.index}`);

        // Genera la instrucción `APP` con la cantidad de argumentos
        output.push(`APP ${args.length}`);

        this.isInPrintOrFunction = false;

        return output;
    }

    visitFunctionCallExpr(ctx) {
        return this.visitFunctionCall(ctx);
    }

    visitNegateExpr(ctx) {
        const expr = this.visit(ctx.expr());
        return [...expr, 'NEG'];
    }

    visitAddSubExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        let operator;

        if (ctx.op.text === '+') {
            if (this.isInPrintOrFunction) {
                operator = 'CAT';
            } else {
                // Suma de números
                operator = 'ADD';
            }
        } else {
            operator = 'SUB';
        }
        logger.debug('visitAddSubExpr result:', [...left, ...right, operator]);

        return [...left, ...right, operator];
    }


    visitMulDivExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op.text === '*' ? 'MUL' : 'DIV';
        return [...left, ...right, op];
    }

    visitParenExpr(ctx) {
        // Delegar a la expresión interna
        return this.visit(ctx.expr());
    }

    visitStringExpr(ctx) {
        // Retorna la cadena con comillas incluidas como literal válido
        const text = ctx.STRING().getText();
        return [`LDV "${text.slice(1, -1)}"`]; // Mantiene las comillas dobles
    }

    visitPrintStmt(ctx) {
        logger.debug("Print");
        this.isInPrintOrFunction = true; // Activar bandera
        const exprCode = this.visit(ctx.expr());
        this.isInPrintOrFunction = false; // Desactivar bandera
        return [...exprCode, 'PRN'].join('\n');
    }

    flatten(arr) {
        return arr.reduce(
            (flat, toFlatten) =>
                flat.concat(Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten),
            []
        );
    }

    visitLetInExpr(ctx) {

        logger.debug('LetInExpr Context:', ctx.toStringTree());
        
        const newContext = this.getCurrentContext();

        const declarations = ctx.constDeclaration();
        const result = [];

        // Procesar las declaraciones en el bloque "let"
        for (const declaration of declarations) {
            const declarationCode = this.visit(declaration);
            if (Array.isArray(declarationCode)) {
                result.push(...declarationCode);
            } else {
                result.push(declarationCode);
            }
        }

        // Procesar las instrucciones en el bloque "in"
        const statements = ctx.stmt();
        for (const stmt of statements) {
            const stmtCode = this.visit(stmt); // Usa `visit` para manejar cada tipo de stmt
            if (Array.isArray(stmtCode)) {
                result.push(...stmtCode);
            } else {
                result.push(stmtCode);
            }
        }

        const flattenedResult = this.flatten(result);
        logger.debug('Let-In Result:', flattenedResult); // Diagnóstico del resultado final
        return flattenedResult;
    }


    visitConstDeclaration(ctx) {
        logger.debug('ConstDeclaration Context:', ctx.getText());
        logger.debug('Expr Exists:', !!ctx.expr());
        const variableName = ctx.ID().getText();
        const currentContext = this.getCurrentContext();
        const bindingIndex = this.globalBindingCounter++;

        // Verifica si la constante ya existe en el contexto actual
        if (this.variables[variableName] && this.variables[variableName].context === currentContext) {
            throw new Error(`La constante "${variableName}" ya está declarada en este contexto.`);
        }

        // Registra la variable en el contexto actual
        this.variables[variableName] = {
            context: currentContext,
            index: bindingIndex,
            mutable: false, // Constantes siempre son inmutables
        };

        const result = [];
        let valueCode;

        // Verifica si el nodo tiene un hijo expr
        if (ctx.expr()) {
            valueCode = this.visit(ctx.expr());
        } else {
            throw new Error(`No se encontró una expresión válida para la constante "${variableName}".`);
        }

        // Genera el código correspondiente
        if (Array.isArray(valueCode)) {
            result.push(...valueCode);
        } else {
            result.push(`LDV ${valueCode}`);
        }

        // Añade la instrucción BST para guardar la constante
        result.push(`BST ${currentContext} ${bindingIndex}`);

        return result;
    }

}

