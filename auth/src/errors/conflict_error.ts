import { CustomError, SerializedError } from "./custom_error";

export default class ConflictError extends CustomError {
    statusCode=409;
    
    constructor(public message:string){
        super(message);
        Object.setPrototypeOf(this,ConflictError.prototype);
    }

    serializeError(): SerializedError[] {
        return [{
            message: this.message,
        }];
    }
}