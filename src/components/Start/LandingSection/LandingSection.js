import React from 'react'
import image from  './Group.png'
import './LandingSection.css'

export const LandingSection = () => {
  return (
    <div className='landing-section'>
        <img src={image} alt=''/>
        <div className='landing-section-details'>
            <div className='welocome-text'>WELCOME</div>
            <div className='landing-section-title'>Lorem ipsum dolor sit amet consectetur </div>
            <div className='landing-section-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing <br/> elit. Suscipit nemo hic quos, ab, dolor aperiam nobis <br/>cum est eos error ipsum, voluptate culpa nesciunt <br/>delectus iste?</div>
            <div className='explore-button'>Explore</div>
        </div>
    </div>
  )
}
