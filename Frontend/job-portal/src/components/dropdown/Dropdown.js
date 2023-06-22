import React from 'react'
import "./dropdown.css"
import { useState } from 'react' 
const Dropdown = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className='App'>
      <div className='menu-container'>
          <div className='dropdown-menu'>
             <h3></h3>
             <ul>
                <DropdownItem button={"My profile"}/>
                <DropdownItem button={"Applied Jobs"}/>
                <DropdownItem button={"Logout"}/>
             </ul>
            </div> 
      </div>
    </div>
  )
}
function DropdownItem(){
    return(
      <li className='dropdownItem'>
        <a>{props.button}</a>
      </li>
    )
}

export default Dropdown