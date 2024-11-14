// Logger.js
class Logger {
    constructor() {
        this.enabled = true; // Control para habilitar/deshabilitar el logger
        this.levels = { info: true, error: true, debug: false }; // Niveles de logging
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    setLevel(level, state) {
        if (this.levels.hasOwnProperty(level)) {
            this.levels[level] = state;
        }
    }

    info(message, ...args) {
        if (this.enabled && this.levels.info) {
            console.info("INFO:", message, ...args);
        }
    }

    error(message, ...args) {
        if (this.enabled && this.levels.error) {
            console.error("ERROR:", message, ...args);
        }
    }

    debug(message, ...args) {
        if (this.enabled && this.levels.debug) {
            console.debug("DEBUG:", message, ...args);
        }
    }
}

export default new Logger();
