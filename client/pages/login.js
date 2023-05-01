import React from "react";
import axios from "axios";

const Login = ()=>{
    return (<div>
        Login papa
    </div>)
}


Login.getInitialProps = async ()=>{
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

export default Login;