/**
 * BIESC - Código: 01-1pm
 * Fecha de entrega: 11/17/2024
 * Coordinador: Carlos Chavarría Campos
 *
 * Integrantes:
 * - Amanda Esquivel Álvarez    Cédula: 118530735
 * - María Rodríguez Hernández   Cédula: 118760320
 * - Hazel Molina Fuentes        Cédula: 305340604
 * - Carlos Chavarría Campos     Cédula: 117930581
 *
 * @file main.js
 * @description Programa principal para compilar archivos .bies en código ensamblador .basm
 * utilizando el compilador `biesC`. Este archivo gestiona los argumentos de línea de comandos,
 * habilita el logging opcional y realiza validaciones de entrada antes de iniciar la compilación.
 */

import { compileFile } from './biesC.js';
import path from 'path';
import logger from "./Logger.js";

/**
 * Función principal que coordina la compilación de archivos .bies.
 */
function main() {
    // Lee los argumentos de la consola
    const args = process.argv.slice(2);
    const logEnabled = args.includes('--log') || args.includes('--debug');

    // Configuración del logger según los argumentos
    if (logEnabled) {
        logger.enable();
        logger.setLevel('info', true);
        logger.setLevel('debug', args.includes('--debug')); // Usa nivel debug si se especifica
    } else {
        logger.disable(); // Desactiva el logger si no se especifica
    }

    // Verifica que se haya especificado un archivo de entrada
    const inputFile = args.find(arg => arg.endsWith('.bies'));
    if (!inputFile) {
        console.error("Error: No se especificó un archivo .bies para ejecutar.");
        process.exit(1);
    }

    // Determina el archivo de salida; si no se especifica, se usa el mismo nombre con extensión .basm
    const outputFile = args.find((arg, index) => args[index - 1] === inputFile && !arg.startsWith('--')) ||
        inputFile.replace(/\.\w+$/, ".basm");

    // Verifica que el archivo de entrada tenga la extensión correcta
    if (path.extname(inputFile) !== '.bies') {
        console.error("Error: El archivo de entrada debe tener la extensión .bies");
        process.exit(1);
    }

    // Intenta compilar el archivo de entrada
    try {
        compileFile(inputFile, outputFile);
        console.log(`Archivo compilado exitosamente: ${outputFile}`);
    } catch (error) {
        console.error("Error durante la compilación:", error.message);
        console.error(error.stack); // Proporciona la traza del error para mayor detalle
    }
}

// Ejecuta la función principal
main();
