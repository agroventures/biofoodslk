import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProcessingFacilitiesDetails from '../components/ProcessingFacilities/ProcessingFacilitiesDetails'
import ProcessingFacilityHero from '../components/ProcessingFacilities/ProcessingFacilityHero'
import useSEO from '../hooks/useSEO'

function ProcessingFacility() {
  const url = window.location.href;

  useSEO({
    title: "Processing Facilities | Bio Foods Agroventures Sri Lanka",
    description: "Explore Bio Foods Agroventures' state-of-the-art processing facilities for organic spices, desiccated coconut, coconut chips and frozen herbs in Sri Lanka.",
    keywords: ["spice processing facility sri lanka", "coconut processing plant sri lanka", "desiccated coconut manufacturing", "organic food processing sri lanka", "frozen herb processing", "GMP certified food factory", "bio foods processing plant", "spice milling sri lanka"],
    url,
    image_alt: "Processing Facilities – Bio Foods Agroventures",
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <ProcessingFacilityHero />
      <ProcessingFacilitiesDetails />
      <Footer />
    </div>
  )
}

export default ProcessingFacility
