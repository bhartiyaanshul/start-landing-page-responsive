import React from 'react'
import one from './team/one.png'
import two from './team/two.png'
import three from './team/three.png'
import four from './team/four.png'

import './TeamSection.css'

export const TeamSection = () => {
  return (
    <div className='team-section'>
        <div className='team-section-details'>
            <div className='team-text'>TEAM</div>
            <div className='team-title'>Our Talents</div>
            <div className='team-subtext'>Lorem ipsum, dolor sit amet consectetur <br/> Suscipit nemo hic quos, ab</div>
        </div>
        <div className='team-members'>
            <div className='team-member'>
                <img src={one} alt=''/>
                <div className='member-info'>
                    <div className='member-name'>Peg Legge</div>
                    <div className='member-designation'>CEO</div>
                </div>
            </div>
            <div className='team-member'>
                <img src={two} alt=''/>
                <div className='member-info'>
                    <div className='member-name'>Richard Guerra</div>
                    <div className='member-designation'>CTO</div>
                </div>
            </div>
            <div className='team-member'>
                <img src={three} alt=''/>
                <div className='member-info'>
                    <div className='member-name'>Alexandra Stolz</div>
                    <div className='member-designation'>DESIGNER</div>
                </div>
            </div>
            <div className='team-member'>
                <img src={four} alt=''/>
                <div className='member-info'>
                    <div className='member-name'>Janet Bray</div>
                    <div className='member-designation'>DEVELOPER</div>
                </div>
            </div>
        </div>
        <div className='view-team-button'>View Team</div>
    </div>
  )
}
