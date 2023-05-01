import request from "supertest";

import {app} from "../../app";


it("returns 201 on successfull sign up ",async ()=>{
    const cookie = await global.signIn();

    const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie",cookie)
    .send()
    .expect(200);
    expect(response.body.currentUser.email).toEqual(
        "test@test.com"
    )
});

it("returns 401 if not authenticated",async ()=>{
    const response = await request(app)
    .get("/api/users/currentUser")
    .send()
    .expect(401);
});