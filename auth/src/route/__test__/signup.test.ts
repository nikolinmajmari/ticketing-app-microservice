import request from "supertest";

import {app} from "../../app";


it("returns 201 on successfull sign up ",async ()=>{
    return request(app)
    .post("/api/users/signup")
    .send({
        "email":"nikolin@nikolin.com",
        "password":"password"
    })
    .expect(201);
});

it("returns 400 with an invalid email",async ()=>{
    return request(app)
    .post("/api/users/signup")
    .send({
        "email":"n@n",
        "password":"password"
    })
    .expect(400);
})

it("returns 400 with an invalid password",async ()=>{
    return request(app)
    .post("/api/users/signup")
    .send({
        "email":"n@nuk.co",
        "password":"pp"
    })
    .expect(400);
})
it("returns 400 with missing email and password",async ()=>{
    return request(app)
    .post("/api/users/signup")
    .send({})
    .expect(400);
})

it("disallows dublicate emails",async ()=>{
    await request(app)
    .post("/api/users/signup")
    .send({
        email:"test@test.com",
        password:"password"
    })
    .expect(201);
    await request(app)
    .post("/api/users/signup")
    .send({
        email:"test@test.com",
        password:"password"
    })
    .expect(409);

});

it("sets a cookie after successfull sign up",
async ()=>{
    const response = await request(app)
    .post("/api/users/signup")
    .send({
        email:"test@test.com",
        password:"password"
    })
    .expect(201);
    expect(
        response.get("Set-Cookie")
    ).toBeDefined();
});

