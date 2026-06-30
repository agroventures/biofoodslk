import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProducersHero from '../components/Producers/ProducersHero'
import ProducersIntro from '../components/Producers/ProducersIntro'
import useSEO from '../hooks/useSEO'

function Producers() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Producers",
        // keywords: ["organic food Sri Lanka, fair trade organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className='min-h-screen'>
            <Navbar />
            <ProducersHero />
            <ProducersIntro />
            <Footer />
        </div>
    )
}

export default Producers
