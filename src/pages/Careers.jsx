import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import CareersHero from '../components/Careers/CareersHero';
import CareersOpenings from '../components/Careers/CareersOpenings';
import useSEO from '../hooks/useSEO';

function Careers() {
    const url = window.location.href;

    useSEO({
        url,
        image_alt: 'Careers at Bio Foods Sri Lanka',
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
