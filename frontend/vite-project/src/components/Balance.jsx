import axios from "axios";
import { useEffect, useState } from "react"



export const Balance = ({ value }) => {

    const [balance,setBalance]=useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3000/account/balance",{
            
        }).then(response=>console.log("balance",response.data));
    },[]);

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance :
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}

