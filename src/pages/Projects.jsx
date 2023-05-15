import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { ProjectList } from "../helpers/ProjectList";

const Projects=()=>{
  return (
    <div className="projects ">
      <h1 className="projectTitle"> My Personal Projects</h1>
      <div className=" container-custom d-flex align-items-center justify-content-center pb-5 ">
        <div className="row justify-content-center">
        {ProjectList.map((project, index) => {
          return (
            <div className=" col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center ">
            <ProjectItem id={index} name={project.name} image={project.image} />
      </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

const ProjectItem=({ image, name, id })=>{
    // const navigate = useNavigate();
    return (
      <Link className="projectItem d-flex flex-column align-items-center justify-content-center" to={`/project/${id}`}
        // onClick={() => {
        //   navigate(`/project/${id}`);
        // }}
      >
        <div className="projectItem_content">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
        </div>
      </Link>
    );
  }

export default Projects;
