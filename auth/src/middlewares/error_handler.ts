import { NextFunction, Request,Response } from "express"
import { CustomError } from "../errors/custom_error";

export const errorHandler = (
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode)
        .send(err.serializeError());
    }


    res.status(500).send({
        message:"Something went rong"
    });
}