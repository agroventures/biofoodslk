import React from 'react'
import useSEO from '../hooks/useSEO';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import PartnerWithUsHero from '../components/PartnerWithUs/PartnerWithUsHero';
import PartnerWithUsWhyBioFoods from '../components/PartnerWithUs/PartnerWithUsWhyBioFoods';
import PartnerWithUsOpportunities from '../components/PartnerWithUs/PartnerWithUsOpportunities';
import PartnerWithUsCTA from '../components/PartnerWithUs/PartnerWithUsCTA';

function PartnerWithUs() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Partner With Us",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className='min-h-screen'>
            <Navbar />
            <PartnerWithUsHero />
            <PartnerWithUsWhyBioFoods />
            <PartnerWithUsOpportunities />
            <PartnerWithUsCTA />
            <Footer />
        </div>
    )
}

export default PartnerWithUs
