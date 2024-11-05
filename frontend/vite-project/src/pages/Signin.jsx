import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signin(){
  const navigate=useNavigate();
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  async function handlesignin(){
    try{
    const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
      "username":username,
      "password":password
    });
    // console.log(response.data);
    localStorage.setItem("token",response.data);
    navigate("/dashboard");
    }
    catch(err){
      console.log(err);
      alert("wrong credentials");
    }
  }
  
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e)=>{
          setUserName(e.target.value);
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={handlesignin} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin;