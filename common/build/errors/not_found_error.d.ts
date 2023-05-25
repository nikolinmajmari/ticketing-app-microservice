import { CustomError, SerializedError } from "./custom_error";
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    serializeError(): SerializedError[];
}
