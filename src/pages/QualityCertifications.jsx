import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import QualityCertificationsHero from '../components/QualityCertifications/QualityCertificationsHero'
import QualityCertificationsDetails from '../components/QualityCertifications/QualityCertificationsDetails'
import useSEO from '../hooks/useSEO'
import QualityCertificationsAgroVentures from '../components/QualityCertifications/QualityCertificationsAgroVentures'

function QualityCertifications() {
  const url = window.location.href;

  useSEO({
    title: "Quality Certifications | USDA Organic, Fairtrade, FSSC 22000 | Bio Foods",
    description: "Bio Foods holds 20+ international certifications including USDA Organic, Fairtrade, FSSC 22000, Demeter, Naturland, BRC Food, Halal and more — guaranteeing the highest quality standards.",
    keywords: ["organic certifications Sri Lanka", "USDA organic", "fairtrade certified", "FSSC 22000", "Demeter certified", "BRC food", "bio foods certifications"],
    url,
    image_alt: "Quality Certifications – Bio Foods Agroventures",
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <QualityCertificationsHero />
      <QualityCertificationsDetails />
      {/* <QualityCertificationsAgroVentures /> */}
      <Footer />
    </div>
  )
}

export default QualityCertifications
