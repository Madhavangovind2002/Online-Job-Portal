import React from 'react'
import "./maillist.css"
const MailList = () => {
  return (
    <div class='mail'>
      <h1 className='mailTitle'>Save time,Save Money</h1>
      <span className='mailDesc'>Sign up and We'll the latest jobs to you</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Your Email'/>
         <button>Subscribe</button>
      </div>
    </div>
    
  )
}

export default MailList