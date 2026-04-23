import { ChevronRight, Play, Leaf } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function HomeHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/Home/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60 scale-105" // Slight scale prevents white edges
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/40" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Brand Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
                        <Leaf className="w-4 h-4 text-brand-primary" />
                        <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                            Pioneering Biodynamics Since 1993
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6 sm:mb-8">
                        From Sri Lanka’s Living Soils <br />
                        <span className="text-brand-primary italic">to Global Markets</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-medium">
                        An exceptional collection of organic, biodynamic, and fair-trade ingredients cultivated with care,
                        perfected through expertise, and delivered with the global strength of Agroventures Group.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                        <Link to='/products'>
                            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group shadow-2xl shadow-brand-primary/20">
                                Explore Our Collection
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link to='/contact'>
                            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                                Partner With Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Scroll</span>
                    <div className="w-px h-12 bg-linear-to-b from-brand-primary to-transparent" />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;