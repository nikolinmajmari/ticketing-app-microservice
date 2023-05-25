import { CustomError, SerializedError } from "./custom_error";
export class DatabaseConnectionError extends CustomError{
    reason = "Error connecting to database"
    statusCode = 500;
    constructor(){
        super("Error connecting to database");
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }
    serializeError(): SerializedError[] {
        return [{
            message:this.reason
        }];
    }
}