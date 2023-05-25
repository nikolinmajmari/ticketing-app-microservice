import express, { NextFunction } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import {ConflictError} from "@microservices-tutorials/common";
import jwt from "jsonwebtoken";
import { validateRequest } from "@microservices-tutorials/common";

const router = express.Router();

const validationRules = [
    body("email")
    .isEmail()
    .withMessage("Email must be valid"),

    body("password")
    .trim()
    .isLength({min:4,max:20})
    .withMessage("Password must be between 4 and 20 length")
];

router.post("/api/users/signup",[
    ...validationRules,
    validateRequest
],
    async function(req:express.Request,res:express.Response,next:NextFunction){
        const {email,password} = req.body;
        try{
            const existingUser = await User.findOne({email});
            if(existingUser){
                return next(new ConflictError("User already exists"));
            }
            const user = User.build({
                email,password
            });
            await user.save();

            // generate jwt
            const userJwt = jwt.sign({
                id:user.id,
                email:user.email
            },process.env.JWT_KEY!);
            // store in session 
            req.session = {
                ...req.session,
                jwt: userJwt
            };
            res
            .status(201)
            .send(user);
        }catch(err){
            next(err);
        }
    }
);


export {router as signUpRouter};