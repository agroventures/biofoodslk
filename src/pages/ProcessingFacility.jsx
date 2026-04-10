import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProcessingFacilitiesDetails from '../components/ProcessingFacilities/ProcessingFacilitiesDetails'

function ProcessingFacility() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <ProcessingFacilitiesDetails />
      <Footer />
    </div>
  )
}

export default ProcessingFacility
