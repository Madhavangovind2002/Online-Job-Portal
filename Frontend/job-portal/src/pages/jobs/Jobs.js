import React from 'react';
import './jobs.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Jobs = () => {
  
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='hotelContainer'>
        <div className='hotelWrapper'>
          <div className='hotelTitle'>Grand Hotel</div>
          <div className='hotelAddress'>
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>Elton St 125 New York</span>  
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighLight'>
            Book a stay over at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
         
          </div>
          <div className='hotelDetails'>
             <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>Saty in the heart of Krakow</h1>
                <p className='hotelDesc'>
                  The best job that you have seen in the market 
                </p>
             </div>
             <div className='hotelDetailsPrice'>
              
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs