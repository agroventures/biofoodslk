import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeCertifications() {
    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Dual Column Split Layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Frame: Bold Editorial Claim */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Verified Excellence</span>
                            </div>
                            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-[0.9]">
                                No blind <br />
                                <span className="text-neutral-400 italic font-normal normal-case tracking-tight">belief here.</span>
                            </h2>
                        </div>

                        <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed max-w-md">
                            Our systematic compliance with organic parameters and fair trade ecosystems is rigorously validated by the world’s most stringent auditing bodies. Every single volume trace shipped is an absolute promise kept.
                        </p>

                        <div className="pt-2">
                            <Link to='/quality-certifications'>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-950 text-white px-7 py-4 border border-neutral-950 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-950 transition-colors duration-300 group cursor-pointer">
                                    Explore Our Standards
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.5]" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Frame: High-Contrast Audit Framework Display */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Audit Block 01 */}
                        <div className="bg-white border border-neutral-200 p-8 flex flex-col justify-between h-65 hover:border-neutral-950 transition-colors duration-300">
                            <div>
                                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-3 mb-6">
                                    Global Organic & Fairtrade
                                </h4>
                            </div>
                            <div className="flex items-center justify-center flex-1 w-full filter contrast-120 mix-blend-multiply">
                                <img
                                    src="/Home/ICS_logos.avif"
                                    alt="Organic Certifications Matrix"
                                    className="max-w-full max-h-25 object-contain object-center"
                                />
                            </div>
                        </div>

                        {/* Audit Block 02 */}
                        <div className="bg-white border border-neutral-200 p-8 flex flex-col justify-between h-65 hover:border-neutral-950 transition-colors duration-300">
                            <div>
                                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-3 mb-6">
                                    Food Safety & Quality Systems
                                </h4>
                            </div>
                            <div className="flex items-center justify-center flex-1 w-full filter contrast-120 mix-blend-multiply">
                                <img
                                    src="/Home/Foodsafety.avif"
                                    alt="Food Safety Standards Compliance"
                                    className="max-w-full max-h-25 object-contain object-center"
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