import React from 'react'
import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <div className='featureTitles'>
            <img src={require('../../images/download.jpg')} alt='Logo' className='featureImg'/><br/>
            <h1>Medical</h1>
            <h2>Doc</h2>
        </div>
        <div className='featureTitles'>
            <img src={require('../../images/tech.jpg')} alt='' className='featureImg'/><br/>
            <h1>Tech</h1>
            <h2>Developer</h2>
        </div>
        <div className='featureTitles'>
            <img src= {require('../../images/finance.jpg')}alt='' className='featureImg'/>
            <h1>Finance</h1>
            <h2>Accountant</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured