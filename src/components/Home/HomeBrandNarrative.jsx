import React from 'react';
import { Sparkles, Leaf, ArrowUpRight, Globe2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeBrandNarrative() {
    const principles = [
        { icon: Leaf, title: "Soil Vitality", description: "Nurturing the foundational geology of organic production." },
        { icon: Globe2, title: "Ecological Balance", description: "Complete systemic synchronization with natural rhythms." },
        { icon: Award, title: "Human Well-being", description: "Uncompromising qualitative architecture that enriches lives." }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Split Grid System ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Frame: Editorial Positioning */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Sparkles className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Operational Philosophy</span>
                            </div>
                            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                Brand Narrative
                            </h2>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 p-8">
                            <p className="text-lg sm:text-xl font-bold text-neutral-900 leading-relaxed tracking-tight">
                                Bio Foods represents more than an isolation of organic ingredients—it embodies a production methodology engineered through time, natural resource alignment, and environmental accountability.
                            </p>
                        </div>

                        <div className="space-y-6 text-base text-neutral-600 font-medium leading-relaxed max-w-2xl">
                            <p>
                                For over three decades, we have cultivated raw agricultural yield in close systemic alignment with regional microclimates. Each sequential harvest cycle balances tradition with structured market distribution networks, meeting global standard criteria without variant deviation.
                            </p>
                            <p>
                                Operating as an integrated framework under Agroventures Group, Bio Foods enters a scaled logistical ecosystem. This corporate convergence locks in supply infrastructure consistency and expanded volume reach while strictly maintaining regional soil preservation baselines.
                            </p>
                        </div>

                        {/* High-Contrast Interactive Command */}
                        <div className="pt-4">
                            <Link to="/about">
                                <button className="inline-flex items-center gap-3 bg-neutral-950 text-white px-7 py-4 border border-neutral-950 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-950 transition-colors duration-300 group cursor-pointer">
                                    Discover Our Story
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.5]" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Frame: Core Architectural Principles */}
                    <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-12">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-2">CORE PRINCIPLES</span>
                        
                        <div className="space-y-4">
                            {principles.map((principle, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-neutral-200 p-6 flex items-start gap-5 hover:border-neutral-950 transition-colors duration-300"
                                >
                                    <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 shrink-0">
                                        <principle.icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-mono text-xs text-neutral-400">[0{index + 1}]</span>
                                            <h4 className="text-lg font-black uppercase tracking-tight text-neutral-950">
                                                {principle.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Anchored Alliance Sub-Badge */}
                        <div className="border border-neutral-950 p-6 bg-neutral-950 text-white space-y-3 mt-6">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">INTEGRATED SYSTEM - </span>
                                <h4 className="font-mono text-xs font-black uppercase tracking-tight text-white">Agroventures Group</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed tracking-wide">
                                Executing responsibly scaled logistical infrastructure while securing the total provenance of our agricultural assets.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HomeBrandNarrative;