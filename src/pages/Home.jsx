import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingCart, ChevronRight, Star, Check } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HomeHero from '../components/Home/HomeHero';
import HomeSegments from '../components/Home/HomeSegments';
import HomeCertifications from '../components/Home/HomeCertfications';
import HomeEcoPlus from '../components/Home/HomeEcoPlus';
import useSEO from '../hooks/useSEO';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Home",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <HomeHero />
            <HomeCertifications />
            <HomeSegments />
            <HomeEcoPlus />
            <Footer />
        </div>
    )
}

export default Home
