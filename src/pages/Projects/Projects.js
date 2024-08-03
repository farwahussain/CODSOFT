import React from 'react'
import './Projects.css'
import projImage from '../../images/project1.jpg'
import proj2 from '../../images/project2.jpg'
function Projects() {
  return (
    <>
      <div className='container project'>
      <h2 className ='col-12 mt-3 mb-1 text-center'> 
        Top Projects
         </h2>
        <hr />
        <p className='pb-3 text-center'>
         My top projects with live links and source code.
        </p>
        <div className='row' id='ads'>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Frontend</span>
                        <img src={projImage} alt='project' />
                    </div>
                    <div className='card-inmage-ovearly m-auto mt-3'>
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS3</span>
                        <span className='card-detail-badge'>JAVASCRIPT</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5>
                                TastyEatz Website
                            </h5>
                        </div>
                        <a href='https://github.com/farwahussain/TastyEatz' className='ads-btn' > Source code </a>
                        <a href='https://farwahussain.github.io/TastyEatz/' className='ads-btn' > Live Link </a>
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Frontend</span>
                        <img src={proj2} alt='project' />
                    </div>
                    <div className='card-inmage-ovearly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>Mongodb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5>
                                Portfolio
                            </h5>
                        </div>
                        <a href='https://github.com/farwahussain/TastyEatz' className='ads-btn' > Source code </a>
                        <a href='https://farwahussain.github.io/TastyEatz/' className='ads-btn' > Live Link </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
