import React from 'react'
import google from './partners/Google.png'
import airbnb from './partners/airbnb.png'
import microsoft from './partners/microsoft.png'
import facebook from './partners/facebook.png'
import spotify from './partners/spotify.png'
import './PartnersSection.css'

export const PartnersSection = () => {
  return (
    <div className='partners-section'>
        <div className='partners-section-details'>
            <div className='partners-text'>PARTNER</div>
            <div className='partners-title'>Lorem Ipsum Dolor</div>
            <div className='partners-subtext'>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit.</div>
        </div>
        <div className='partners-image'>
            <img src={google} alt='' />
            <img src={microsoft} alt='' />
            <img src={airbnb} alt='' />
            <img src={facebook} alt='' />
            <img src={spotify} alt='' />
        </div>
        <div className='learn-more-button'>Learn More</div>
    </div>
  )
}
