import React from 'react'
import './About.css'
import Skilljson from '../../Components/skilljson/Skilljson'

const About = () => {
  return (
    <div className='about container'>
      <div className="header">
      <h2 >About Me</h2>
      <p>To obtain a challenging position as a Frontend Developer, leveraging my self-taught programming skills and passion for web development. I aim to contribute my knowledge and creativity to create engaging and user-friendly interfaces, while continuously expanding my skill set and staying up-to-date with the latest technologies in the field. With a strong commitment to learning and a drive for excellence, I am eager to collaborate with a dynamic team and make a meaningful impact in the world of web development.</p>
      </div>
      <div className="header-skills">
          <h3 className='sub-header'>Skills</h3>
         <Skilljson/>
      </div>
      <div className="header-experience">
        <h3 className='sub-header'>Experience</h3>
        <h4 className='exp-designation'>Fraud Analyst - Zomato India Pvt. Ltd.</h4>
        <p className='exp-duration'>March'2018 - June'2023</p>
        <p className='exp-brief'>I have worked as fraud analyst and was promoted as Senior fraud analyst in July'22. Some of my key roles and responsibilities there were:</p>
        <div className="roles-list">
          <ul>
          <li>Performing analysis using statistical tools to identify and interpret patterns and trends to develop fraud hypothesis and proposing solutions.</li>
          <li>Performing root cause analysis to verify hypothesis and projection/simulation of expected impact from proposed solutions.</li>
          <li>Monitoring and improving existing fraud detection frameworks.</li>
          <li>Communicating new fraud patterns to Sr. Management and legal in order to make systematic or procedural changes.</li>
          </ul>
        </div>  
      </div>
      <div className="switch">
        <h2>Why I want to switch ?</h2>
        <div className='paras'>
        <p className='para-1'>Over the years, my experience as a Fraud Analyst has equipped me with a solid foundation in problem-solving, critical thinking, and attention to detail. These skills have not only been invaluable in identifying patterns of fraudulent behavior but have also nurtured a keen analytical mindset. I believe these attributes align remarkably well with the demands of frontend development, a field that equally emphasizes precision and creative problem-solving.</p>
        <p className='para-2'>What draws me to frontend development is the opportunity to bring innovative designs to life and create seamless user experiences. The prospect of leveraging my analytical abilities to develop visually appealing and user-friendly interfaces excites me. Furthermore, I have always been passionate about technology and coding, and I am eager to contribute to the dynamic and evolving world of web development.</p>
        <p className='para-3'>To ensure a smooth transition, I have proactively embarked on a journey to upskill myself in various frontend technologies. I have completed courses in HTML, CSS, JavaScript, and even delved into frameworks like React. These learning experiences have not only solidified my decision but have also given me hands-on experience in designing and developing web applications.</p>
        <p className='para-4'>I am fully aware that this transition involves a learning curve, but I am confident in my ability to adapt and excel in this new role. My dedication to excellence and the value I place on continuous improvement will undoubtedly be my driving forces.</p>
        <p className='para-5'>I want to express my sincere gratitude for the support and guidance I have received throughout my time as a Fraud Analyst. I am confident that the skills and lessons I've gained will serve as a strong foundation in my new journey as a Frontend Developer. I am excited about the challenges and opportunities that lie ahead and look forward to contributing my best efforts to my new role.</p>
        </div>
      </div>
    </div>

  )
}

export default About
