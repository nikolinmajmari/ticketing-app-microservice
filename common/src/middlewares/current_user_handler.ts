import { NextFunction, Request,Response } from "express"
import { verify } from "jsonwebtoken";

interface UserPayload{
    id: string,
    email:string,
}

declare global{
    namespace Express{
        interface Request {
            currentUser?:UserPayload
        }
    }
}


export const currentUserHandler = (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    if(!req.session?.jwt!){
        return next();
    }
    try{
        const payload = verify(
            req.session.jwt!,
            process.env.JWT_KEY!
        );
        req.currentUser = payload as UserPayload;
    }catch(err){}
    return next();
}
