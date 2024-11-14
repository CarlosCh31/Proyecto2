
/**
 * Ejercicios BIESVM - Código: 01-1pm
 * Fecha de entrega: 20 de septiembre de 2024
 * Coordinador: Carlos Chavarría Campos
 *
 * Integrantes:
 * - Amanda Esquivel Álvarez    Cédula: 118530735
 * - María Rodríguez Hernández   Cédula: 118760320
 * - Hazel Molina Fuentes        Cédula: 305340604
 * - Carlos Chavarría Campos     Cédula: 117930581
 *
 * Descripción:
 * Esta clase implementa la máquina virtual BiesVM, la cual ejecuta instrucciones en
 * formato ensamblador (.basm). Utiliza una pila, un ámbito local, y un contexto con
 * una pila de instrucciones y un contador de programa para controlar el flujo de
 * ejecución de las instrucciones.
 */

import InstructionFactory from './InstructionFactory.js';
import logger from "./Logger.js";

/**
 * Clase que representa la máquina virtual BiesVM.
 * Ejecuta un conjunto de instrucciones en lenguaje ensamblador, manteniendo una pila de
 * valores y gestionando funciones a través de un contexto de ejecución.
 */

class biesVM {
    /**
     * Constructor de la clase BiesVM.
     * Inicializa la pila, el ámbito, el contexto de ejecución, las instrucciones, las funciones,
     * y una fábrica de instrucciones.
     */
    constructor() {

        /** @type {Array} Pila de valores utilizada por la máquina virtual. */

        this.stack = [];

        /** @type {Array} Ámbito actual de variables. */

        this.scope = [];

        /**
         * @type {Object} Contexto de ejecución que incluye la pila de instrucciones y el contador
         * del programa (pc).
         * - pile: Pila de ejecución
         * - pc: Contador de programa
         */


        this.context = {pile: [], pc: 0};

        /** @type {Array} Conjunto de instrucciones a ejecutar. */

        this.code = [];

        /** @type {Object} Mapa de funciones disponibles en la ejecución. */

        this.functions = {};

        /** @type {InstructionFactory} Fábrica de instrucciones para crear instancias de las mismas. */
        this.instructionFactory = new InstructionFactory();
    }
    /**
     * Ejecuta el conjunto de instrucciones provistas.
     *
     * @param {Array} instructions - Un array de instrucciones, donde cada instrucción
     * es un array que contiene el nombre de la instrucción seguido de sus argumentos.
     *
     * @throws {Error} Lanza un error si el formato de la instrucción es inválido.
     */

    execute(instructions) {
        this.code = instructions;
        // Ciclo principal de ejecución
        while (this.context.pc < this.code.length) {
            const currentInstruction = this.code[this.context.pc];

            // Incrementa el contador de programa
            this.context.pc++;



            if (!Array.isArray(currentInstruction)) {
                throw new Error(`Invalid instruction format: ${currentInstruction}`);
            }

            // Descompone la instrucción en su nombre y argumentos


            const [instruction, ...args] = currentInstruction;
            logger.debug(instruction, ...args);

            // Crea una instancia de la instrucción a través de la fábrica de instrucciones

           const instructionInstance = this.instructionFactory.createInstruction(instruction);

            // Ejecuta la instrucción
           instructionInstance.execute(this, args);
        }
    }
}

export default biesVM;
