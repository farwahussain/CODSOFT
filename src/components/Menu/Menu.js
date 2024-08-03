import React from 'react'
import './Menu.css';
import profilepic from './portfolio-img.png'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcReadingEbook, FcVideoProjector } from 'react-icons/fc'

const Menu = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
        <div className='navbar-profile-pic'>
        <img src= {profilepic} alt='profile pic' />
      </div>

      <div className='nav-items'>
        <div className='nav-item'>
            <div className='nav-links'>
                <FcHome />
                Home
            </div>
            <div className='nav-links'>
                <FcAbout />
                About
            </div>
            <div className='nav-links'>
                <FcReadingEbook />
                Education
            </div>
            <div className='nav-links'>
                <FcBiotech  />
                Tech Stack
            </div>
            <div className='nav-links'>
                <FcVideoProjector />
                Project
            </div>
            <div className='nav-links'>
                <FcBusinessContact />
                Contact
            </div>
        </div>
      </div>

      </>
      ) : (
        <>
        <div className='nav-items'>
        <div className='nav-item'>
            <div className='nav-links'>
                <FcHome />
            </div>
            <div className='nav-links'>
                <FcAbout />
            </div>
            <div className='nav-links'>
                <FcReadingEbook />
            </div>
            <div className='nav-links'>
                <FcBiotech  />
            </div>
            <div className='nav-links'>
                <FcVideoProjector />
            </div>
            <div className='nav-links'>
                <FcBusinessContact />
            </div>
        </div>
      </div> </>
      )}
    </>
  )
}

export default Menu
