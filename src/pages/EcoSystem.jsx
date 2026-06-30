import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import useSEO from '../hooks/useSEO';
import EcoSystemHero from '../components/EcoSystem/EcoSystemHero';
import EcoSystemAgroVentures from '../components/EcoSystem/EcoSystemAgroVentures';
import EcoSystemFlow from '../components/EcoSystem/EcoSystemFlow';
import EcoSystemBalance from '../components/EcoSystem/EcoSystemBalance';

function EcoSystem() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Media",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <EcoSystemHero />
            <EcoSystemFlow />
            <EcoSystemAgroVentures />
            <EcoSystemBalance />
            <Footer />
        </div>
    )
}

export default EcoSystem
