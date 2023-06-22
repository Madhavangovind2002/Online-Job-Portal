import React from 'react'
import './featuredjobs.css'
const Featuredjobs = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img src={require('../../images/react developer.jpg')} alt='' className='fpImg'/>
        <span className='fpName'>React JS Developer</span>
        <span className='fpCity'>Bengaluru</span>
        <span className='fpCompany'>NTT</span>
        <div className='fpRating'>
            <button>18LPA</button> 
        </div>
       </div> 
        <div className='fpItem'>
           <img src={require('../../images/surgeon.jpg')} alt='' className='fpImg'/>
           <span className='fpName'>Chief Surgeon</span>
           <span className='fpCity'>Chennai</span>
           <span className='fpCompany'>Rk Hospitals</span>
           <div className='fpRating'>
              <button>20LPA</button> 
           </div>
        </div>
        <div className='fpItem'>
           <img src={require('../../images/archianime.jpg')} alt='' className='fpImg'/>
           <span className='fpName'>Architect</span>
           <span className='fpCity'>Hyderabad</span>
           <span className='fpCompany'>KNR Constructions</span>
           <div className='fpRating'>
              <button>6LPA</button> 
          </div>
        </div>
    </div>
  )
}

export default Featuredjobs