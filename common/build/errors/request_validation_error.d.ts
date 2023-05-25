import { ValidationError } from "express-validator";
import { CustomError, SerializedError } from "./custom_error";
export declare class RequestValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeError(): SerializedError[];
}
