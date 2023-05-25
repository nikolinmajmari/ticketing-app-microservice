export abstract class CustomError extends Error implements SerializableError{
    abstract statusCode: number;


    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,CustomError.prototype);
    }


    serializeError():SerializedError[]{
        throw Error("not implemented");
    }
}

export interface SerializableError{
    serializeError():SerializedError[];
}


export interface SerializedError{
    message:string;
    field?: undefined|string;
}