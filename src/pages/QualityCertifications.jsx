import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import QualityCertificationsHero from '../components/QualityCertifications/QualityCertificationsHero'
import QualityCertificationsDetails from '../components/QualityCertifications/QualityCertificationsDetails'

function QualityCertifications() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <QualityCertificationsHero />
      <QualityCertificationsDetails />
      <Footer />
    </div>
  )
}

export default QualityCertifications
