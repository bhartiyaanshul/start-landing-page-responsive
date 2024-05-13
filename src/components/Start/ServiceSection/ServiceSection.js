import React from 'react'
import service1 from './Group-1.png'
import service2 from './Group-2.png'
import './ServiceSection.css'


export const ServiceSection = () => {
  return (
    <div className='services-section'>
        <div className='service'>
            <img src={service1} alt=''/>
            <div className='service-details'>
                <div className='service-title'>Lorem ipsum dolor sit amet consectetur </div>
                <div className='service-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br/>error ipsum, voluptate culpa nesciunt delectus iste?</div>
                <div className='learn-more-button'>Learn More</div>
            </div>
        </div>
        <div className='service'>
            <div className='service-details'>
                <div className='service-title'>Lorem ipsum dolor sit amet consectetur </div>
                <div className='service-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br/>error ipsum, voluptate culpa nesciunt delectus iste?</div>
                <div className='learn-more-button'>Learn More</div>
            </div>
            <img src={service2} alt=''/>
        </div>
    </div>
  )
}
