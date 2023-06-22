import React, { useState,useEffect } from 'react'
import './Register.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const[usname,setUser]=useState("");
    const[pass,setPass]=useState("");
    const [email,setMail] = useState("");
    const [destination,setDestination] = useState(" ")
   // const register=()=>{
     //   console.log(user);
      //  console.log(pass);
    //}
    const navigate = useNavigate();
    const createUser =async()=>{
      try{
        await Axios.post("http://localhost:3001/api/auth/register",{username:usname,email:email,password:pass,}).then((response)=>{
          alert("REGISTERED SUCESSFULLY")
          navigate("/jobs",{ state:{destination}});
        })
      }
      catch(err){
        alert("REGISTRATION FAILED")
      }
    }
  return (
    <div className='login'>
     <div className='lContainer'>
    <p>REGISTER</p><br/>
    <input type="text" onChange={(e)=>setUser(e.target.value)}placeholder='username.....'/><br/><br/>
    <input type="text" onChange={(e)=>setMail(e.target.value)} placeholder='email....'/><br/><br/>
    <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='password.......'/><br/><br/>
    <button  className="lButton" onClick={createUser}>SIGNUP</button>
    </div>
    </div>
  )
}

export default Register
