import axios from "axios";

const LandingPage = ({data})=>{
    console.log("I am axios in component");
    return <h1>Index page with {JSON.stringify(data)}</h1>
}


LandingPage.getInitialProps = async ()=>{
    try  {
        if(typeof window ==="undefined"){
            const {data} = await axios.get(
                "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
                {
                    headers:{
                        Host: "ticketing.dev",
                    }
                }
            );
        }else{
            const {data} = await axios.get(
                "/api/users/currentuser",
            );
        }
    return {data};
    }catch(e){
        console.log(e.message);
        return {data:e.message};
    }
}

export default LandingPage;