import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import {app} from "../app";

let mongo:any;

beforeAll(async ()=>{
    mongo = await MongoMemoryServer.create();
    const mongoUri = await mongo.getUri();
    await mongoose.connect(mongoUri,{});
    process.env.JWT_KEY= "secret";
});

beforeEach(async ()=>{
    const collections = await mongoose.connection.db.collections();
    for(let collection of collections){
        await collection.deleteMany({});
    }
});

afterAll(async ()=>{
    if(mongo){
        await mongo.stop();
    }
    await mongoose.connection.close();
})
declare global {
    var signIn: () => Promise<string[]>;
}
global.signIn = async ()=>{
    const email = "test@test.com";
    const password="password";
    const response = await request(app)
        .post("/api/users/signup")
        .send({
            email,password
        })
        .expect(201);

    const cookie = response.get("Set-Cookie");
    return cookie;
}