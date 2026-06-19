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
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const getNavbarStyles = () => {
        if (!isTransparentPage || scrolled) {
            return 'fixed bg-white border-b border-neutral-100 text-neutral-900 shadow-sm h-20 md:h-24';
        }
        return 'fixed bg-transparent border-b border-transparent h-24 md:h-32 text-white';
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        // { name: 'Our Eco System', href: '/eco-system' },
        // { name: 'Global Presence', href: '/global-presence' },
        // { name: 'Sustainability', href: '/sustainability' },
        // { name: 'Producers', href: '/producers' },
        { name: 'Processing Facilities', href: '/processing-facilities' },
        // { name: 'Media', href: '/media' },
        { name: 'Quality & Certifications', href: '/quality-certifications' },
        { name: 'Awards and Recognition', href: '/awards' },
        // { name: 'Partner With Us', href: '/partner-with-us' },
        { name: 'Contact Us', href: '/contact' }
    ];

    return (
        <>
            {/* ── Main Fixed Navigation Bar ── */}
            <nav className={`top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${getNavbarStyles()}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">

                    {/* Branding / Logo */}
                    <div className="shrink-0">
                        <Link to="/" className="block selection:bg-transparent" onClick={() => setIsOpen(false)}>
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

                    {/* Dynamic Command Trigger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 active:scale-95 ${
                            !isTransparentPage || scrolled
                                ? 'border-neutral-200 bg-neutral-50 text-neutral-900 hover:bg-neutral-100'
                                : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                        }`}
                        aria-label="Toggle navigation drawer"
                    >
                        {/* <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] pl-1 hidden sm:inline">
                            {isOpen ? 'Close' : 'Menu'}
                        </span> */}
                        <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
                            <Menu className={`absolute w-6 h-6 transition-transform duration-300 ${isOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
                            <X className={`absolute w-6 h-6 transition-transform duration-300 ${isOpen ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* ── Structural Blur Overlay ── */}
            <div
                className={`fixed inset-0 bg-neutral-950/40 backdrop-blur-md z-40 transition-all duration-500 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* ── Architectural Drawer Panel ── */}
            <div 
                className={`fixed top-0 right-0 h-full w-full sm:w-120 bg-neutral-950 text-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col justify-between ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Drawer Interior Header */}
                <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        Navigation Index
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                        aria-label="Dismiss panel"
                    >
                        <X size={18} className="stroke-[1.5]" />
                    </button>
                </div>

                {/* Editorial Index Links */}
                <div className="overflow-y-auto flex-1 px-8 py-12 scrollbar-hide">
                    <nav className="space-y-4">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-baseline gap-4 py-2 text-2xl sm:text-3xl font-black tracking-tight uppercase transition-all duration-300 border-b border-transparent hover:border-white/10"
                                >
                                    <span className="font-mono text-xs text-neutral-600 group-hover:text-white transition-colors duration-300">
                                        0{index + 1}
                                    </span>
                                    <span className={`flex-1 transition-transform duration-300 group-hover:translate-x-2 ${
                                        isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
                                    }`}>
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Technical Drawer Footer Panel */}
                {/* <div className="p-6 sm:p-8 border-t border-white/5 bg-neutral-900/50 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Corporate Portal</span>
                        <span className="text-[11px] text-neutral-400 font-medium">Agroventures Platform Layout</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div> */}
            </div>

            {/* Static Content Push Layout Buffer (Preserved exact height fallback) */}
            {!isTransparentPage && <div className="h-20 md:h-24" />}
        </>
    );
};

export default Navbar;