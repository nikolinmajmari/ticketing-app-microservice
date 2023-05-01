import axios from "axios";
import { useState } from "react";


export default function useRequest({url,method,body,onSuccess}){
    const [errors,setErrors] = useState();

    const doRequest = async ()=>{
        try{
            setErrors(null);
            const response = await axios[method](url,body);
            if( onSuccess){
                onSuccess();
            }
            return response.data;
        }catch(err){
            if( err.response.data.errors){
                setErrors(
                    <div className="mt-2 alert alert-danger">
                        <ul>
                            {
                                err.response.data.errors
                                .map(error=>{
                                    return(
                                        <li>
                                        {error.message} 
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                )
            }else{
                setErrors(
                    <div className="mt-2 alert alert-danger">
                    <ul>
                        <li>{err.message}</li>
                    </ul>
                </div>
                )
            }
            throw err;
        }
    }

    return {doRequest,errors};
}



