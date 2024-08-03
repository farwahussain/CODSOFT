import React from 'react'
import './About.css'
import image from '../../components/portfolio-img.png'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img  src={image} alt='profile_pic ' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1> About Me </h1>
                <p> 
                    I am currently a final year student pursuing a Bachelor's degree in Computer Science from UBIT- University of Karachi.
                Throughout my academic journey, I have developed a foundation in programming languages such as Python, C++ and Web Development skills such as HTML, CSS and JavaScript.
                One of my recent achievements includes completing a web development course at Bano Qabil 2.0 where I learned to design and develop web pages using modern technologies and best practices.
                I have also completed relevant coursework in frontend development, where I gained hands-on experience in building responsive and user-friendly web applications.
                Now I have been moving towards MERN stack technologies starting from react.js and express.js .

                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
