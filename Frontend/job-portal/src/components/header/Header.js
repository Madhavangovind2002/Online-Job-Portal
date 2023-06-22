import React, { useState } from 'react'
import "./header.css"
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faEthernet } from '@fortawesome/free-solid-svg-icons';
const Header = ({type}) => {
   const [destination,setDestination] =useState("")
   const navigate =useNavigate()

   const handleSearch  =() =>{
      navigate("/Login",{ state:{destination}});
   }
   const handleSearch1  =() =>{
    navigate("/Register",{ state:{destination}});
 }
 const handleSearch2  =() =>{
  navigate("/Login",{ state:{destination}});
}
  return (
    <div className='header'>
      <div className={type==="list"?"headerContainer listMode":"headerContainer"}>  
       <div className='headerList'>
        <div className='headerListItem active'>
           <FontAwesomeIcon icon={faBriefcase}/>
           <span>Management</span>
        </div>
        <div className='headerListItem'>
           <FontAwesomeIcon icon={faDatabase}/>
           <span>Backend</span>
        </div>
        <div className='headerListItem'>
           <FontAwesomeIcon icon={faWindowRestore}/>
           <span>Frontend</span>
        </div>
        <div className='headerListItem'>
           <FontAwesomeIcon icon={faEthernet} />
           <span>Networks</span>
        </div>
      </div>
      {type !=="list" &&
      <> <h1 className='headerTitle'>Transform Your Career with Insearch</h1>
      <p className='headerDesc'>
        Search your favourite jobs and favourite company with the Insearch
      </p>
      <button className='navButton' onClick={handleSearch1}>Register</button>
      <button className='navButton' onClick={handleSearch2}>Login</button>
      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faBriefcase} className='headerIcon'/>
          <input type="text " 
          placeholder='Search your job' 
          className='headerSearchInput'
          onChange={e=>setDestination(e.target.value)}
          />
          <button className='search' onClick={handleSearch}>Search</button>
        </div>
      </div></> }
    </div>
    </div>
  );
}

export default Header