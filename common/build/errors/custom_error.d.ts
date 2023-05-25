export declare abstract class CustomError extends Error implements SerializableError {
    abstract statusCode: number;
    constructor(message: string);
    serializeError(): SerializedError[];
}
export interface SerializableError {
    serializeError(): SerializedError[];
}
export interface SerializedError {
    message: string;
    field?: undefined | string;
}
