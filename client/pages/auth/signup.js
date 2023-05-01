import React from "react";
import { useState } from "react";
import useRequest from "../../hooks/use_request";
import Router from "next/router";

export default function SignUp(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {doRequest,errors}= useRequest({
        url:"/api/users/signup",
        method:"post",
        body:{
            email,password
        },
        onSuccess(){
            Router.push("/");
        }
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        await doRequest();
    }


    return (
        <div className="container" style={{height:"100vh"}}>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{height:"100%"}}>
                <div className="align-self-center">
                    <div className="card p-4">
                        <form className="form"
                            onSubmit={onSubmit}
                        >
                            <h3>Sign Up</h3>
                            <div className="form-group mb-2">
                                <label>Email Address</label>
                                <input className="form-control"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label>Password</label>
                                <input className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                />
                            </div>
                            {
                                errors
                            }
                            <div className="form-group mt-1">
                                <label></label>
                            <button className="btn btn-success form-control">
                                Sign up
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}