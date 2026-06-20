import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ShieldCheck, FileText, Lock, EyeOff, Scale, Globe } from 'lucide-react';
import useSEO from '../hooks/useSEO';

function TermsAndConditions() {
    const url = window.location.href;

    useSEO({
        url,
        image_alt: "Terms and Conditions",
    });

    return (
        <div className="min-h-screen bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            <Navbar />

            {/* ── Editorial Header ── */}
            <header className="border-b border-neutral-950 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-neutral-950 mb-6">
                        <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Legal & Governance</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none mb-6">
                        Terms & <br />
                        <span className="text-neutral-400 italic font-normal normal-case tracking-tight">Conditions</span>
                    </h1>
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                        Last Updated: October 2023
                    </p>
                </div>
            </header>

            {/* ── Content Section ── */}
            <main className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
                
                {/* Introduction Statement */}
                <div className="border border-neutral-950 p-8 bg-neutral-950 text-white mb-16">
                    <p className="text-base sm:text-lg font-medium leading-relaxed m-0">
                        Please review these Standard Terms and Conditions carefully prior to navigating the platform. Your prolonged access to and interface with this Service confirms your absolute compliance with the systematic rules described herein.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Section: Overview */}
                    <section className="group border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                <FileText className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-950 m-0">General Agreement</h2>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-12">
                            By navigating this platform, you commit to accepting all conditions structured inside this framework. You are restricted from using this Website if you maintain any systematic disagreement with any of these established criteria. Any subsequent tool integrations will seamlessly cascade under these exact terms.
                        </p>
                    </section>

                    {/* Section: IP */}
                    <section className="group border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                <Scale className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-950 m-0">Intellectual Property</h2>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-12">
                            Excluding personal content assets owned explicitly by users, <strong className="text-neutral-950 font-bold">Bio Foods and/or its corporate licensors</strong> retain absolute governance over all architectural intellectual property and visual systems contained on this Website. Licenses are restricted to isolated user-viewing purposes only.
                        </p>
                    </section>

                    {/* Section: Restrictions */}
                    <section className="group border border-neutral-200 p-8 lg:p-12 bg-white hover:border-neutral-950 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950">
                                <EyeOff className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-950 m-0">Prohibited Actions</h2>
                            </div>
                        </div>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                            {[
                                "Publishing platform assets to external media elements",
                                "Commercializing localized structural code or data patterns",
                                "Systematic data mining, scraping, or extraction behaviors",
                                "Utilizing platform infrastructure in damaging trajectories",
                                "Actions contrary to applicable regulatory frameworks",
                                "Engaging in unauthorized promotional or marketing maneuvers"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-xs sm:text-sm text-neutral-600 font-medium">
                                    <span className="font-mono text-xs text-neutral-400 mt-0.5">[{i + 1}]</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section: Content */}
                    <section className="group border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                <Globe className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-950 m-0">User Content</h2>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-12">
                            Content targets isolated media items, texts, logs, or images deployed by users inside the digital grid. By broadcasting assets here, you provide Bio Foods a non-exclusive, worldwide, irrevocable privilege to distribute, transcode, and mirror the elements across global channels.
                        </p>
                    </section>

                    {/* Section: Third Party */}
                    <section className="group border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                <Lock className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-950 m-0">Third-Party Protocols</h2>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-12">
                            Bio Foods maintains zero governance or regulatory mapping over peripheral third-party digital layers. You validate that Bio Foods assumes zero accountability or liability for any systemic anomalies or capital losses generated via external domain vectors.
                        </p>
                    </section>
                </div>

                {/* ── Bottom Notice / System Footer ── */}
                <div className="mt-24 pt-12 border-t border-neutral-950 text-center space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Legal Communication Endpoint</span>
                    <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                        Direct all queries regarding these systematic criteria directly to our compliance matrix via <br />
                        <a href="mailto:info@biofoodsagro.com" className="text-neutral-950 font-black border-b border-neutral-950 pb-0.5 hover:text-neutral-500 hover:border-neutral-300 transition-colors">
                            info@biofoodsagro.com
                        </a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default TermsAndConditions;