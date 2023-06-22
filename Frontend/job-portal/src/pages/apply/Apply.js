import React ,{ useState } from 'react';
import './apply.css'
import Axios from 'axios';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
const Apply = () => {
  
  const[usname,setUser]=useState("");
  const[mail,setMail]=useState("");
  const[degree,setDegree] = useState("");
  const[expe,setExp] = useState("");
  const[num,setNumber]= useState("");
  const[gitacc,setGitacc] = useState("");
  const[link,setLink] = useState("");
  
  const applyJob =async()=>{
    try{
      await Axios.post("http://localhost:3001/api/rooms",{name:usname,mail:mail,eqfication:degree,experience:expe,number:num,gitaccount:gitacc,linkedin:link,}).then((response)=>{
        alert("APPLIED SUCESSFULLY ")
      })
    }
    catch(err){
      alert("Application Failed")
    }
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <h1 className='head'>Apply For Job </h1>
    <div className='apply'>
        <input type="text" className='name'  onChange={(e)=>setUser(e.target.value)} placeholder='name.....'/><br/><br/>
        <input type="text" className='email' onChange={(e)=>setMail(e.target.value)} placeholder='email....'/><br/><br/>
        <input type="text" className='degree' onChange={(e)=>setDegree(e.target.value)} placeholder='degree.......'/><br/><br/>
        <input type="text" className='experience' onChange={(e)=>setExp(e.target.value)} placeholder='experience.......'/><br/><br/>
        <input type="text" className='features' onChange={(e)=>setNumber(e.target.value)} placeholder='number.......'/><br/><br/>
        <input type="text" className='features' onChange={(e)=>setGitacc(e.target.value)} placeholder='gitaccount.......'/><br/><br/>
        <input type="text" className='features' onChange={(e)=>setLink(e.target.value)} placeholder='linkedin.......'/><br/><br/>
        <button className="button" onClick={applyJob}>Apply</button><br/><br/>
    </div>
  </div>
  )
}
export default Apply