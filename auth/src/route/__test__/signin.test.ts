import request from "supertest";

import {app} from "../../app";


it("fails when a email that does not exists is supplied",async ()=>{
    return request(app)
    .post("/api/users/signin")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"password"
    })
    .expect(400);
});

it("fails when an incorrect password is suplied",async ()=>{
    await request(app)
    .post("/api/users/signup")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"password"
    })
    .expect(201);

    await request(app)
    .post("/api/users/signin")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"incorrect"
    })
    .expect(400);
})


it("responds with a cookie on successfull request",async ()=>{
    await request(app)
    .post("/api/users/signup")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"password"
    })
    .expect(201);

    const response = await request(app)
    .post("/api/users/signin")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"password"
    })
    .expect(200);
    expect(response.get("Set-Cookie"))
    .toBeDefined();
})