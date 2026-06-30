import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import MediaHero from '../components/Media/MediaHero'
import MediaVideos from '../components/Media/MediaVideos'
import useSEO from '../hooks/useSEO';

function Media() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Media",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <MediaHero />
      <MediaVideos />
      <Footer />
    </div>
  )
}

export default Media
