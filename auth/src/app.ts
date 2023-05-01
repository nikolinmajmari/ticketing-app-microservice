import express from "express";
import {json} from "body-parser";
import cookieSession from "cookie-session";
import { currentUserRouter } from "./route/current_user";
import { signInRouter } from "./route/signin";
import { signOutRouter } from "./route/signout";
import { signUpRouter } from "./route/signup";
import { errorHandler } from "./middlewares/error_handler";
import { NotFoundError } from "./errors/not_found_error";
import { currentUserHandler } from "./middlewares/current_user_handler";

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
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);


// not found error 
app.all("*",(req,res,next)=>{
    throw new NotFoundError();
})

/// Error handler
app.use(errorHandler);

export {app};
