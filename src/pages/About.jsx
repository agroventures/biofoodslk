import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import AboutHero from '../components/About/AboutHero'
import VisionMissionSustainability from '../components/About/VisionMission'
import AboutDescription from '../components/About/AboutDescription'
import AboutAwards from '../components/About/AboutAwards'

function About() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutHero />
      <VisionMissionSustainability />
      <AboutDescription />
      <AboutAwards />
      <Footer />
    </div>
  )
}

export default About
