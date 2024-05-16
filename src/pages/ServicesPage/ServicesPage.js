import React from 'react'
import './ServicesPage.css'
import { PlanCard } from '../../components/Services/PlanCard/PlanCard'

export const ServicesPage = () => {
  return (
    <div className='services-page'>
        <section className='services-details'>
            <div className='services-header'>PLANS</div>
            <div className='services-title'>Our Services</div>
            <div className='services-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </section>
        <PlanCard />
    </div>
  )
}
