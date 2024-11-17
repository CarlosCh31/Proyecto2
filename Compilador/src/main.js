#!/usr/bin/env node
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
import fs from 'fs';

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

    // Intenta compilar el archivo de entrada
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

// Ejecuta la función principal
main();
