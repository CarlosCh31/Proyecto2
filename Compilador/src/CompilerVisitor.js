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
        this.contextStack = ['0']; // Pila de contextos para manejar entornos de ejecución.
        this.contextCounter = 1; // Contador para generar identificadores únicos de contexto.
        this.globalBindingCounter = 0; // Contador global para asignar índices a los bindings.
        this.collectedFunctions = []; // Lista de funciones recolectadas con sus contextos y parámetros.
        this.functionBindings = {}; // Mapa global de bindings de funciones.
        this.variables = {}; // Mapa de variables declaradas en el programa.
        this.isInPrintOrFunction = false; // Bandera para manejar contextos específicos como `print`.
    }

    /**
     * Obtiene el contexto actual de la pila.
     * @returns {string} El contexto actual (número como string).
     */
    getCurrentContext() {
        return this.contextStack[this.contextStack.length - 1];
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
        let mainBody = [`$FUN $0 args:0 parent:$0`]; // Definición de la función principal.

        for (let i = 0; i < ctx.children.length; i++) {
            const child = ctx.children[i];

            // Manejo de funciones
            if (child.constructor.name === 'FunctionDeclarationContext') {
                let bindingIndex = this.globalBindingCounter++;
                logger.debug("Binding index Program: ", bindingIndex);
                const functionCode = this.visit(child);
                functionDeclarations.push(...functionCode);

                const functionName = child.ID().getText();
                mainBody.push(`LDF $${functionName}`);
                mainBody.push(`BST 0 ${bindingIndex}`);
                this.functionBindings[functionName] = { context: 0, index: bindingIndex };
            } else {
                // Manejo de expresiones generales
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

    /**
     * Compila una declaración de variable, asignándole un índice único en el contexto actual.
     * @param {Object} ctx - Nodo del AST de la declaración de variable.
     * @returns {Array<string>} Código ensamblador generado para la declaración.
     */
    visitVariableDeclaration(ctx) {
        const variableName = ctx.ID().getText(); // Nombre de la variable.
        const declarationType = ctx.getChild(0).getText(); // Tipo de declaración (`const`, `let`, `var`).
        const value = this.visit(ctx.expr()); // Código de la expresión asignada.

        const currentContext = this.getCurrentContext();
        const bindingIndex = this.globalBindingCounter++;
        logger.debug("Binding index variable: ", bindingIndex);

        this.variables[variableName] = {
            context: currentContext,
            index: bindingIndex,
            type: declarationType,
            mutable: declarationType !== 'const' // Solo `const` es inmutable.
        };

        // Genera código para almacenar el valor en el binding.
        const result = Array.isArray(value) ? [...value] : [`LDV ${value}`];
        result.push(`BST ${currentContext} ${bindingIndex}`);

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
        const value = this.visit(ctx.expr());

        const variable = this.variables[variableName];
        if (!variable) {
            throw new Error(`Variable "${variableName}" no está definida.`);
        }

        if (!variable.mutable) {
            throw new Error(`La constante "${variableName}" no puede ser reasignada.`);
        }

        const result = Array.isArray(value) ? [...value] : [`LDV ${value}`];
        result.push(`BLD ${variable.context} ${variable.index}`);

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
                parameterPositions[param.getText()] = { position: index, context: functionContext };
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

    /**
     * Compila una llamada a función, cargando los argumentos y ejecutando la función.
     * @param {Object} ctx - Nodo del AST de la llamada a función.
     * @returns {Array<string>} Código ensamblador generado para la llamada.
     * @throws {Error} Si la función no está definida.
     */
    visitFunctionCall(ctx) {
        const functionName = ctx.ID().getText();
        const args = ctx.expr ? ctx.expr() : [];

        const binding = this.functionBindings[functionName];
        if (!binding) {
            throw new Error(`Función desconocida: ${functionName}`);
        }

        let output = args.flatMap(arg => this.visit(arg));
        output.push(`BLD ${binding.context} ${binding.index}`);
        output.push(`APP ${args.length}`);

        return output;
    }
}
