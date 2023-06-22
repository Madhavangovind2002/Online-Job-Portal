import React, { useState } from 'react'

const Login = () => {
    const[user,setUser]=useState("");
    const[pass,setPass]=useState("");

    const register=()=>{
        console.log(user);
        console.log(pass);
    }
  return (
    <div>
    <p>Login</p>
    <input type="text" onChange={(e)=>setUser(e.target.value)}placeholder='username.....'/>
    <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='placeholder.......'/>
    <button onClick={register}>SIGNIN</button>
    </div>
  )
}

export default Login;