import { ArrowUpRight, Leaf } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function HomeHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-neutral-950 antialiased">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/Home/hero2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-50 scale-105"
                />
                {/* Industrial Grid Overlay & Gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950/80" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-5xl space-y-8">
                    
                    {/* Brand Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2.5">
                        <Leaf className="w-3.5 h-3.5 text-white stroke-[1.5]" />
                        <span className="text-white font-mono text-xs uppercase tracking-[0.25em]">
                            Pioneering Biodynamics Since 1993
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        From Sri Lanka’s <br />
                        <span className="text-neutral-400 italic font-normal tracking-tight normal-case">Living Soils</span> <br />
                        to Global Markets
                    </h1>

                    {/* Editorial Description Payload */}
                    <p className="text-lg sm:text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl">
                        An exceptional portfolio of organic, biodynamic, and fair-trade ingredients cultivated with care, perfected through experience, and delivered via the global logistics network of Agroventures Group.
                    </p>

                    {/* High-Contrast Interactive Commands */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                        <Link to='/products'>
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-neutral-950 px-7 py-4 border border-white font-mono text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors duration-300 group cursor-pointer">
                                Explore Our Collection
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.5]" />
                            </button>
                        </Link>

                        <Link to='/contact'>
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-4 border border-white/20 font-mono text-xs uppercase tracking-widest hover:border-white transition-colors duration-300 cursor-pointer">
                                Partner With Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator Layout */}
            <div className="absolute bottom-12 left-6 lg:left-8 z-10 hidden md:block">
                <div className="flex items-center gap-4 rotate-90 origin-left translate-y-12">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Scroll Matrix</span>
                    <div className="w-16 h-px bg-white/20" />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;