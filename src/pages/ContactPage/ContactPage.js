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
            <iframe  className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.9312860500063!2d72.59181765286958!3d23.103963681145487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b16dbefd51%3A0x3ae59a1059dd8ab1!2sCodeDecoders!5e0!3m2!1sen!2sin!4v1715934714767!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
  )
}
