import React from 'react'
import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard'
import allProjects from '../../Json/allProjects.json'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects container'>
        <div className="projects-header">
          <h2>Projects</h2>
        </div>
        <div className="all-projects">
          { allProjects.map ((item)=>{
            return (
              <ProjectsCard key={item.id} title={item.title}  description={item.description} link={item.link} srccode={item.srccode} />
            )
          })}
        </div>
    </div>
  )
}

export default Projects


// Use title in the image part of the project card for now