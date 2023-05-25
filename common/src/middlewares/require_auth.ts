import { NextFunction, Request,Response } from "express"
import { UnAuthorizedError } from "../errors/unauthorized_error";


export const requireAuth = (
    req:Request,
    res:Response,
    next:NextFunction
    )=>{
    if(!req.currentUser){
        return next(new UnAuthorizedError());
    }
    return next();
}