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
        title: "Sustainability & Environmental Responsibility | Bio Foods Agroventures",
        description: "Bio Foods Agroventures is committed to sustainable agriculture, environmental responsibility and community development across Sri Lanka's organic farming sector.",
        keywords: ["sustainability bio foods", "sustainable agriculture Sri Lanka", "organic farming environment", "fair trade sustainability", "CSR Sri Lanka"],
        url,
        image_alt: "Sustainability – Bio Foods Agroventures",
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
