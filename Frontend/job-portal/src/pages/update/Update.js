import React, { useEffect } from 'react';
import Axios from "axios";
import { useParams } from 'react-router-dom';
const Update = () => {
    const[usname,setName]=useState("");
    const[type,setType]=useState("");
    const[city,setCity] = useState("");
    const[desc,setDesc] = useState("");
    const[photos,setPhotos]= useState("");
    const[sal,setSal] = useState("");
    const params = useParams();

      useEffect(()=>{
        getProductDetails();
      },[])
      const getProductDetails = async() =>{
        let result = await Axios.get("http://localhost:3001/api/hotels/${params.id}");
        result = result.json();
      }
  return (
    <div>
    Update Job
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

export default Update