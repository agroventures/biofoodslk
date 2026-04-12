import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProcessingFacilitiesDetails from '../components/ProcessingFacilities/ProcessingFacilitiesDetails'
import ProcessingFacilityHero from '../components/ProcessingFacilities/ProcessingFacilityHero'

function ProcessingFacility() {
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
