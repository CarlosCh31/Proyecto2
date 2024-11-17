/**
 * @file CompilerVisitor.js
 * @description Implementación del compilador visitante para el lenguaje Bies.
 * Transforma un árbol de sintaxis abstracta (AST) generado a partir de un archivo fuente Bies en
 * instrucciones ensambladoras (.basm) ejecutables por la máquina virtual BIESVM.
 *
 * Este archivo fue desarrollado con la colaboración de ChatGPT, que proporcionó asistencia técnica
 * en la resolución de problemas y en la optimización de la gestión de contexto, variables y funciones.
 */

import BiesVisitor from '../gen/biesVisitor.js';
import logger from "./Logger.js";

/**
 * @class CompilerVisitor
 * @extends BiesVisitor
 * @description Clase encargada de visitar y compilar nodos del AST del lenguaje Bies.
 */
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

    /**
     * Obtiene el contexto actual de la pila.
     * @returns {string} El contexto actual (número como string).
     */
    getCurrentContext() {
        return this.contextStack[this.contextStack.length - 1]; // Devuelve solo el número del contexto
    }

    /**
     * Crea y devuelve un nuevo contexto único.
     * @returns {string} El nuevo contexto generado.
     */
    getNextContext() {
        const newContext = `${this.contextCounter++}`;
        this.contextStack.push(newContext);
        return newContext;
    }

    /**
     * Libera el contexto actual de la pila.
     */
    releaseContext() {
        this.contextStack.pop();
    }

    /**
     * Compila el programa completo, visitando todas las declaraciones y expresiones.
     * @param {Object} ctx - Nodo del AST del programa.
     * @returns {string} Código ensamblador generado para el programa.
     */
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

    /**
     * Compila una declaración de variable, asignándole un índice único en el contexto actual.
     * @param {Object} ctx - Nodo del AST de la declaración de variable.
     * @returns {Array<string>} Código ensamblador generado para la declaración.
     */
    visitVariableDeclaration(ctx) {
        const variableName = ctx.ID().getText();  // Nombre de la variable
        const declarationType = ctx.getChild(0).getText();
        const value = this.visit(ctx.expr());     // Código de la expresión asignada

        const currentContext = this.getCurrentContext();
        const bindingIndex = this.globalBindingCounter++;
        logger.debug("Binding index variable: ", bindingIndex);

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

    /**
     * Compila una asignación a una variable existente.
     * @param {Object} ctx - Nodo del AST de la asignación.
     * @throws {Error} Si la variable no está definida o no es mutable.
     * @returns {Array<string>} Código ensamblador generado para la asignación.
     */
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

    /**
     * Compila una declaración de función, generando un contexto único para ella.
     * @param {Object} ctx - Nodo del AST de la declaración de función.
     * @returns {Array<string>} Código ensamblador generado para la función.
     */
    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const paramCount = ctx.paramList() ? ctx.paramList().ID().length : 0;

        const parentContext = this.getCurrentContext();
        const functionContext = this.getNextContext();

        const parameterPositions = {};
        if (ctx.paramList()) {
            ctx.paramList().ID().forEach((param, index) => {
                parameterPositions[param.getText()] = {position: index, context: functionContext};
            });
        }

        this.collectedFunctions.push({
            name: functionName,
            context: functionContext,
            parameters: parameterPositions
        });

        let result = [`$FUN $${functionName} args:${paramCount} parent:$${parentContext}`];
        const bodyExpr = this.visit(ctx.expr());
        result.push(...bodyExpr, `RET`, `$END $${functionName}`);

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

    /**
     * Compila una llamada a función, cargando los argumentos y ejecutando la función.
     * @param {Object} ctx - Nodo del AST de la llamada a función.
     * @returns {Array<string>} Código ensamblador generado para la llamada.
     * @throws {Error} Si la función no está definida.
     */
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

        const currentContext = this.getCurrentContext();

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

        if (ctx.lambdaExpr()) {
            // Usa el nombre de la constante como ID de la lambda y pasa el contexto actual como parent
            valueCode = this.visitLambdaExpr(ctx.lambdaExpr(), variableName, currentContext);

            // Registrar la lambda en functionBindings
            this.functionBindings[variableName] = { context: currentContext, index: bindingIndex };
            result.push(`LDF $${variableName}`);
        } else if (ctx.expr()) {
            valueCode = this.visit(ctx.expr());
        } else {
            throw new Error(`No se encontró una expresión válida para la constante "${variableName}".`);
        }

        // Agregar el código generado al resultado
        if (Array.isArray(valueCode)) {
            result.push(...valueCode);
        } else {
            result.push(`LDV ${valueCode}`);
        }

        // Añade la instrucción BST para guardar la constante
        result.push(`BST ${currentContext} ${bindingIndex}`);

        return result;
    }


    visitLambdaExpr(ctx, functionName) {
        const parentContext = this.getCurrentContext(); // Contexto correcto del padre
        const newContext = this.getNextContext(); // Contexto para la lambda
        const paramCount = ctx.paramList() ? ctx.paramList().ID().length : 0;

        const result = [`$FUN $${functionName} args:${paramCount} parent:$${parentContext}`];

        // Procesar parámetros
        if (ctx.paramList()) {
            ctx.paramList().ID().forEach((param, index) => {
                this.variables[param.getText()] = { context: newContext, index, mutable: false };
            });
        }

        // Procesar el cuerpo de la lambda
        const bodyCode = this.visit(ctx.expr());
        result.push(...bodyCode);

        // Finalizar la función lambda
        result.push('RET');
        result.push(`$END $${functionName}`);

        this.releaseContext();

        return result;
    }


}

