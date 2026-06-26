import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import NewsEventsHero from '../components/NewsEvents/NewsEventsHero';
import NewsEventsGrid from '../components/NewsEvents/NewsEventsGrid';
import useSEO from '../hooks/useSEO';

function NewsEvents() {
    const url = window.location.href;

    useSEO({
        url,
        image_alt: "News & Events",
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <NewsEventsHero />
            <NewsEventsGrid />
            <Footer />
        </div>
    );
}

export default NewsEvents;
