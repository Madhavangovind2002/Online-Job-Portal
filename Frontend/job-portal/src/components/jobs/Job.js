import React from 'react'
import "./job.css";
const Job = () => {
  return (
    <div className='pList'>
        <div className='pListItem'>
            <img src={require('../../images/developer.jpg')} alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Developer</h1>
                <h2>233 Jobs</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={require('../../images/doctor.jpg')} alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Doctor</h1>
                <h2>343 Jobs</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={require('../../images/manager.jpg')} alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Manager</h1>
                <h2>433 Jobs</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={require('../../images/architect.jpg')} alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Architect</h1>
                <h2>433 Jobs</h2>
            </div>
        </div>
    </div>
  )
}

export default Job