import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import AboutHero from '../components/About/AboutHero'
import VisionMissionSustainability from '../components/About/VisionMission'
import AboutDescription from '../components/About/AboutDescription'
import AboutAwards from '../components/About/AboutAwards'
import useSEO from '../hooks/useSEO'
import AboutAgroVentures from '../components/About/AboutAgroVentures'

function About() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "About Us",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutHero />
      <AboutDescription />
      <VisionMissionSustainability />
      <AboutAgroVentures />
      <AboutAwards />
      <Footer />
    </div>
  )
}

export default About
