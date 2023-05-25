import express from "express";
import {json} from "body-parser";
import cookieSession from "cookie-session";
import { NotFoundError, currentUserHandler, errorHandler } from "@microservices-tutorials/common";

const app = express();
app.set("trust proxy",true)
app.use(json());
app.use(
    cookieSession({
        signed: false, 
        secure: process.env.NODE_ENV!=="test",
    })
);
app.use(currentUserHandler);


// not found error 
app.all("*",(req,res,next)=>{
    throw new NotFoundError();
})

/// Error handler
app.use(errorHandler);

export {app};
