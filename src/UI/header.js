import React from 'react'
import Logout from '../components/logout/Logout'
import './header.css'


<div className="logout">
          <Logout />
        </div>

const Header = () => {
    let role = localStorage.getItem("role")
    let username = localStorage.getItem("username")
  return (
    <div className='header'>
        
        Welcome {role}, {username}
        <Logout/>
        </div>
  )
}

export default Header