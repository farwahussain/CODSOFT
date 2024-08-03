import React from 'react'
import './Home.css';
import Resume from '../../docs/resume.txt'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'> 
          <h3>
            Hi I am, Farwa Hussain, a 
          </h3>
          <h1>
          <Typewriter
            options={{
              strings: ['Software engineer!', 'Mern Stack Developer!'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          <div className='home-button'>
            <button className='btn btn-hire'> Hire Me</button>
            <a className='btn btn-cv' href={Resume} download = 'Your_name.pdf'> My Resume </a>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Home
