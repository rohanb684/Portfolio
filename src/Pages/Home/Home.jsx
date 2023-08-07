import React from 'react'
import './Home.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import TopProjects from '../../Components/TopProjects/TopProjects'

const Home = () => {
  return (
    <div className='home container'>
        <HeroSection/>
        <AboutSection/>
        <TopProjects/>
    </div>
  )
}

export default Home
