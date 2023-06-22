import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Axios from "axios";
const Admin = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <button className="add">Add Job</button>   
        <button classname= "delete">Delete Jobs</button>
        <button className='update'>Update Jobs</button>
   </div>
  )
}

export default Admin