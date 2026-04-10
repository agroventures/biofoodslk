import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingCart, ChevronRight, Star, Check } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HomeHero from '../components/Home/HomeHero';
import HomeSegments from '../components/Home/HomeSegments';

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

    return (
        <div className="min-h-screen">
            <Navbar />
            <HomeHero />
            <HomeSegments />
            <Footer />
        </div>
    )
}

export default Home
