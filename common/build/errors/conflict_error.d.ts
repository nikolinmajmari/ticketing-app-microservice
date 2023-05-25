import { CustomError, SerializedError } from "./custom_error";
export declare class ConflictError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): SerializedError[];
}
