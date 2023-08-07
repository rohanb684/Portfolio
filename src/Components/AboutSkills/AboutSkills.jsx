import React from 'react'
import './AboutSkills.css'

const AboutSkills = () => {
  return (
    <div className="skill-icons">

    {/* ---------icons left side -------------           */}
              <div className="icon-left">
              <div className="icon">
                <p>React JS</p>
                <img src="./icons/react.png" alt="" />
              </div>
              <div className="icon">
                <p>HTML</p>
                <img src="./icons/html-5.png" alt="" />
              </div>
              <div className="icon">
                <p>JavaScript</p> 
                <img src="./icons/js.png" alt="" />
              </div>
              </div>
     {/* --------icons mid side--------------          */}
              <div className="icon-mid">
              <div className="icon">
                <p>Strapi</p>
                <img  className = "strapi-img"src="./icons/strapi.png" alt="" />
              </div>
              <div className="icon">
                <p>CSS</p>
                <img src="./icons/css.png" alt="" />
              </div>
              <div className="icon">
                <p>BootStrap</p>
                <img src="./icons/bootstrap.png" alt="" />
              </div>
              </div>
  {/* ---------------icons right side-------------- */}
          <div className="icon-right">
              <div className="icon">
                <p>Axios</p>
                <img className='axios' src="./icons/axios.png" alt="" />
              </div>
              <div className="icon">
                <p>SQL</p>
                <img  src="./icons/mysql.png" alt="" />
              </div>
              <div className="icon">
                <p>MS Excel</p>
                <img src="./icons/excel.png" alt="" />
              </div>
          </div>
            </div>
  )
}

export default AboutSkills
