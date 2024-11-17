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

import logger from './Logger.js';
import promptSync from 'prompt-sync';
/**
 *
 * Clase Instruction que vamos a utilizar como una
 * interfaz para crear el factory tiene una execute
 * que vamos a implementar en las instrucciones
 */
class Instruction {
    execute(vm, args){
        throw new Error("Execute debe ser implementado");
    }
}

/**
 * Clase de la instruccion INI que inicializa la VM
 * machine
 */
class INIInstruction extends Instruction {
    execute(vm, args){
        vm.stack.length = 0;
        vm.scope.length = 0;
        vm.context.pile.length = 0;

        const functionName = args[0];

        const functionToExecute = vm.functions[functionName];

        if (functionToExecute) {
            vm.code = functionToExecute.body.slice();
            vm.context.pc = 0;
        } else {
            throw new Error(`Function ${functionName} not found.`);
        }

    }
}

/**
 * Clase de la instruccion HLT que finaliza la VM
 * machine
 */
class HLTInstruction extends Instruction {
   execute(vm, args) {
       vm.stack.length = 0;
       vm.scope.length = 0;
       vm.context.pile.length = 0;
       vm.code = [];
   }
}

/**
 * Clase de la instruccion POP que popea el
 * top del stack
 */
class POPInstruction extends Instruction {
    execute(vm, args) {
        if (vm.stack.length === 0) {
            throw new Error("Stack underflow");
        } else {
            vm.stack.pop();
        }
    }
}

/**
 * Clase de la instruccion SWP que intercambia dos
 * valores del stack
 */
class SWPInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push(N);
        vm.stack.push(M);
    }
}

/**
 * Clase de la instruccion LDV que carga un
 * valor al stack
 */
class LDVInstruction extends Instruction {
    execute(vm, args) {
        let value = args[0];

        // Si es una cadena literal, asegúrate de eliminar comillas extras
        if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1); // Elimina las comillas
        }

        // Si es una lista representada como cadena, intenta parsearla
        if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                // Si no es una lista válida, se deja como cadena literal
            }
        }

        vm.stack.push(value); // Empuja el valor al stack
    }
}


/**
 * Clase de la instruccion BST para almacenar
 * Valores en el binding
 */
class BSTInstruction extends Instruction {
    execute(vm, args) {
        const [E, K] = args;
        if (!vm.scope[E]) {
            vm.scope[E] = {};
        }
        const value = vm.stack.pop();
        vm.scope[E][K] = value; // Almacena el valor (incluyendo listas)
    }
}

/**
 * Clase de la instruccion EXP que implementa
 * un exponencial
 */
class EXPInstruction extends Instruction {
    execute(vm, args) {
        const exponent = vm.stack.pop(); // Obtiene el exponente
        const base = vm.stack.pop();    // Obtiene la base
        if (typeof base !== 'number' || typeof exponent !== 'number') {
            throw new Error(`Los operandos deben ser números: ${base}, ${exponent}`);
        }
        vm.stack.push(Math.pow(base, exponent)); // Calcula base^exponent
    }
}

/**
 * Clase de la instruccion BLD que carga un
 * valor de el binding
 */
class BLDInstruction extends Instruction {
    execute(vm, args) {
        const [E, K] = args;
        if (vm.scope[E] === undefined) {
            throw new Error(`No se encontró el ambiente en index ${E}`);
        }
        const value = vm.scope[E][K];
        if (value === undefined) {
            throw new Error(`No se encontró el valor en index ${K} del ambiente ${E}`);
        }
        vm.stack.push(value); // Recupera el valor tal cual
    }
}


/**
 * Clase de la Instruccion ADD que realiza una suma
 * de dos numeros en el top del stack
 */
class ADDInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof N !== 'number' || typeof M !== 'number') {
            throw new Error(`Los operandos deben ser numeros: ${N}, ${M}`);
        }
        vm.stack.push(M+N);
    }
}

/**
 * Clase de la instruccion SUB que realiza la resta de
 * dos numeros del top del stack
 */
class SUBInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof N !== 'number' || typeof M !== 'number') {
            throw new Error(`Los operandos deben ser numeros: ${N}, ${M}`);
        }
        vm.stack.push(M-N);
    }
}

/**
 * Clase de la instruccion MUL que realiza la multiplicacion
 * de dos numeros del top del stack
 */
class MULInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof N !== 'number' || typeof M !== 'number') {
            throw new Error(`Los operandos deben ser numeros: ${N}, ${M}`);
        }
        vm.stack.push(N*M);
    }
}

/**
 * Clase de la instruccion DIV que realiza la division
 * de dos numeros del top del stack
 */
class DIVInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof N !== 'number' || typeof M !== 'number') {
            throw new Error(`Los operandos deben ser numeros: ${N}, ${M}`);
        } else if (N === 0) {
            throw new Error("Division por cero no existe");
        }
        vm.stack.push(M/N);
    }
}

/**
 * Clase de la instruccion NEG que niega el numero
 * del top del stack
 */
class NEGInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();
        if (typeof value !== 'number') {
            throw new Error(`Debe ser un numero: ${value}`);
        }
        vm.stack.push(-value);
    }
}

/**
 * Clase de la instruccion SGN que devuelve si el
 * numero es positivo
 */
class SGNInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();
        if (typeof value !== 'number') {
            throw new Error(`Debe ser un numero: ${value}`);
        }
        vm.stack.push(value > 0 ? 1 : 0);
    }
}

/**
 * Clase de la instruccion EQ que realiza la logica
 * basica de igualdad
 */
class EQInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((N === M) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion GT que realiza la logica
 * basica de mayor
 */
class GTInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((N > M) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion GTE que realiza la logica
 * basica de mayor o igual
 */
class GTEInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((M >= N) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion LT que realiza la logica
 * basica de menor
 */
class LTInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((M < N) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion LTE que realiza la logica
 * basica de menor
 */
class LTEInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((M <= N) ? 1 : 0);
    }
}
/**
 * Clase de la instruccion AND que realiza la logica
 * basica
 */
class ANDInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((N && M) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion OR que realiza la logica
 * basica
 */
class ORInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((N || M) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion XOR que realiza la logica
 * basica
 */
class XORInstruction extends Instruction {
    execute(vm, args) {
        const [N, M] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push((N !== M) ? 1 : 0);
    }
}

/**
 * Clase de la instruccion NOT que devuelve el
 * contrario del valor ingresado
 */
class NOTInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();
        if (typeof value !== 'number') {
            throw new Error(`Debe ser un número: ${value}`);
        }
        vm.stack.push(value ? 0 : 1); // Invierte el valor
    }
}

/**
 * Clase de la instruccion SNT que verifica
 * si un String es nulo
 */
class SNTInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();
        if (typeof value !== 'string') {
            throw new Error(`Debe ser un string: ${value}`);
        }
        vm.stack.push(value);
        vm.stack.push(value === "" ? 1 : 0);
    }
}

/**
 * Clase de la instruccion STK que toma el k-esimo
 * del string
 */
class STKInstruction extends Instruction {
    execute(vm, args) {
        const [k, value]= [vm.stack.pop(), vm.stack.pop()];
        if (typeof value != 'string') {
            throw new Error(`Valor debe ser un string" ${value}`)
        }
        if (typeof k !== 'number' || k >= value.length) {
            throw new Error(`Index invalido: ${k}`);
        }
        vm.stack.push(value[k]);

    }
}

/**
 * Clase de la instruccion SRK que recupera el resto
 * despues del k-esimo valor de un string
 */
class SRKInstruction extends Instruction {
    execute(vm, args) {
        const [k, value] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof value !== 'string') {
            throw new Error(`Valor debe ser un string ${value}`)
        }
        if (typeof k !== 'number' || k < 0 || k > value.length) {
            throw new Error(`Index invalido: ${k}`);
        }
        if (value.length === 1) {
            vm.stack.push("");
            return;
        }
        vm.stack.push(value.slice(k));
    }
}

/**
 * Clase de la instruccion CAT que concatena
 * dos strings
 */
class CATInstruction extends Instruction {
    execute(vm, args) {
        const [H1, H2] = [vm.stack.pop(), vm.stack.pop()];
        vm.stack.push(String(H2) + String(H1));
    }
}

/**
 * Clase de la instruccion TOS que converte
 * un valor a string
 */
class TOSInstruccion extends Instruction {
    execute(vm, args) {
        const valor = vm.stack.pop();
        vm.stack.push(valor.toString());
    }
}

/**
 * Clase de la instruccion LNT que verifica si una lista
 * esta vacia
 */
class LNTInstruction extends Instruction {
    execute(vm, args) {
        let list = vm.stack.pop();
        if (typeof list === 'string') {
            try {
                list = JSON.parse(list);
            } catch (e) {
                throw new Error(`Valor no valido para LNT: ${list}`)
            }
        }
        if (!Array.isArray(list)) {
            throw new Error(`Valor debe ser una lista ${list}`)
        }
        vm.stack.push(list.length === 0 ? 1 : 0);
    }
}
/**
 * Clase de la instruccion LEN que verifica el largo de
 * una lista o string
 */
class LENInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();

        if (Array.isArray(value)) {
            vm.stack.push(value.length);
        } else if (typeof value === 'string') {
            vm.stack.push(value.length);
        } else {
            throw new Error(`Valor no válido para LEN: ${value}`);
        }

        logger.debug(`LEN calculado: ${vm.stack[vm.stack.length - 1]}`);
    }
}



/**
 * Clase de la instruccion LIN que ingresa en el inicio
 * de una lista
 */
class LINInstruction extends Instruction {
    execute(vm, args) {
        let [list, value] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof list === 'string') {
            try {
                list = JSON.parse(list);
            } catch (e) {
                throw new Error(`Valor no valido para LIN: ${list}`)
            }
        }
        if (!Array.isArray(list)) {
            throw new Error(`Valor debe ser una lista" ${list}`)
        }
        list.unshift(value);
        vm.stack.push(list);
    }
}
/**
 * Clase de la instruccion MKLIST que construye
 *  una lista
 */
class MKLISTInstruction extends Instruction {
    execute(vm, args) {
        const n = args[0]; // Número de elementos para formar la lista

        if (typeof n !== 'number' || n < 0) {
            throw new Error(`MKLIST requiere un número válido, recibido: ${n}`);
        }

        if (vm.stack.length < n) {
            throw new Error(`MKLIST: No hay suficientes elementos en el stack para formar la lista`);
        }

        // Extrae los últimos n elementos del stack y forma la lista
        const list = [];
        for (let i = 0; i < n; i++) {
            list.unshift(vm.stack.pop());
        }

        vm.stack.push(list); // Empuja la lista resultante al stack
    }
}




/**
 * Clase de la instruccion LTK que recupera el k-esimo
 * valor de una lista
 */
class LTKInstruction extends Instruction {
    execute(vm, args) {
        let [k, list] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof list === 'string') {
            try {
                list = JSON.parse(list);
            } catch (e) {
                throw new Error(`Valor no valido para LTK: ${list}`)
            }
        }
        if (!Array.isArray(list)) {
            throw new Error(`Valor debe ser una lista ${list}`)
        }
        if (typeof k !== 'number' || k < 0 || k >= list.length) {
            throw new Error(`Index invalido: ${k}`);
        }
        vm.stack.push(list[k]);
    }
}

/**
 * Clase de la instruccion LRK que recupera la lista
 * despues del k-esimo valor
 */
class LRKInstruction extends Instruction {
    execute(vm, args) {
        let [k, list] = [vm.stack.pop(), vm.stack.pop()];
        if (typeof list === 'string') {
            try {
                list = JSON.parse(list);
            } catch (e) {
                throw new Error(`Valor no valido para LRK: ${list}`)
            }
        }
        if (!Array.isArray(list)) {
            throw new Error(`Valor debe ser una lista" ${list}`)
        }
        if (typeof k !== 'number' || k < 0 || k > list.length) {
            throw new Error(`Index invalido: ${k}`);
        }
        if (k === list.length()){
            vm.stack.push([]);
            return;
        }
        vm.stack.push(list.slice(k));
    }
}

/**
 * Clase de la instruccion TOL que convierte un valor
 * en una lista
 */
class TOLInstruction extends Instruction {
    execute(vm, args) {
        const value = vm.stack.pop();
        if (!Array.isArray(value)) {
            vm.stack.push([value]);
        } else {
            vm.stack.push(value);
        }
    }
}

/**
 * Clase de la instruccion NOP que no hace nada
 */
class NOPInstruction extends Instruction {
    execute(vm, args){
    }
}

/**
 * Clase de la instruccion BR que realiza un salto
 * incondicional
 */
class BRInstruction extends Instruction {
    execute(vm, args) {
        const [offset] = args;
        if (typeof offset !== 'number' ) {
            throw new Error(`Offset invalido: ${offset}`);
        }
        const newPc = vm.context.pc + offset;
        if(newPc < 0 || newPc>=vm.code.length) {
            throw new Error(`Salto fuera de rango: ${newPc}`);
        }
        vm.context.pc = newPc;
    }
}

/**
 * Clase de la instruccion BT que realiza un salto
 * si unacondicion previaes verdadera
 */
class BTInstruction extends Instruction {
    execute(vm, args) {
        const [offset] = args;
        const trueVal = vm.stack.pop();
        if (trueVal) {
            if (typeof offset !== 'number' ) {
                throw new Error(`Offset invalido: ${offset}`);
            }
            const newPc = vm.context.pc + offset;
            if(newPc < 0 || newPc>=vm.code.length) {
                throw new Error(`Salto fuera de rango: ${newPc}`);
            }
            vm.context.pc = newPc;
        }
    }
}

/**
 * Clase de la instruccion BF que realiza un salto
 * si una condicion previa es falsa
 */
class BFInstruction extends Instruction {
    execute(vm, args) {
        const [offset] = args;
        const falseVal = vm.stack.pop();
        if (!falseVal) {
            if (typeof offset !== 'number' ) {
                throw new Error(`Offset invalido: ${offset}`);
            }
            const newPc = vm.context.pc + offset;
            if(newPc < 0 || newPc>=vm.code.length) {
                throw new Error(`Salto fuera de rango: ${newPc}`);
            }
            vm.context.pc = newPc;
        }
    }
}

/**
 * Clase de la instruccion LDF que llama a una
 * funcion y la carga al stack
 */
class LDFInstruction extends Instruction {
    execute(vm, args) {
        const [name] = args;
        const func = vm.functions[name];
        if(!func) {
            throw new Error(`La funcion ${name} no se encontro`);
        }
        vm.stack.push(func);
    }
}

/**
 * Clase de la instruccion APP que hace apply a
 * una funcion
 */
class APPInstruction extends Instruction {
    execute(vm, args) {
        logger.debug("Stack", vm.stack);
        const closure = vm.stack.pop();
        logger.debug(closure);
        if (typeof closure !== 'object' || !Array.isArray(closure.body)) {
            throw new Error(`Funcion invalida: ${typeof closure.body}`);
        }
        let k = args[0] || 1;
        const functionArgs = [];
        for (let i = 0; i < k; i++) {
            functionArgs.push(vm.stack.pop());
        }

        vm.context.pile.push({code: vm.code.slice(), stack: vm.stack.slice(), scope: vm.scope.slice(), pc: vm.context.pc});

        vm.code = closure.body.slice();

        vm.scope.push(functionArgs);
        vm.context.pc = 0;
    }
}

/**
 * Clase de la instruccion RET que retorna
 * la funcion al scope principal
 */
class RETInstruction extends Instruction {
    execute(vm, args) {
        const [value, pContext] = [vm.stack.pop(), vm.context.pile.pop()];
        if (!pContext) {
            throw new Error("Context stack overflow");
        }
        vm.code = pContext.code;
        vm.stack = pContext.stack;
        vm.scope = pContext.scope;
        vm.context.pc = pContext.pc;

        vm.stack.push(value);
    }
}

/**
 * Clase de la instruccion CST que realiza
 * casting de elementos number, string y
 * list
 */
class CSTInstruction extends Instruction {
    execute(vm, args) {
        const [castType] = args;
        const value = vm.stack.pop();
        if (castType === 'bool') {
            // Cualquier valor diferente de 0, "", o null será true
            vm.stack.push(!!value);
        }
        else if (castType === 'number') {
            const convertedValue = Number(value);
            if (isNaN(convertedValue)) {
                throw new Error(`Fallo la conversión a número: "${value}" no es válido`);
            }
            vm.stack.push(convertedValue);
        } else if (castType === 'string') {
            // Si es una lista, conviértela a string con formato adecuado
            if (Array.isArray(value)) {
                vm.stack.push(`[${value.join(', ')}]`);
            } else {
                vm.stack.push(String(value));
            }
        } else if (castType === 'list') {
            if (!Array.isArray(value)) {
                throw new Error(`El valor no es una lista: ${value}`);
            }
            vm.stack.push(value);
        } else {
            throw new Error(`Tipo de casting no soportado: ${castType}`);
        }
    }
}


/**
 * Clase de La instruccion INO que verifica
 * si el valor es una instancia de un tipo
 */
class INOInstruction extends Instruction {
    execute(vm, args) {
        const [instanceType] = args;
        const value = vm.stack.pop();

        let isInstanceOf = 0;
        if (instanceType === 'number' && typeof value === 'number') {
            isInstanceOf = 1;
        } else if (instanceType === 'string' && typeof value === 'string') {
            isInstanceOf = 1;
        } else if (instanceType === 'list' && Array.isArray(value)) {
            isInstanceOf = 1;
        }

        vm.stack.push(isInstanceOf);
    }
}

/**
 * Clase de la instruccion PRN que imprime
 * el valor en el top del stack
 */
class PRNInstruction extends Instruction {
    execute(vm, args) {
        if (vm.stack.length === 0) {
            throw new Error("Stack underflow");
        }

        const value = vm.stack.pop();

        if (Array.isArray(value)) {
            // Imprime la lista con formato adecuado
            console.log(`[${value.join(', ')}]`);
        } else {
            // Imprime valores no-lista directamente
            console.log(value);
        }
    }
}


/**
 * Clase input para permitir al usuario ingresar informacion
 */
class INPUTInstruction extends Instruction {
    execute(vm, args) {
        const prompt = promptSync(); // Inicializa el prompt
        const input = prompt('Ingrese un valor: '); // Solicita entrada al usuario
        vm.stack.push(input); // Apila el valor ingresado
    }
}

/**
 * Clase factory para crear el objeto y devolverlo
 */
class InstructionFactory {
    constructor() {
        this.strategyMap = {
            'INI': new INIInstruction(),
            'HLT': new HLTInstruction(),
            'POP': new POPInstruction(),
            'SWP': new SWPInstruction(),
            'LDV': new LDVInstruction(),
            'BST': new BSTInstruction(),
            'BLD': new BLDInstruction(),
            'ADD': new ADDInstruction(),
            'SUB': new SUBInstruction(),
            'MUL': new MULInstruction(),
            'DIV': new DIVInstruction(),
            'NEG': new NEGInstruction(),
            'SGN': new SGNInstruction(),
            'EQ': new EQInstruction(),
            'GT': new GTInstruction(),
            'GTE': new GTEInstruction(),
            'LT': new LTInstruction(),
            'LTE': new LTEInstruction(),
            'AND': new ANDInstruction(),
            'OR': new ORInstruction(),
            'XOR': new XORInstruction(),
            'NOT': new NOTInstruction(),
            'SNT': new SNTInstruction(),
            'STK': new STKInstruction(),
            'SRK': new SRKInstruction(),
            'CAT': new CATInstruction(),
            'TOS': new TOSInstruccion(),
            'LNT': new LNTInstruction(),
            'LIN': new LINInstruction(),
            'LTK': new LTKInstruction(),
            'LRK': new LRKInstruction(),
            'TOL': new TOLInstruction(),
            'NOP': new NOPInstruction(),
            'BR': new BRInstruction(),
            'BT': new BTInstruction(),
            'BF': new BFInstruction(),
            'LDF': new LDFInstruction(),
            'APP': new APPInstruction(),
            'RET': new RETInstruction(),
            'CST': new CSTInstruction(),
            'INO': new INOInstruction(),
            'PRN': new PRNInstruction(),
            'EXP': new EXPInstruction(),
            'INPUT': new INPUTInstruction(),
            'MKLIST': new MKLISTInstruction(),
            'LEN': new LENInstruction(),
        };
    }

    createInstruction(instructionName) {
        const instruction = this.strategyMap[instructionName];
        if (!instruction) {
            throw new Error(`Unknown instruction: ${instructionName}`);
        }
        return instruction;
    }
}

export default InstructionFactory;
