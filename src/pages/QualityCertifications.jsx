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
    keywords: ["USDA organic certified sri lanka", "fairtrade certified spice exporter", "FSSC 22000 food safety", "Demeter biodynamic certified", "Naturland organic", "BRC food grade", "halal certified organic food", "ISO 22000 sri lanka", "organic food certifications", "bio suisse certified", "control union certified"],
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
