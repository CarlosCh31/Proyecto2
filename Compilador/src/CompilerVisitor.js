// CompilerVisitor.js
import BiesVisitor from '../gen/biesVisitor.js';

export default class CompilerVisitor extends BiesVisitor {
    constructor() {
        super();
        this.contextStack = ['0'];
        this.contextCounter = 1;
        this.collectedFunctions = [];
        this.functionBindings = {}; // Mapa global para almacenar bindings de funciones
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

        // Índice de binding para cada función
        let bindingIndex = 0;
        for (let i = 0; i < ctx.children.length; i++) {
            const child = ctx.children[i];

            if (child.constructor.name === 'FunctionDeclarationContext') {
                const functionCode = this.visit(child);
                functionDeclarations.push(...functionCode);

                const functionName = child.ID().getText();
                mainBody.push(`LDF $${functionName}`);
                mainBody.push(`BST 0 ${bindingIndex}`);

                // Almacena tanto el contexto principal como el índice de binding para la función
                this.functionBindings[functionName] = { context: 0, index: bindingIndex };

                bindingIndex++;  // Incrementa el índice de binding para la próxima función
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
        return [...functionDeclarations, ...mainBody].join('\n');
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
                parameterPositions[param.getText()] = { position: index, context: functionContext };
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

        // Verifica si el identificador es un parámetro en la función actual
        const currentFunction = this.collectedFunctions.find(
            f => f.context === this.getCurrentContext()
        );

        if (currentFunction && identifier in currentFunction.parameters) {
            const { position, context } = currentFunction.parameters[identifier];
            return [`BLD ${context} ${position}`];
        }

        // Si el identificador es una función, utiliza `functionBindings` para obtener su contexto e índice de binding
        const boundFunction = this.functionBindings[identifier];
        if (boundFunction) {
            const { context, index } = boundFunction;
            return [`BLD ${context} ${index}`];
        }

        throw new Error(`Identificador desconocido: ${identifier}`);
    }

    visitFunctionCallExpr(ctx) {
        const functionName = ctx.ID().getText();
        const args = ctx.expr();

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

        return output.join('\n');
    }

    visitNegateExpr(ctx) {
        const expr = this.visit(ctx.expr());
        return [...expr, 'NEG'];
    }

    visitAddSubExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op.text === '+' ? 'ADD' : 'SUB';
        return [...left, ...right, op];
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
        // Retorna solo el contenido de la cadena sin las comillas
        return ctx.STRING().getText();
    }

    visitPrintStmt(ctx) {
        // Visita la expresión dentro del `print` para obtener el valor que se debe cargar en la pila
        const exprCode = this.visit(ctx.expr());

        // Si `exprCode` es un array, asume que ya tiene instrucciones (por ejemplo, `LDV`)
        if (Array.isArray(exprCode)) {
            return [...exprCode, 'PRN'];
        }

        // Si `exprCode` es un valor simple (como un string), genera `LDV` seguido de `PRN`
        return [`LDV ${exprCode}`, 'PRN'];
    }
}
