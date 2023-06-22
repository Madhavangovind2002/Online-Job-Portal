import React, { useState } from 'react'
import "./Login.css"
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const[usname,setUser]=useState("");
    const[pass,setPass]=useState("");
    const[status,setStatus]=useState("")
    const[destination,setDestination] =useState("")
    //const register=()=>{
      //  console.log(username);
       // console.log(password);
    //}
    const createUser =async ()=>{
     try{
      Axios.post("http://localhost:3001/api/auth/login",{username:usname,password:pass}).then((response)=>{
        if(response.data.isAdmin)
        {
          navigate("/Addjob",{ state:{destination}});
          console.log(response.data.isAdmin);
          alert("LOGIN SUCESSFULL")
        }
        else{
          console.log(response.data.isAdmin);
          alert("LOGIN SUCESSFULL")
          navigate("/jobs",{ state:{destination}});
        }
      })
     }
     catch(err){
          console.log(err)
     }
    }

  return (
    <div className='login'>
    <div className='lContainer'>
       <p className='para'>LOGIN</p><br/>
   <input type="text" onChange={(e)=>setUser(e.target.value)}placeholder='username.....'/><br/><br/><br/>
   <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='placeholder.......'/><br/><br/><br/>
   <button className='lButton' onClick={createUser}>   Login</button><br/><br/>
   </div>
   <p>{status}</p>
   </div>
  )
}

export default Login;