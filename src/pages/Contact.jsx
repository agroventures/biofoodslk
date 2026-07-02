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
    title: "Contact Bio Foods Agroventures | Organic Spice & Coconut Exporter",
    description: "Get in touch with Bio Foods Agroventures for product inquiries, export partnerships or general information. We're based in Sri Lanka and export globally.",
    keywords: ["contact bio foods", "organic spice exporter contact", "Sri Lanka organic food supplier", "bio foods inquiry"],
    url,
    image_alt: "Contact Bio Foods Agroventures",
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
