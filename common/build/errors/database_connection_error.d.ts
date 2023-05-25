import { CustomError, SerializedError } from "./custom_error";
export declare class DatabaseConnectionError extends CustomError {
    reason: string;
    statusCode: number;
    constructor();
    serializeError(): SerializedError[];
}
