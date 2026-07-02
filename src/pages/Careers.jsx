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
        keywords: ["careers bio foods", "jobs Sri Lanka agribusiness", "organic food company jobs", "bio foods agroventures careers"],
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
