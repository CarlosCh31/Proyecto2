#!/usr/bin/env node

// Importa la función compileFile desde biesC.js
import { compileFile } from './biesC.js';
import path from 'path';
import logger from "./Logger.js";

function main() {

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
    const inputFile = args.find(arg => arg.endsWith('.bies'));
    if (!inputFile) {
        console.error("Error: No se especificó un archivo .bies para ejecutar.");
        process.exit(1);
    }

    const outputFile = args.find((arg, index) => args[index - 1] === inputFile && !arg.startsWith('--')) || inputFile.replace(/\.\w+$/, ".basm");

    // Verifica que el archivo de entrada tenga la extensión correcta
    if (path.extname(inputFile) !== '.bies') {
        console.error("Error: El archivo de entrada debe tener la extensión .bies");
        process.exit(1);
    }

    try {
        compileFile(inputFile, outputFile);
        console.log(`Archivo compilado exitosamente: ${outputFile}`);
    } catch (error) {
        console.error("Error durante la compilación:", error.message);
        console.error(error.stack); // Proporciona la traza del error para mayor detalle
    }
}

main();
