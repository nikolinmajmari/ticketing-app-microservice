import { ValidationError } from "express-validator";
import { SuperCall } from "typescript";
import { CustomError, SerializedError } from "./custom_error";
export class RequestValidationError extends CustomError {
   
    statusCode = 400;

    constructor(public errors: ValidationError[]){
       super('Invalid request parameter');
       Object.setPrototypeOf(this,RequestValidationError.prototype);
     }
    serializeError(): SerializedError[] {
        return  [
                ...this.errors.map(
                    (error)=>({
                        message: error.msg,
                        field: error.param
                    })
                )
            ]
    }
}
