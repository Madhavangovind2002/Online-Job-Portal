import React from 'react';
import './searchitem.css';
import { useNavigate, } from 'react-router-dom';
import { useState,Component,useEffect } from 'react';
import Axios from "axios"
const SearchItem = ({userData}) => {
    const navigate = useNavigate()
    const [destination,setDestination] =useState("")
    const [usedata,setUsedata] = useState([])
    const handleclick = ()=>{
        navigate("/Apply",{ state:{destination}});
    }
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/hotels")
        .then((response)=>{
            console.log(response.data)
            setUsedata(response.data)
        }).catch(()=>{
            console.log("error")
        });
    },[])
  return (
    <div className='searchitem'>
        <img src =''
        alt=''
        className='siImg'
        />
        <div className='siDesc'>
            <h1 className='siTitle'>Bakend Developer</h1>
            <h3 className='siComapny'>Rv Groups</h3>
            <span className='siDistance'>Work from home</span>
            <span className='siSubtitle'>
                Good Knowledge in node and mongo db
            </span>
        </div>
        <div className='siDestails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>20 LPA</span>
                <button className='siCheckButton' onClick={handleclick}>Apply</button>
            </div>
        </div>
    </div>
  );
};

export default SearchItem;