"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const custom_error_1 = require("./custom_error");
class ConflictError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 409;
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
    serializeError() {
        return [{
                message: this.message,
            }];
    }
}
exports.ConflictError = ConflictError;
