import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProcessingFacilitiesDetails from '../components/ProcessingFacilities/ProcessingFacilitiesDetails'
import ProcessingFacilityHero from '../components/ProcessingFacilities/ProcessingFacilityHero'
import useSEO from '../hooks/useSEO'

function ProcessingFacility() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Processing Facilities",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
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
