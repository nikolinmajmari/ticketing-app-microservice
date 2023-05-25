import { CustomError, SerializedError } from "./custom_error";

export class BadRequestError extends CustomError{
    statusCode = 400;

    constructor(public message:string){
        super(message);
        Object.setPrototypeOf(this,BadRequestError.prototype);
        this.message = message;
    }

    serializeError(): SerializedError[] {
        return [{
            message:  this.message
        }];
    }
}