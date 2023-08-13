import React from 'react'
import './HeroSection.css'
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="hero-left">
      <h3 className='hero-left--name'>Hi I am <span>Rohan</span></h3>
      <div className="typewritter">
        <p>I'am a </p>
        <Typewriter
            options={{
                cursor: "/",
            }}
            onInit={(typewritter) => {
             
                typewritter
            .typeString("<span className='data'>Fraud Analyst <span className='turned' >turned</span></span>")
            .pauseFor(1000)
            .deleteAll();

          // Second part with different custom style
          typewritter
            .typeString("<h2>FrontEnd Developer</h2>")
            .start();
            }}
        />
        </div>
      </div>
    {/*---------Right Section--------------*/}
    <div className="hero-right">
        <div className="img-container">
        <img src="./images/hero-img.jpg" alt="my_image" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
