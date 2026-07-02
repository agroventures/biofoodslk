import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import NewsEventsHero from '../components/NewsEvents/NewsEventsHero';
import NewsEventsGrid from '../components/NewsEvents/NewsEventsGrid';
import useSEO from '../hooks/useSEO';

function NewsEvents() {
    const url = window.location.href;

    useSEO({
        title: "News & Events | Bio Foods Agroventures Sri Lanka",
        description: "Stay updated with the latest news, events, exhibitions and milestones from Bio Foods Agroventures — Sri Lanka's leading organic and fair-trade agribusiness.",
        keywords: ["bio foods news", "bio foods events", "organic food Sri Lanka news", "agroventures events"],
        url,
        image_alt: "News & Events – Bio Foods Agroventures",
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
