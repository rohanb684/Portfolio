import React from 'react'
import {TbWorldWww} from 'react-icons/tb'
import './ProjectsCard.css'

const ProjectsCard = ({id, title, description, link, srccode}) => {
  return (
    <div className='project-card'>
      <div className="project-image--left">
        <div className="project-image--div">
            <p>{title}</p>
        </div>
      </div>
      <div className="project-card--right">
      <div className="project-card--title">
        <h2>{title}</h2>
      </div>
      <div className="project-card--description">
        <p>{description}</p>
      </div>
      <div className="project-card--weblink">
        <TbWorldWww className='web-icon' />
        <a href={link} target='_blank'>{link}</a>
      </div>
      <div className="project-card--srccode">
        <p>Source Code : </p>
        <a href={srccode} target='_blank'>{srccode}</a>
      </div>
      </div>
    </div>
  )
}

export default ProjectsCard
