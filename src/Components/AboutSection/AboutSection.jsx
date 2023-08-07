import React, {useEffect, useState} from "react";
import AboutExperience from '../AboutExperience/AboutExperience';
import AboutSkills from '../AboutSkills/AboutSkills';
import AboutEducation from '../AboutEducation/AboutEducation';
import './AboutSection.css'

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam, non quos magni ullam fuga ducimus animi nam minus explicabo quae possimus, cum officia placeat numquam vitae, perferendis laborum. Voluptas, tempora tenetur ab perspiciatis ut, explicabo nesciunt excepturi sed dolores necessitatibus numquam modi laborum accusantium assumenda? Adipisci molestias totam libero.</p>
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
          {activeLink === 'Skills' && <AboutSkills className="sub-content" />}
          {activeLink === 'Experience' && <AboutExperience className="sub-content" />}
          {activeLink === 'Education' && <AboutEducation className="sub-content" />}
          </div>
      </div>
      </div>
    </div>
  );
};

export default AboutSection;
