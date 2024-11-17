/**
 * @file compileFile.js
 * @description Módulo que implementa la funcionalidad principal para compilar un archivo
 * fuente en el lenguaje Bies (.bies) a un archivo ensamblador (.basm) utilizando ANTLR4
 * y un compilador visitante (`CompilerVisitor`).
 *
 * Este código fue desarrollado con la colaboración de ChatGPT, quien ayudó a optimizar
 * el flujo de compilación y el manejo de errores durante el proceso.
 */

import antlr4 from 'antlr4';
import BiesLexer from '../gen/biesLexer.js';
import BiesParser from '../gen/biesParser.js';
import CompilerVisitor from './CompilerVisitor.js';
import fs from 'fs';
import logger from "./Logger.js";

/**
 * Función principal para compilar un archivo fuente Bies a ensamblador Basm.
 *
 * @param {string} inputFile - Ruta del archivo fuente (.bies) que será compilado.
 * @param {string} outputFile - Ruta del archivo de salida (.basm) donde se guardará el código ensamblador generado.
 */
export function compileFile(inputFile, outputFile) {
    try {
        // Leer el contenido del archivo fuente
        const inputCode = fs.readFileSync(inputFile, 'utf8');
        logger.info(`Leyendo archivo fuente: ${inputFile}`);

        // Crear flujo de entrada para ANTLR
        const chars = new antlr4.InputStream(inputCode);

        // Inicializar el lexer
        const lexer = new BiesLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);

        // Inicializar el parser y construir el árbol de análisis sintáctico
        const parser = new BiesParser(tokens);
        parser.buildParseTrees = true; // Habilitar la construcción de árboles de parseo
        const tree = parser.program();

        logger.debug("Árbol de análisis sintáctico:", tree.toStringTree(parser.ruleNames));

        // Crear instancia del compilador visitante
        const compiler = new CompilerVisitor();

        // Generar el código ensamblador a partir del árbol sintáctico
        const compiledCode = compiler.visit(tree);
        logger.info("Código ensamblador generado exitosamente.");

        // Guardar el código ensamblador en el archivo de salida
        fs.writeFileSync(outputFile, compiledCode);
        console.log(`Compilación exitosa. Archivo de salida: ${outputFile}`);
    } catch (error) {
        logger.error("Error durante el proceso de compilación:", error.message);
        throw error; // Propaga el error para manejo externo si es necesario
    }
}
