import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import ContactMap from '../components/Contact/ContactMap'
import useSEO from '../hooks/useSEO'

function Contact() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Contact Us",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  )
}

export default Contact
