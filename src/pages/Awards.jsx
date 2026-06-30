import React from 'react'
import useSEO from '../hooks/useSEO';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import AwardsHero from '../components/Awards/AwardsHero';
import AwardsGlobalRecognition from '../components/Awards/AwardsGlobalRecognition';
import AwardsLegacy from '../components/Awards/AwardsLegacy';

function Awards() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Awards",
        // keywords: ["organic food Sri Lanka, fair trade organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className='min-h-screen'>
            <Navbar />
            <AwardsHero />
            <AwardsGlobalRecognition />
            <AwardsLegacy />
            <Footer />
        </div>
    )
}

export default Awards
