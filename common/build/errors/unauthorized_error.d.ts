import { CustomError, SerializedError } from "./custom_error";
export declare class UnAuthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializeError(): SerializedError[];
}
