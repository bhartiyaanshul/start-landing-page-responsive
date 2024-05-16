import React from 'react'
import './ContactPage.css'

export const ContactPage = () => {
  return (
    <div className='contact-page'>
        <section className='contact-details'>
            <div className='contact-title'>Contact Us</div>
            <div className='contact-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </section>
        <section className='form-section'>
            <form className='contact-form'>
                <label>Name</label>
                <input className='form-input'></input>
                <label>Email</label>
                <input className='form-input'></input>
                <label>Message</label>
                <textarea className='form-input'></textarea>
                <button className='submit-button'>Submit</button>
            </form>
            <img src='images/map.png' alt=''/>
        </section>
    </div>
  )
}
