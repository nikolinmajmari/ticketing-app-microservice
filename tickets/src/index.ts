import dotenv from "dotenv";
dotenv.config();
import mongoose,{ connectToMongose } from "./config/db";

import {app} from "./app";

const start = async ()=>{
    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY missing for service");
    }
    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined for tickets service')
    }
    await connectToMongose();
    // fewoifewjiof
    app.listen(3000,()=>{
        console.log("hey from auth     ");
        console.log("listening auth on 3000");
    })
}

start();