import { spawnSync } from 'child_process';
import { readdir } from 'fs/promises';
import path from 'path';
import biesVM from '../Maquina Virtual/src/biesVM.js';
import fs from 'fs';

const testFolder = path.resolve('./test');
const biesCCommand = path.resolve('./src/main.js');

async function runTests() {
    try {
        const files = await readdir(testFolder);
        const biesFiles = files.filter(file => file.endsWith('.bies'));

        if (biesFiles.length === 0) {
            console.log('No se encontraron archivos .bies en la carpeta de tests.');
            return;
        }

        console.log(`\n📂 Se encontraron ${biesFiles.length} archivos .bies para probar:\n`);
        biesFiles.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
        console.log('\nComenzando las pruebas...\n');

        for (const [index, file] of biesFiles.entries()) {
            const filePath = path.join(testFolder, file);
            const basmFile = filePath.replace('.bies', '.basm');

            console.log(`\n🔄 [${index + 1}/${biesFiles.length}] Compilando archivo: ${file}`);
            const compileSuccess = await compileFile(filePath, basmFile);

            if (!compileSuccess) {
                console.error(`❌ Error al compilar el archivo: ${file}. Continuando con el siguiente...\n`);
                continue;
            }

            console.log(`▶️ Ejecutando en máquina virtual: ${basmFile}`);
            const vmOutput = executeFileInVM(basmFile);

            console.log(`🖥️ Salida de la máquina virtual para ${file}:\n${vmOutput}`);
            console.log(`✅ Prueba completada para: ${file}\n`);
        }

        console.log('\n🎉 Todas las pruebas finalizaron.\n');
    } catch (err) {
        console.error('❌ Error durante la ejecución de las pruebas:', err.message);
    }
}

async function compileFile(inputFile, outputFile) {
    try {
        if (!fs.existsSync(inputFile)) {
            console.error(`❌ El archivo de entrada no existe: ${inputFile}`);
            return false;
        }

        const commandArgs = [biesCCommand, inputFile, '--o', outputFile];
        const result = spawnSync('node', commandArgs, { encoding: 'utf-8' });

        if (result.error) {
            console.error(`⚠️ Error al ejecutar el compilador:\n${result.error.message}`);
            return false;
        }

        if (result.stderr.trim()) {
            console.error(`⚠️ Error del compilador:\n${result.stderr.trim()}`);
            return false;
        }

        console.log(`📄 Compilación exitosa: ${outputFile}`);
        return true;
    } catch (err) {
        console.error(`❌ Error inesperado durante la compilación: ${err.message}`);
        return false;
    }
}

function executeFileInVM(basmFile) {
    try {
        if (!fs.existsSync(basmFile)) {
            return `⚠️ Archivo .basm no encontrado: ${basmFile}`;
        }

        const instructions = parseBasmFile(basmFile);
        const vm = new biesVM();
        vm.execute(instructions);

        // Retornar la salida almacenada en `vm.output`
        return vm.output.length > 0 ? vm.output.join('\n') : '<Sin salida capturada>';
    } catch (err) {
        return `❌ Error durante la ejecución en la máquina virtual: ${err.message}`;
    }
}

function parseBasmFile(basmFile) {
    try {
        const content = fs.readFileSync(basmFile, 'utf-8');
        return content
            .trim()
            .split('\n')
            .map(line => {
                const tokens = line.split(' ');
                return [tokens[0], ...tokens.slice(1)];
            });
    } catch (err) {
        console.error(`❌ Error al leer el archivo .basm: ${err.message}`);
        return [];
    }
}

runTests();
