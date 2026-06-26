import React, { useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import AboutHero from '../components/About/AboutHero'
import VisionMission from '../components/About/VisionMission'
import AboutBioFoods from '../components/About/AboutBioFoods'
import AboutFoundingVision from '../components/About/AboutFoundingVision'
import AboutGrowth from '../components/About/AboutGrowth'
import AboutAwards from '../components/About/AboutAwards'
import useSEO from '../hooks/useSEO'
import AboutAgroVentures from '../components/About/AboutAgroVentures'
import AboutManagement from '../components/About/AboutManagement'

function About() {
  const url = window.location.href;

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
      <AboutBioFoods />
      <AboutManagement />
      <AboutFoundingVision />
      <AboutGrowth />
      <VisionMission />
      <AboutAgroVentures />
      {/* <AboutAwards /> */}
      <Footer />
    </div>
  )
}

export default About
