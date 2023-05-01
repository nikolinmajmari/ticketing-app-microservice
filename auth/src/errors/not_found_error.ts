import { CustomError, SerializedError } from "./custom_error";


export class NotFoundError extends CustomError{
    statusCode= 404;

    constructor(){
        super("Route not found");
        Object.setPrototypeOf(this,NotFoundError.prototype);
    }

    serializeError(): SerializedError[] {
        return [{message: "Not Found"}];
    }
}