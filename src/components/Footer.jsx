import React from 'react'
import {FaGithub, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer position-absolute bottom-0 end-0 start-0 bg-dark '>
      <div className='container-custom d-flex  justify-content-between align-items-center py-3'>
      <div>
      <a href="" className='text-decoration-none text-white me-2'>
        <span>&copy; 2023 DevJayita </span>
        </a>
    </div>
      <ul className=' list-unstyled col-md-3 d-flex justify-content-end fs-5  mb-0 text-white'>
      <li className=' ms-3'><a className='text-white text-decoration-none' href=""><FaGithub/></a></li>
      <li className='ms-3'><a className='text-white text-decoration-none ' href=""><FaFacebook/></a></li>
      <li className='ms-3'><a className='text-white text-decoration-none ' href=""><FaTwitter/></a></li>
      <li className='ms-3'><a className='text-white text-decoration-none ' href=""><FaLinkedin/></a></li>
    </ul>
      </div>
    </div>
  )
}

export default Footer
