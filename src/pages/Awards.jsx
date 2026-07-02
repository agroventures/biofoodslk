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
        title: "Awards & Global Recognition | Bio Foods Agroventures Sri Lanka",
        description: "Bio Foods Agroventures has received prestigious international awards including the German Sustainability Award and PEA recognition for excellence in organic and fair-trade agriculture.",
        keywords: ["bio foods awards", "German Sustainability Award", "organic food award Sri Lanka", "fair trade recognition"],
        url,
        image_alt: "Awards & Global Recognition – Bio Foods Agroventures",
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
