import React from 'react'
import useSEO from '../hooks/useSEO';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import GlobalPresenceHero from '../components/GlobalPresence/GlobalPresenceHero';
import GlobalPresenceInternationalReach from '../components/GlobalPresence/GlobalPresenceInternationalReach';
import GlobalPresenceAgroVentures from '../components/GlobalPresence/GlobalPresenceAgroVentures';

function GlobalPresence() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Global Presence",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <GlobalPresenceHero />
            <GlobalPresenceInternationalReach />
            <GlobalPresenceAgroVentures />
            <Footer />
        </div>
    )
}

export default GlobalPresence
