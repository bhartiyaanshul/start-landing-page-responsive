import React, { useState } from 'react'
import logo from './Group 1.png'
import './Navbar.css'
import menu from './menu.png'
import { NavLink } from 'react-router-dom'
import { PortfolioPage } from '../../../pages/PortfolioPage/PortfolioPage'
import { ServicesPage } from '../../../pages/ServicesPage/ServicesPage'
import { ContactPage } from '../../../pages/ContactPage/ContactPage'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar-section'>
        <div className='navbar-company'>
            <img src={logo} alt='' />
            <div className='company-name'>Start</div>
        </div>
        <div className={`navbar-details ${showMenu ? 'show' : ""} `}>
            <NavLink to='/' className='menu-item'>Home</NavLink>
            <NavLink to='/portfolio' element={<PortfolioPage />} className='menu-item'>Portfolio</NavLink>
            <NavLink to='/services' element={<ServicesPage />} className='menu-item'>Services</NavLink>
            <NavLink to='/contact' element={<ContactPage />} className='menu-item'>Contact</NavLink>
        </div>
        <div className="responsive-menu" onClick={() => setShowMenu(!showMenu)}>
            <img src={menu}></img>
        </div>
    </div>
  )
}
