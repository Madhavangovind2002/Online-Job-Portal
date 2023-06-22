import React, { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css'
import { useActionData, useLocation } from 'react-router-dom';
import SearchItem from '../../components/searchItem/SearchItem';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const List = (props) => {
  const [search,setSearch] = useState("")
  const location =useLocation()
  const navigate = useNavigate()
  const [destination,setDestination] = useState(location.state.destination)   
  const [usedata,setUsedata] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/hotels")
    .then((response)=>{
        console.log(response.data)
        setUsedata(response.data)
    }).catch(()=>{
        console.log("error")
    });
   },[])
   const handleclick = ()=>{
      navigate("/Apply",{ state:{destination}});
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
             <div className='lsItem'>
              <label>location</label>
              <input placeholder={destination}  type='text' onChange={(e) => setSearch(e.target.value)}/>
             </div>
             <div className='lsItem'>
              <label>Jobtype</label>
              <input type='text'/>
             </div>
             <div className='lsItem'>
               <label>Options</label>
               <div className='lsOptionItem'>
                 <span className='lsOptionText'>
                  Min Salary<small> per Annum</small>
                 </span>
                 <input type='number' min={30000} className='lsOptionInput' placeholder='4,00,000'/>
               </div>
             </div>
             <div className='lsItem'>
               <label>Options</label>
               <div className='lsOptionItem'>
                 <span className='lsOptionText'>
                  Max Salary <small>per Annum</small>
                 </span>
                 <input type='number' max={120000}className='lsOptionInput' placeholder='16,00,000'/>
               </div>
             </div>
             <button>Search</button>
          </div>
          <div className='listResult'>
          {usedata.filter((data)=>{
               return search.toLowerCase() === "" ? data:data.city.toLowerCase().includes(search);
          }).map((data)=>{
              return(
                 <div className='searchitem'>
                          <img src ={data.photos}alt=''className='siImg'/>
                          <div className='siDesc'>
                          <h1 className='siTitle'>{data.name}</h1>
                          <h3 className='siComapny'>{data.type}</h3>
                          <span className='siDistance'>{data.city}</span>
                          <span className='siSubtitle'>
                             {data.desc}
                          </span>
                     </div>
                     <div className='siDestails'>
                        <div className='siRating'>
                           <span>Excellent</span>
                           <button>8.9</button>
                         </div>
                      <div className='siDetailTexts'>
                           <span className='siPrice'>{data.cheapestPrice} LPA</span>
                          <button className='siCheckButton' onClick={handleclick}>Apply</button>
                       </div>
                     </div>
                   </div>
            )              
          })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default List;