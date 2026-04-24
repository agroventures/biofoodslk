import React from 'react'
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import useSEO from '../hooks/useSEO';
import SustainabilityHero from '../components/Sustainability/SustainabilityHero';
import SustainabilityEnvironmentalResponsibility from '../components/Sustainability/SustainabilityEnvironmentalResponsibility';
import SustainabilityAgroVentures from '../components/Sustainability/SustainabilityAgroVentures';

function Sustainability() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Sustainability",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

  return (
    <div className="min-h-screen">
      <Navbar />
      <SustainabilityHero />
      <SustainabilityEnvironmentalResponsibility />
      <SustainabilityAgroVentures />
      <Footer />
    </div>
  )
}

export default Sustainability
