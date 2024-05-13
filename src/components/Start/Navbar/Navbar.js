import React, { useState } from 'react'
import logo from './Group 1.png'
import './Navbar.css'
import menu from './menu.png'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar-section'>
        <div className='navbar-company'>
            <img src={logo} alt='' />
            <div className='company-name'>Start</div>
        </div>
        <div className={`navbar-details ${showMenu ? 'show' : ""} `}>
            <div>Home</div>
            <div>Portfolio</div>
            <div>Services</div>
            <div>Contact</div>
        </div>
        <div className="responsive-menu" onClick={() => setShowMenu(!showMenu)}>
            <img src={menu}></img>
        </div>
    </div>
  )
}
