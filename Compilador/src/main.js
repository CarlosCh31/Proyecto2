#!/usr/bin/env node

// Importa la función compileFile desde biesC.js
import { compileFile } from './biesC.js';
import path from 'path';
import logger from "./Logger.js";
import fs from 'fs';

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

    // Verifica que el archivo de entrada tenga la extensión correcta
    if (path.extname(inputFile) !== '.bies') {
        console.error("Error: El archivo de entrada debe tener la extensión .bies");
        process.exit(1);
    }

    // Archivo de salida (.basm)
    const outputIndex = args.indexOf('--o');
    const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : inputFile.replace(/\.\w+$/, ".basm");

    // Archivo de errores
    const errorIndex = args.indexOf('--e');
    const errorFile = errorIndex !== -1 ? args[errorIndex + 1] : null;

    try {
        // Compilación del archivo
        compileFile(inputFile, outputFile);
        console.log(`Archivo compilado exitosamente: ${outputFile}`);
    } catch (error) {
        const errorMessage = `Error durante la compilación: ${error.message}\n${error.stack}`;
        if (errorFile) {
            // Guarda el error en el archivo especificado
            fs.writeFileSync(errorFile, errorMessage, 'utf8');
            console.error(`Error registrado en el archivo: ${errorFile}`);
        } else {
            console.error(errorMessage); // Muestra el error en la consola
        }
        process.exit(1); // Salida con código de error
    }
}

main();
