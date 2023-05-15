import React from 'react'
import {FaLinkedin, FaGmail, FaTwitter, FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home '>
      <div className='about'> 
      <div className=" container h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <h2> Hi, This is Jayita Deb</h2>
        <div className="prompt">
          <p>A learning Enthusiast web developer</p>
          <ul className='social-media-icon list-unstyled d-flex justify-content-center align-items-center fs-5  mb-0 '>
            <li className=' mx-3'><a  href="https://github.com/jayitadeb2810" target='blank'><FaGithub/></a></li>
            <li className='mx-3'><a  href="mailto:jayitadeb2810@gmail.com" target='blank' ><i class="bi bi-envelope"></i></a></li>
            <li className='mx-3'><a  href=""><FaTwitter/></a></li>
            <li className='mx-3'><a  href=""><FaLinkedin/></a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="skills ">
        <div className=' container w-100 d-flex flex-column justify-content-center align-items-center'>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <ul>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>NPM</li>
              <li>BootStrap</li>
            </ul>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>              
              Mysql, Learning....
            </span>
          </li>
        </ol>
        </div>
      </div>
    </div>
  )
}

export default Home