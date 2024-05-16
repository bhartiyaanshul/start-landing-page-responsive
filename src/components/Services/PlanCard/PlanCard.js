import React, { useState } from 'react'
import './PlanCard.css'
import { tick } from './tick.js'


export const PlanCard = () => {
    const [plans, setPlans] = useState([
        {
            plan: 'Basic',
            price: '100',
            detial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            features: [
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit '
            ]
        },
        {
            plan: 'Plus',
            price: '250',
            detial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            features: [
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
            ]
        },
        {
            plan: 'Pro',
            price: '400',
            detial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            features: [
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
                'Lorem ipsum, dolor sit ',
            ]
        }
    ])

    return (
        <div className='plans-data'>
            {
                plans.map((value, index) => {
                    return (
                        <div key={index} className='plans-card' >
                            <div className='plans-details'>
                                <div className='plans-plan'>{value.plan}</div>
                                <div className='plans-price'>${value.price}<div className='price-month'>/months</div></div>
                                <div className='plans-detail'>{value.detial}</div>
                            </div>
                            <div className='plans-features'>
                            {
                                value.features.map((e) => {
                                   return <div className='plan-feature'> <img src='images/tick.png' alt=''/> {e}</div>
                                })
                            }
                            </div>
                            <button className='learn-more'>Learn more</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
