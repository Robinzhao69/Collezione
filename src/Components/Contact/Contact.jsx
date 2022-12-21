import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-view'>
        <div className='contact__mx-w'>
            <h1><span>C</span>ontact</h1>
            <form className='contact-form' action="">
                <label htmlFor="name">Naam</label>
                <input type="text" placeholder='Jouw naam' name="" id="" />
            
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Jouw email' />

                <label htmlFor="message">Bericht</label>
                <input type="text"placeholder='Jouw bericht' />

                <button className='contact-btn'>Verstuur</button>
            </form>
        </div>
    </div>
  )
}
export default Contact