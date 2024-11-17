import { spawnSync } from 'child_process';
import { readdir } from 'fs/promises';
import path from 'path';
import fs from 'fs';

const compilerPath = path.resolve('./'); // Ruta al proyecto del compilador
const vmPath = path.resolve('../Maquina Virtual'); // Ruta al proyecto de la máquina virtual
const testFolder = path.join(compilerPath, 'test'); // Carpeta general de test
const biesFolder = path.join(testFolder, 'bies'); // Subcarpeta de archivos .bies
const basmFolder = path.join(testFolder, 'basm'); // Subcarpeta de archivos .basm
const biesCCommand = path.join(compilerPath, 'src/main.js');
const vmMainCommand = path.join(vmPath, 'main.js');

async function runTests() {
    try {
        const files = await readdir(biesFolder);
        const biesFiles = files.filter(file => file.endsWith('.bies'));

        if (biesFiles.length === 0) {
            console.log('No se encontraron archivos .bies en la carpeta de tests.');
            return;
        }

        console.log(`\n📂 Se encontraron ${biesFiles.length} archivos .bies para probar:\n`);
        biesFiles.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
        console.log('\nComenzando las pruebas...\n');

        for (const [index, file] of biesFiles.entries()) {
            const filePath = path.join(biesFolder, file);
            const basmFile = path.join(basmFolder, file.replace('.bies', '.basm')); // Archivo .basm generado

            console.log(`\n🔄 [${index + 1}/${biesFiles.length}] Compilando archivo: ${file}`);
            compileFile(filePath, basmFile);

            console.log(`▶️ Ejecutando en máquina virtual: ${basmFile}`);
            const vmOutput = executeFileWithMain(basmFile);

            console.log(`🖥️ Salida de la máquina virtual para ${file}:\n${vmOutput}`);
            console.log(`✅ Prueba completada para: ${file}\n`);
        }

        console.log('\n🎉 Todas las pruebas finalizaron.\n');
    } catch (err) {
        console.error('❌ Error durante la ejecución de las pruebas:', err.message);
    }
}

function compileFile(inputFile, outputFile) {
    // Archivo de errores específico por archivo
    const errorFile = path.join(compilerPath, 'errors', `errors-${path.basename(inputFile, '.bies')}.log`);

    // Comando para compilar con opciones --o y --e
    const commandArgs = [biesCCommand, inputFile, '--o', outputFile, '--e', errorFile];
    const result = spawnSync('node', commandArgs, {
        encoding: 'utf-8',
        cwd: compilerPath, // Asegura que el compilador se ejecute en su propio directorio
    });

    if (result.error) {
        throw new Error(`Error de compilación: ${result.error.message}`);
    }

    // Verificar si hubo errores de compilación
    if (fs.existsSync(errorFile)) {
        const errorContent = fs.readFileSync(errorFile, 'utf-8').trim();
        if (errorContent) {
            console.log(`⚠️ Error registrado en el archivo: ${errorFile}`);
        } else {
            fs.unlinkSync(errorFile); // Limpiar si está vacío
        }
    } else {
        console.log(`📄 Compilación exitosa: ${outputFile}`);
    }
}

function executeFileWithMain(basmFile) {
    // Calcular la ruta relativa desde vmPath al archivo .basm
    const relativeBasmPath = path.relative(vmPath, basmFile);

    // Usar el comando biesVM con la ruta relativa
    const commandArgs = ['biesVM', relativeBasmPath];
    const result = spawnSync(commandArgs[0], commandArgs.slice(1), {
        encoding: 'utf-8',
        cwd: vmPath, // Cambia el directorio de trabajo a la máquina virtual
        shell: true, // Asegura que pueda encontrar comandos globales como biesVM
    });

    if (result.error) {
        throw new Error(result.error.message);
    }
    if (result.stderr) {
        console.error(`⚠️ Error en la ejecución:\n${result.stderr}`);
    }
    return result.stdout.trim();
}



runTests();
