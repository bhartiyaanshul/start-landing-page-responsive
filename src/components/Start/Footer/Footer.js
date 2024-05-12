import React from 'react'
import icons from './icons.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-section'>
        <img src={icons} alt=''/>
        <div className='footer-details'>© Start, 2022. All rights reserved.</div>
    </div>
  )
}
