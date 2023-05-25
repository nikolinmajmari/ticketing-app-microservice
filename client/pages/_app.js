import "bootstrap/dist/css/bootstrap.css";
import clientBuilder from "../api/client.builder";

const AppComponent = function({
    Component,pageProps,currentUser
}){
    return (
        <div>
            <h1>Header! {currentUser.email}</h1>
            <Component {...pageProps}/>
        </div>
    );
}



AppComponent.getInitialProps = async (appContext)=>{
    const client =  clientBuilder(appContext.ctx);
    const {data} = await client.get('/ap i/users/currentuser');
    let pageProps = {};
    if(appContext.Component.getInitialProps){
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    ///
    console.log(pageProps);
    return {
        pageProps,
        ...data
    };
}

export default AppComponent;