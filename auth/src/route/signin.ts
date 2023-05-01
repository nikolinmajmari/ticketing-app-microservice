import express,{NextFunction, Request,Response} from "express";
import {body} from "express-validator";
import PasswordHasher from "../services/password_hasher";
import { User } from "../models/user";
import { validateRequest } from "../middlewares/validate-request";
import { currentUserRouter } from "./current_user";
import BadRequestError from "../errors/bad_request_error";
import jwt from "jsonwebtoken";

const router = express.Router();



router.post("/api/users/signin",
[
    body("email")
    .isEmail()
    .withMessage("Email must be valid"),
    body("password")
    .trim()
    .notEmpty()
    .withMessage("You must supply a password"),
    validateRequest
]
,
async (req:Request,res:Response,next:NextFunction)=>{
    const {email,password}= req.body;
    const existingUser = await User.findOne({email});
    if(!existingUser){
        return next(new BadRequestError("Invalid Credentials"));
    }
    const passwordsMatch = await PasswordHasher.compare(
        existingUser.password,
        password
    );
    if(!passwordsMatch){
        return next(new BadRequestError("Invalid Credentials"))
    }
    // generate jwt
    const userJwt = jwt.sign({
        id:existingUser.id,
        email:existingUser.email
    },process.env.JWT_KEY!);
    // store in session 
    req.session = {
        ...req.session,
        jwt: userJwt
    };

    res.send(existingUser);
});


export {router as signInRouter};