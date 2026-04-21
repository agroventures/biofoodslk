import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import QualityCertificationsHero from '../components/QualityCertifications/QualityCertificationsHero'
import QualityCertificationsDetails from '../components/QualityCertifications/QualityCertificationsDetails'
import useSEO from '../hooks/useSEO'

function QualityCertifications() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Quality and Certifications",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
  });

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
