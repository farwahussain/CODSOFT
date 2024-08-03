import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import contactpic from '../../images/contact.jpg'

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <img src={contactpic} alt='contact' className='image' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='row'>
                        <div className='card2 d-flex card border-0 px-4 py-3'>
                            <h6> Contact with 
                                <FaLinkedin color='blue' size={24} className='ms-2'/>
                                <FaGithub size={24} className='ms-2'/>
                                <FaFacebook color='blue' size={24} className='ms-2'/>
                            </h6>
                        </div>
                        <div className='row px-3 mb-4'>
                            <div className='line' />
                            <small className='or text-center'>OR</small>
                            <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' name='name' placeholder='Enter your name' className='mb-3' />
                            <input type='email' name='email' placeholder='Enter your email address' className='mb-3' />
                            <textarea type='text' name='message' placeholder='Write your message' className='mb-3' />
                        </div>
                        <div className='row px-3'>
                            <button className='button' type='submit'> Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
