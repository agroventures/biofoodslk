import React from 'react';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeCertifications() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-brand-light rounded-[3rem] p-8 lg:p-16 border border-brand-primary/5 relative overflow-hidden">

                    {/* Background Subtle Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 text-brand-primary mb-6">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="font-black uppercase tracking-[0.2em] text-xs">Verified Excellence</span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-none mb-6">
                                No blind <br />
                                <span className="text-brand-primary">belief here.</span>
                            </h2>

                            <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed">
                                Our commitment to organic integrity and fair trade is backed by the world’s most stringent auditing bodies. Every product we ship is a promise kept.
                            </p>

                            <Link to='/quality-certifications'>
                                <button className="group flex items-center gap-3 bg-gray-900 hover:bg-brand-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-300">
                                    Explore Our Standards
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>

                        {/* Certification Imagery */}
                        <div className="relative space-y-6">
                            <div className="bg-white p-8 rounded-4xl shadow-xl shadow-brand-primary/5 border border-white hover:shadow-brand-primary/10 transition-shadow">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Global Organic & Fairtrade</p>
                                <img
                                    src="/Home/ICS_logos.avif"
                                    alt="Organic Certifications"
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <div className="bg-white p-8 rounded-4xl shadow-xl shadow-brand-primary/5 border border-white hover:shadow-brand-primary/10 transition-shadow">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Food Safety & Quality Systems</p>
                                <img
                                    src="/Home/Foodsafety.avif"
                                    alt="Food Safety Standards"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCertifications;