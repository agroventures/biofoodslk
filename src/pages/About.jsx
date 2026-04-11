import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import AboutHero from '../components/About/AboutHero'

function About() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutHero />
      <Footer />
    </div>
  )
}

export default About
