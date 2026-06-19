import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const support = [
        { id: 1, href: '/terms', title: 'Terms and Conditions' }, 
        { id: 2, href: '/privacy', title: 'Privacy Policy' }
    ];

    const navLinks = [
        // { name: 'Home', href: '/' },
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
        <footer className="relative bg-[#090D0F] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            
            {/* Subtle Industrial Background Coordinates */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(to right, #FFF 1px, transparent 1px),
                                          linear-gradient(to bottom, #FFF 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* ── Main Editorial Structure ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    
                    {/* Frame 01: Core Platform Identity */}
                    <div className="lg:col-span-5 flex flex-col items-start space-y-6 lg:pr-12">
                        <Link to="/" className="block selection:bg-transparent">
                            <img src='/logo.png' alt="Logo" className="h-10 w-auto tracking-tight filter brightness-110" />
                        </Link>
                        <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-sm">
                            Sustainably grown, thoughtfully delivered. We bridge the structural gap between ethical producers and global conscious consumers.
                        </p>
                        <div className="flex items-center gap-2.5 pt-2">
                            {[
                                { icon: <FaFacebookF size={14} />, href: "https://www.facebook.com/Biofoofdslk/" },
                                { icon: <FaXTwitter size={14} />, href: "https://x.com/biofoodslk" },
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.href} 
                                    target='_blank'
                                    rel="noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:border-white"
                                >
                                    <span className="transition-colors">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Frame 02: Platform Indexing Directories */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-6 lg:border-x lg:border-white/5 lg:px-8">
                        <div>
                            <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
                                Navigation
                            </span>
                            <ul className="space-y-3.5">
                                {navLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link 
                                            to={item.href} 
                                            className="group flex items-center text-sm font-semibold text-neutral-400 hover:text-white transition-colors duration-200"
                                        >
                                            <span className="w-0 group-hover:w-2 h-px bg-white opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 transition-all duration-300" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
                                Legal
                            </span>
                            <ul className="space-y-3.5">
                                {support.map((item) => (
                                    <li key={item.id}>
                                        <Link 
                                            to={item.href} 
                                            className="group flex items-center text-sm font-semibold text-neutral-400 hover:text-white transition-colors duration-200"
                                        >
                                            <span className="w-0 group-hover:w-2 h-px bg-white opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 transition-all duration-300" />
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Frame 03: Communication Nodes */}
                    <div className="lg:col-span-3 flex flex-col items-start lg:pl-8 space-y-6">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                            Contact
                        </span>
                        
                        <div className="w-full space-y-4">
                            <a href="tel:+94117487100" className="group flex items-center gap-3.5 text-neutral-400 hover:text-white transition-colors">
                                <div className="p-2 rounded-md bg-white/5 border border-white/5 transition-colors group-hover:bg-white/10">
                                    <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
                                </div>
                                <span className="text-xs font-mono tracking-wider">+94 11 748 7100</span>
                            </a>
                            <a href="mailto:info@biofoodsagro.com" className="group flex items-center gap-3.5 text-neutral-400 hover:text-white transition-colors">
                                <div className="p-2 rounded-md bg-white/5 border border-white/5 transition-colors group-hover:bg-white/10">
                                    <Mail className="w-3.5 h-3.5 stroke-[1.5]" />
                                </div>
                                <span className="text-xs font-mono tracking-wider">info@biofoodsagro.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Metadata MetaFooter Bar ── */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-mono tracking-wide text-neutral-500">
                    <div className="flex items-center gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                        <address className="not-italic text-neutral-400 font-sans font-medium">
                            52/1/D, New Kandy Road, Kaduwela, Sri Lanka
                        </address>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <p>© {currentYear} <span className="text-neutral-400 font-sans font-bold">BioFoods</span>. All Rights Reserved.</p>
                        <span className="hidden sm:inline text-neutral-700">|</span>
                        <p>
                            SYSTEM DEPLOYMENT BY{' '}
                            <a 
                                href="https://www.ventrax.lk/" 
                                target='_blank' 
                                rel="noreferrer" 
                                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white"
                            >
                                VENTRAX.LK
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;