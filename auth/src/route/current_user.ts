import express from "express";
import { requireAuth } from "../middlewares/require_auth";

const router = express.Router();

router.get(
    "/api/users/currentuser",
    requireAuth
    ,(req,res,next)=>{
        return res.send({currentUser:req.currentUser||null});
    });
export {router as currentUserRouter};