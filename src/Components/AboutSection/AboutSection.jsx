import React, {useEffect, useState} from "react";
import AboutExperience from '../AboutExperience/AboutExperience';
import AboutSkills from '../AboutSkills/AboutSkills';
import AboutEducation from '../AboutEducation/AboutEducation';
import './AboutSection.css'
import { NavLink } from "react-router-dom";

const AboutSection = () => {

    const [activeLink, setActiveLink] = useState('Skills');


  useEffect(() => {
    console.log(activeLink)
  }, [activeLink]);

  return (
    <div className="about-section">
      <div className="about-left">
          <div className="img-container">
            <img src="./images/about-img.jpg" alt="about image" />
        </div>
      </div>
       {/* --------About Section Right---------     */}
      <div className="about-right">
      <div className="about-right--header">
        <p>About Me</p>
        </div>
        <div className="about-right--description">
        <p>To obtain a challenging position as a Frontend Developer, leveraging my self-taught programming skills and passion for web development. I aim to contribute my knowledge and creativity to create engaging and user-friendly interfaces, while continuously expanding my skill set and staying up-to-date with the latest technologies in the field. With a strong commitment to learning and a drive for excellence, I am eager to collaborate with a dynamic team and make a meaningful impact in the world of web development.</p>
        </div>

     {/* --------About Section Right Categories---------     */}
        <div className="about-right--cat">
          <div className="about-right--cat---sub-cat">
            <p className={`sub-cat--p ${activeLink === 'Skills' ? 'active-link':''}`}  id='skill' onClick={()=> setActiveLink("Skills")}>Skills</p>
            <p className={`sub-cat--p ${activeLink === 'Experience' ? 'active-link':''}`} id='experience' onClick={()=> setActiveLink("Experience")}>Experience</p>
            <p className={`sub-cat--p ${activeLink === 'Education' ? 'active-link':''}`} id='education' onClick={()=> setActiveLink("Education")}>Education</p>
          </div>

     {/* --------About Section Right Categories Sublist---------       */}
          <div className="about-right--cat---sublist">
          {/* <AboutSkills className = "sub-content"  /> */}
          {/* <AboutSkills className = {`sub-content ${activeLink === 'Skills' ? 'active-tab':''} `}  /> */}
          {/* <AboutExperience className = {`sub-content ${activeLink === 'Experience' ? 'active-tab':''} `} /> */}
          {activeLink === 'Skills' && <AboutSkills className="sub-content " />}
          {activeLink === 'Experience' && <AboutExperience className="sub-content " />}
          {activeLink === 'Education' && <AboutEducation className="sub-content " />}
          </div>
      </div>
      <button className="btn"><NavLink className="link" to={"/about"}>Know More</NavLink></button>
      </div>
    </div>
  );
};

export default AboutSection;
