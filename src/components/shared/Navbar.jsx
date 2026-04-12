import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const isTransparentPage = ['/'].includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const getNavbarStyles = () => {
        if (!isTransparentPage) {
            return 'relative bg-white border-b border-gray-100 shadow-sm h-20 md:h-24 text-brand-dark';
        }
        return scrolled
            ? 'fixed bg-white/40 backdrop-blur-md border-b border-white/20 shadow-lg h-20 md:h-24'
            : 'fixed bg-transparent border-b border-transparent h-24 md:h-32';
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Producers', href: '/producers' },
        { name: 'Processing Facilities', href: '/processing-facilities' },
        { name: 'Media', href: '/media' },
        { name: 'Contact Us', href: '/contact' }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${getNavbarStyles()}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link to='/'>
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className={`w-auto transition-all duration-500 ${
                                    !isTransparentPage || scrolled 
                                        ? 'h-10 sm:h-12 md:h-16' 
                                        : 'h-12 sm:h-16 md:h-20'
                                }`}
                            />
                        </Link>
                    </div>

                    {/* Menu Button - Visible on all devices */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                            !isTransparentPage || scrolled
                                ? 'text-brand-dark bg-brand-primary/10 hover:bg-brand-primary/20'
                                : 'text-brand-primary bg-white/10 hover:bg-white/20'
                        }`}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 h-full w-[85vw] sm:w-80 bg-white z-50 shadow-2xl transform transition-transform duration-400 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <img 
                            src="/logo.png" 
                            alt="Logo" 
                            className="h-8 sm:h-10 w-auto" 
                        />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-brand-primary p-2 hover:bg-gray-50 rounded-full transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="overflow-y-auto h-[calc(100%-160px)] sm:h-[calc(100%-180px)] px-3 sm:px-4 py-4 sm:py-6 scrollbar-hide">
                    <div className="space-y-1 sm:space-y-1.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={handleLinkClick}
                                className="group flex items-center px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all duration-200 border border-transparent hover:border-brand-primary/10"
                            >
                                <span className="flex-1 tracking-wide">{link.name}</span>
                                <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                    <svg 
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={3} 
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;