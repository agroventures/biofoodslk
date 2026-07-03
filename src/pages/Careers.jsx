import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import CareersHero from '../components/Careers/CareersHero';
import CareersOpenings from '../components/Careers/CareersOpenings';
import useSEO from '../hooks/useSEO';

function Careers() {
    const url = window.location.href;

    useSEO({
        title: "Careers at Bio Foods Agroventures | Join Our Team in Sri Lanka",
        description: "Explore career opportunities at Bio Foods Agroventures. Join a leading organic and fair-trade certified agribusiness in Sri Lanka committed to sustainability and innovation.",
        keywords: ["careers bio foods agroventures", "jobs organic food company sri lanka", "agribusiness jobs sri lanka", "food industry careers sri lanka", "sustainability jobs sri lanka", "bio foods hiring"],
        url,
        image_alt: "Careers at Bio Foods Agroventures",
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <CareersHero />
            <CareersOpenings />
            <Footer />
        </div>
    );
}

export default Careers;
