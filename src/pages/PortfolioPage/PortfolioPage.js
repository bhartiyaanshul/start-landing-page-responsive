import React from 'react'
import './PortfolioPage.css'

export const PortfolioPage = () => {
  return (
    <div className='portfolio'>
        <section className='portfolio-details'>
            <div className='portfolio-header'>WORKS</div>
            <div className='portfolio-title'>Portfolio</div>
            <div className='portfolio-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </section>
        <section className='portfolio-projects'>
            <img className='portfolio-project' src='images/portfolio1.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio2.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio3.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio4.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio5.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio6.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio7.png' alt=''/>
            <img className='portfolio-project' src='images/portfolio8.png' alt=''/>
        </section>
        <button className='learn-more'>Learn more</button>
    </div>
  )
}
