import React from 'react';
import { Leaf, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    const support = [
        {id: 1, href: '/terms', title: 'Terms and Conditions'}, 
        {id: 2, href: '/privacy', title: 'Privacy Policy'}
    ]

    const navLinks = [
        {id: 1, href: '/about', title: 'About Us'}, 
        {id: 2, href: '/products', title: 'Products'},
        {id: 3, href: '/producers', title: 'Producers'},
        {id: 4, href: '/media', title: 'Media'}
    ]

    return (
        <footer className="relative bg-[#0a0f12] text-white pt-20 pb-10 overflow-hidden">
            <div 
                className="absolute top-0 left-1/4 w-96 h-96 blur-[120px] bg-brand-secondary rounded-full pointer-events-none opacity-20" 
            />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <img src='/logo.png' alt="BioFoods Logo" className="h-12 w-auto brightness-110" />
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Sustainably grown, thoughtfully delivered. We bridge the gap between ethical producers and conscious consumers.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, href: "https://www.facebook.com/Biofoofdslk/" },
                                { icon: <FaXTwitter />, href: "https://x.com/biofoodslk" },
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.href} 
                                    target='_blank'
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 group hover:border-transparent hover:bg-brand-secondary"
                                >
                                    <span className="text-gray-400 group-hover:text-white">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-6">
                                Company
                            </h4>
                            <ul className="space-y-4">
                                {navLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center gap-1 transition-all duration-200">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold uppercase text-brand-accent tracking-wider mb-6">
                                Support
                            </h4>
                            <ul className="space-y-4">
                                {support.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-semibold uppercase text-brand-accent tracking-wider mb-6">
                            Stay Connected
                        </h4>
                        
                        <div className="space-y-4 pt-4">
                            <a href="tel:+94117487100" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                                    <Phone className="w-4 h-4 text-brand-accent" />
                                </div>
                                <span className="text-sm">+94 11 748 7100</span>
                            </a>
                            <a href="mailto:info@biofoodslk.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                                    <Mail className="w-4 h-4 text-brand-accent" />
                                </div>
                                <span className="text-sm">info@biofoodslk.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-secondary" />
                        <address className="not-italic">
                            52/1/D, New Kandy Road, Kaduwela, Sri Lanka
                        </address>
                    </div>
                    <p>
                        © {currentYear} <span className="text-gray-300 font-medium">BioFoods</span>. 
                        Developed by <a href="https://www.ventrax.lk/" target='_blank' rel="noreferrer" className="transition-colors text-brand-secondary">Ventrax.lk</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;