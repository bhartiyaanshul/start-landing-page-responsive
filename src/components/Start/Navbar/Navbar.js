import React from 'react'
import logo from './Group 1.png'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar-section'>
        <div className='navbar-company'>
            <img src={logo} alt='' />
            <div className='company-name'>Start</div>
        </div>
        <div className='navbar-details'>
            <div>Home</div>
            <div>Portfolio</div>
            <div>Services</div>
            <div>Contact</div>
        </div>
    </div>
  )
}
