import React ,{useState}from 'react'
import Axios from 'axios';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
const Addjob = () => {
    const[usname,setName]=useState("");
    const[type,setType]=useState("");
    const[city,setCity] = useState("");
    const[desc,setDesc] = useState("");
    const[photos,setPhotos]= useState("");
    const[sal,setSal] = useState("");
    const applyJob =async()=>{
      try{
        await Axios.post("http://localhost:3001/api/hotels",{name:usname,type:type,city:city,desc:desc,photos:photos,cheapestPrice:sal,}).then((response)=>{
          alert("ADDED SUCESSFULL")
        })
      }
      catch(err){
        alert("Added Failed")
      }
    }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <h1 className='head'>ADD  JOB </h1>
    <div className='apply'>
        <input type="text" className='name'  onChange={(e)=>setName(e.target.value)} placeholder='Job name.....'/><br/><br/>
        <input type="text" className='email' onChange={(e)=>setType(e.target.value)} placeholder='Job Type....'/><br/><br/>
        <input type="text" className='degree' onChange={(e)=>setCity(e.target.value)} placeholder='City.......'/><br/><br/>
        <input type="text" className='experience' onChange={(e)=>setDesc(e.target.value)} placeholder='Desc.......'/><br/><br/>
        <input type="text" className='features' onChange={(e)=>setPhotos(e.target.value)} placeholder='Photos.......'/><br/><br/>
        <input type="text" className='features' onChange={(e)=>setSal(e.target.value)} placeholder='Salary.......'/><br/><br/>
        <button className="button" onClick={applyJob}>Apply</button><br/><br/>
    </div>
  </div>
  )
}

export default Addjob