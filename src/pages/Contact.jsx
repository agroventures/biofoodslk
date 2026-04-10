import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import ContactMap from '../components/Contact/ContactMap'

function Contact() {
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
