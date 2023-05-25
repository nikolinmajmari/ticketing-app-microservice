import { CustomError,SerializedError } from "./custom_error";


export class UnAuthorizedError extends CustomError{
    statusCode=401;

    constructor() {
        super("UnAuthorized");
        Object.setPrototypeOf(this,UnAuthorizedError.prototype);
    }

    serializeError():SerializedError[]{
        return [{message:this.message}]
    }
    
}