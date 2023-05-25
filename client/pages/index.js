import clientBuilder from "../api/client.builder";

const LandingPage = ({currentUser})=>{
    console.log('syncyng')
    return currentUser ? 
    <h1>You are signed in {currentUser.name} </h1>
    :
    <h1>You are not signed in </h1>;
}


LandingPage.getInitialProps = async ({req})=>{
    const client =  clientBuilder({req});
    try  {
        const {data} = await client.get('/api/users/currentuser');
        return data;
    }catch(e){
        console.log(e.message);
        return {data:e.message};
    }
}

export default LandingPage;