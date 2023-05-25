"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const custom_error_1 = require("./custom_error");
class BadRequestError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.message = message;
    }
    serializeError() {
        return [{
                message: this.message
            }];
    }
}
exports.BadRequestError = BadRequestError;
