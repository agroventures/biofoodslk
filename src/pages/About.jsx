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
    title: "About Bio Foods Agroventures | Organic Spice & Coconut Exporter Sri Lanka",
    description: "Learn about Bio Foods Agroventures — Sri Lanka's pioneering organic and fair-trade certified spice and coconut exporter. Our story, vision, mission and leadership team.",
    keywords: ["about bio foods", "bio foods agroventures", "organic exporter Sri Lanka", "fair trade certified", "Sri Lanka spice company"],
    url,
    image_alt: "About Bio Foods Agroventures",
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutHero />
      <AboutBioFoods />
      <AboutManagement />
      <AboutFoundingVision />
      {/* <AboutGrowth /> */}
      <VisionMission />
      <AboutAgroVentures />
      {/* <AboutAwards /> */}
      <Footer />
    </div>
  )
}

export default About
