/**
 * @file Logger.js
 * @description Clase Logger para gestionar mensajes de registro en la consola, permitiendo niveles
 * configurables (info, error, debug) y la posibilidad de habilitar/deshabilitar el registro.
 *
 * Este archivo fue optimizado con la colaboración de ChatGPT, incluyendo sugerencias para
 * mejorar la modularidad y flexibilidad del logger.
 */

class Logger {
    /**
     * Constructor de la clase Logger.
     * Inicializa el estado del logger y los niveles de registro.
     */
    constructor() {
        this.enabled = true; // Control para habilitar/deshabilitar el logger.
        this.levels = { info: true, error: true, debug: false }; // Niveles de logging.
    }

    /**
     * Habilita el logger, permitiendo que se registren mensajes.
     */
    enable() {
        this.enabled = true;
    }

    /**
     * Desactiva el logger, evitando que se registren mensajes.
     */
    disable() {
        this.enabled = false;
    }

    /**
     * Configura el estado de un nivel de registro específico.
     * @param {string} level - Nivel de registro a configurar (info, error, debug).
     * @param {boolean} state - Estado del nivel (true para habilitar, false para deshabilitar).
     */
    setLevel(level, state) {
        if (this.levels.hasOwnProperty(level)) {
            this.levels[level] = state;
        }
    }

    /**
     * Registra un mensaje en el nivel de información (info), si está habilitado.
     * @param {string} message - Mensaje a registrar.
     * @param {...any} args - Argumentos adicionales opcionales.
     */
    info(message, ...args) {
        if (this.enabled && this.levels.info) {
            console.info("INFO:", message, ...args);
        }
    }

    /**
     * Registra un mensaje en el nivel de error (error), si está habilitado.
     * @param {string} message - Mensaje a registrar.
     * @param {...any} args - Argumentos adicionales opcionales.
     */
    error(message, ...args) {
        if (this.enabled && this.levels.error) {
            console.error("ERROR:", message, ...args);
        }
    }

    /**
     * Registra un mensaje en el nivel de depuración (debug), si está habilitado.
     * @param {string} message - Mensaje a registrar.
     * @param {...any} args - Argumentos adicionales opcionales.
     */
    debug(message, ...args) {
        if (this.enabled && this.levels.debug) {
            console.debug("DEBUG:", message, ...args);
        }
    }
}

// Exporta una instancia única de la clase Logger para uso global.
export default new Logger();
