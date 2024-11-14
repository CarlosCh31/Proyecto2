#!/usr/bin/env node
/**
 *  BIESVM - Código: 01-1pm
 * Fecha de entrega: 10/16/2024
 * Coordinador: Carlos Chavarría Campos
 *
 * Integrantes:
 * - Amanda Esquivel Álvarez    Cédula: 118530735
 * - María Rodríguez Hernández   Cédula: 118760320
 * - Hazel Molina Fuentes        Cédula: 305340604
 * - Carlos Chavarría Campos     Cédula: 117930581
 */

 /**
 * Descripción:
 * Este código implementa la ejecución de archivos `.basm` utilizando la máquina virtual BiesVM.
 * Se incluyen funciones para parsear, procesar, y ejecutar instrucciones escritas en lenguaje ensamblador.
 *
 */

import antlr4 from 'antlr4';
import BiesASMLexer from '../gen/biesASMLexer.js';
import BiesASMParser from '../gen/biesASMParser.js';
import biesVM from './BiesVM.js'; // Máquina virtual
import logger from "./Logger.js";
import fs from 'fs';


// Lee los argumentos de la consola
const args = process.argv.slice(2);
const logEnabled = args.includes('--log') || args.includes('--debug');

// Activa el logging si se usa --log o --debug
if (logEnabled) {
    logger.enable();
    logger.setLevel('info', true);
    logger.setLevel('debug', args.includes('--debug')); // Usa nivel debug si se especifica
} else {
    logger.disable(); // Desactiva el logger si no se especifica
}

// Archivo de instrucciones
const filePath = args.find(arg => arg.endsWith('.basm'));
if (!filePath) {
    console.error("Error: No se especificó un archivo .basm para ejecutar.");
    process.exit(1);
}
/**
 * Parsea el archivo .basm y genera un árbol de instrucciones.
 *
 * @param {string} filePath - Ruta al archivo .basm a procesar.
 * @returns {Object} Un objeto que contiene las instrucciones globales y funciones parseadas.
 *
 */

function parseFile(filePath) {
    // Lee el contenido del archivo .basm

    const content = fs.readFileSync(filePath, 'utf-8');
    // Inicializa el lexer y parser de ANTLR con el contenido del archivo
    const chars = new antlr4.InputStream(content);
    const lexer = new BiesASMLexer(chars);

    // Genera tokens a partir del contenido leído
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Inicializa el parser con los tokens generados
    const parser = new BiesASMParser(tokens);
    parser.buildParseTrees = true;

    // Elimina los listeners de errores predeterminados y agrega uno personalizado

    parser.removeErrorListeners();
    parser.addErrorListener({
        /**
         * Listener personalizado para capturar y mostrar errores de sintaxis.
         *
         * @param {Object} recognizer - El objeto reconocedor.
         * @param {Object} offendingSymbol - El símbolo causante del error.
         * @param {number} line - La línea donde ocurrió el error.
         * @param {number} column - La columna donde ocurrió el error.
         * @param {string} msg - El mensaje de error.
         * @param {Object} e - El error de sintaxis.
         */

        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            console.error(`Error de sintaxis en línea ${line}:${column}: ${msg}`);
        }
    });
    // Construye el árbol de análisis sintáctico (AST)
    const tree = parser.program();

    return extractInstructions(tree);
}
/*
 * Recorre el árbol de análisis sintáctico (AST) para extraer las instrucciones
 * y declaraciones de funciones.
 *
 * @param {Object} tree - El árbol de análisis sintáctico generado por ANTLR.
 * @returns {Object} Un objeto que contiene las instrucciones globales y funciones parseadas.
 */

function extractInstructions(tree) {
    const instructions = []; // Lista de instrucciones
    const functions = {};      // Mapa de funciones parseadas

    // Recorre los nodos hijos del árbol
    if (tree.children) {
        tree.children.forEach(child => {
            // Verifica si el nodo es una declaración de función
            if (child.constructor.name === 'StatementContext') {
                if (child.functionDeclaration()) {
                    const functionDecl = child.functionDeclaration();
                    const functionName = functionDecl.children[1].getText();
                    const body = [];
                    functionDecl.instructionBlock().instruction().forEach(instr => {
                        const command = instr.INSTRUCTION().getText();
                        const args = instr.arg().map(arg => {
                            const argText = arg.getText();
                            return isNaN(argText) ? argText : Number(argText);  // Convertir a número si es posible
                        });
                        body.push([command, ...args]);
                    });
                    // Almacena la función con su cuerpo de instrucciones

                    functions[functionName] = { body };
                }
                // Verifica si el nodo es una instrucción global
                else if (child.instruction()) {
                    const instr = child.instruction();
                    const command = instr.INSTRUCTION().getText();
                    const args = instr.arg().map(arg => {
                        const argText = arg.getText();
                        return isNaN(argText) ? argText : Number(argText);  // Convertir a número si es posible
                    });
                    instructions.push([command, ...args]);
                }
            }
        });
    }

    return { instructions, functions };
}


// Ejecuta el archivo proporcionado
const { instructions, functions } = parseFile(filePath);

logger.debug(instructions);
logger.debug(functions);

// Inicializa la máquina virtual BiesVM y ejecuta las instrucciones
const vm = new biesVM();
vm.functions = functions;
vm.execute(instructions);
