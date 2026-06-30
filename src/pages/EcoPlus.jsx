import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Sprout, Microscope, BarChart3, ShoppingBag, Quote, CheckCircle2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

function EcoPlus() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Eco Plus",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className='min-h-screen bg-white'>
            <Navbar />

            {/* 1. Hero Section - The First & Only */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-300">
                <img
                    src="/Home/eco_plus.avif"
                    alt="Eco Plus Fertilizer"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-primary px-6 py-2 rounded-full mb-8">
                        <CheckCircle2 size={18} />
                        <span className="text-sm font-black uppercase tracking-[0.2em]">The Pioneer</span>
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                        Sri Lanka’s First & Only <br />
                        <span className="text-brand-primary italic">Certified Organic Fertilizer.</span>
                    </h1>
                </div>
            </section>

            {/* 2. Scientific Narrative - The Video & The Microbes */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 aspect-video lg:aspect-square">
                        <video
                            src="/Home/eco_plus_video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <p className="text-white font-bold tracking-widest text-xs uppercase">Watch the Process</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">
                            Sustainability isn't built on compost alone.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            After years of research with leading soil microbiologists, we’ve cracked the code.
                            Our formula reintroduces **six essential microbes** - organisms that no longer coexist naturally
                            due to chemical farming - into a substrate of certified organic, unstressed animal waste.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-2xl bg-brand-light border border-brand-primary/10">
                                <Microscope className="text-brand-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Lab Grown</h4>
                                    <p className="text-xs text-slate-500">Extracted and multiplied in sterile environments.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-brand-light border border-brand-primary/10">
                                <Sprout className="text-brand-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Friendly Substrate</h4>
                                    <p className="text-xs text-slate-500">Sourced from Control Union certified farms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The "Yield Myth" Callout */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Quote className="w-12 h-12 text-brand-primary/20 mx-auto mb-8" />
                    <h3 className="text-3xl font-black text-slate-900 mb-6">
                        "If you provide people with a better product, the people will win the fight for you."
                    </h3>
                    <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">- Dr. Sarath Ranaweera, Chairman</p>

                    <div className="mt-16 bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                            <div className="text-center">
                                <div className="text-6xl font-black text-brand-primary mb-2">85%</div>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Current users are <br /> Conventional Farmers</p>
                            </div>
                            <div className="h-px w-20 bg-slate-100 md:h-20 md:w-px" />
                            <div className="text-center">
                                <BarChart3 className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                                <p className="text-slate-600 font-medium italic">Farmers report significantly higher yields than chemical alternatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Availability & Social Impact */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 rounded-[4rem] p-10 lg:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] -mr-32 -mt-32" />

                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[0.9]">
                            We broke <br /> the wheel.
                        </h2>
                        <p className="text-white/70 text-lg mb-12 leading-relaxed">
                            Now available for home growers, passionate gardeners, and cooks who care about ingredient quality.
                            Whether you are looking for 10Kg bulk bags or our upcoming home gardener range, it's time to join the
                            revolution and <span className="text-brand-primary font-bold">#BeTheChange</span>.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl">
                                <ShoppingBag className="text-brand-primary" />
                                <div>
                                    <h5 className="font-bold">Organic Way Outlet</h5>
                                    <p className="text-xs text-white/50">Kaduwela - Available Now</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl">
                                <ShoppingBag className="text-brand-secondary" />
                                <div>
                                    <h5 className="font-bold">Good Market</h5>
                                    <p className="text-xs text-white/50">Special Introductory Offer</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-primary">
                            <span>#OneSmallStepForMan</span>
                            <span className="text-white/20">•</span>
                            <span>#LifeTheOrganicWay</span>
                            <span className="text-white/20">•</span>
                            <span>#BeTheChange</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default EcoPlus;