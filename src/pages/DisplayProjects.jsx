import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import {FaGithub} from 'react-icons/fa';

const DisplayProjects = () => {
  const {id} = useParams();
  // const {name, image, skills } = ProjectList[id];
  const projectwork = ProjectList[id];

  return (
    <div className=' project_display_continer d-flex  flex-column justify-content-center align-items-center'>
      <h1>{projectwork.name}</h1>
      <img src={projectwork.image} alt="projectname" className="display_image img-fluid "
      style={{width:'50%', height:'50vh', marginBottom:'30px'}} />
      <p style={{fontSize:'1.5rem'}}><b style={{fontSize:'1.7rem'}}>Done with:  </b>{projectwork.skills}</p>
      <p style={{fontSize:'1.5rem', marginBottom:'30px'}}>View it on <a href={projectwork.github} class=" text-decoration-none" style={{fontSize:'2rem'}}><FaGithub/></a></p>
    </div>
  )
}

export default DisplayProjects