import { CustomError, SerializedError } from "./custom_error";
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): SerializedError[];
}
