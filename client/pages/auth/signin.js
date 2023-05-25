import axios from "axios";
import React from "react";
import { useState } from "react";
import useRequest from "../../hooks/use_request";
import Router from "next/router";

function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {doRequest,errors}= useRequest({
        url:"/api/users/signin",
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
                            <h3>Sign In</h3>
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
                                Sign in
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

SignIn.getInitialProps = async ()=>{
    try  {
        if(typeof window ==="undefined"){
            const {data } = await axios.get(
                "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
            );
        }else{
            const {data} = await axios.get(
                "/api/users/currentuser",
            );
        }
    return data;
    }catch(e){
        console.log(e);
    }
    return {
        data:"hello"
    };
}

export default SignIn;