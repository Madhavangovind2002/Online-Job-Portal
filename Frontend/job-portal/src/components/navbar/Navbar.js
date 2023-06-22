import React from 'react';
import  { useState } from 'react'
import {useNavigate} from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  const [destination,setDestination] =useState("")
  const navigate=useNavigate();
  return (
    <div className='navbar'>
        <div className='navContainer'>
           <span className='logo'>INSEARCH</span>
           <div className='navItems'>
               
           </div>
        </div>
    </div>
  )
}

export default Navbar