import React from 'react';
import { Award, Network, Shield, TrendingUp } from 'lucide-react';

function QualityCertificationsAgroVentures() {
    const agroventuresEnhancements = [
        { icon: Shield, title: "Enhanced Quality Assurance Protocols", description: "Rigorous multi-stage operational verification matrices applied at factory nodes." },
        { icon: Network, title: "Digitally Integrated Traceability Systems", description: "Real-time ledger tracking spanning from field cultivation nodes straight to export cargo." },
        { icon: TrendingUp, title: "Continuous Improvement Methodologies", description: "Data-driven systemic optimization loops to maintain peak payload performance." },
        { icon: Award, title: "Modern Processing Technologies", description: "State-of-the-art facilities engineered for premium value preservation." }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-neutral-100">
            <div className="w-full px-6 lg:px-8 py-24 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    
                    {/* ── 1. Brutalist Layout Split Header ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-neutral-100">
                        <div className="lg:col-span-8 space-y-3">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <TrendingUp className="w-3.5 h-3.5 stroke-2" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">System Optimization</span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                Enhanced by Agroventures
                            </h2>
                        </div>
                        <div className="lg:col-span-4 flex items-end">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                                Operational Integration Framework
                            </span>
                        </div>
                    </div>

                    {/* ── 2. Structural Content Grid Matrix ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
                        
                        {/* Left Column: Long-Form Corporate Narrative */}
                        <div className="lg:col-span-5 space-y-6">
                            <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">STRATEGIC REALIGNMENT</span>
                            <p className="text-lg font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                                The integration with Agroventures Group represents a decisive evolution in Bio Foods' core operational excellence.
                            </p>
                            <div className="text-sm text-neutral-500 font-medium leading-relaxed space-y-4">
                                <p>
                                    This introduces advanced structural precision, governance, and systemic scalability that elevates every component layer of our underlying value chain.
                                </p>
                                <p>
                                    Through this alignment, our quality frameworks transition away from reactive checkpoint compliance measures into an overarching, continuous performance monitoring pipeline ensuring product integrity across all production payload runs.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Dynamic Performance Pillars */}
                        <div className="lg:col-span-7 space-y-12 lg:pl-12 lg:border-l border-neutral-100">
                            <div>
                                <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-8">
                                    [ From cultivation to final export shipment, touchpoints are fortified via: ]
                                </p>

                                {/* Enhancements Directory Lines */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                                    {agroventuresEnhancements.map((enhancement, index) => (
                                        <div key={index} className="space-y-3 pt-6 border-t border-neutral-100 group">
                                            <div className="text-neutral-950 flex justify-between items-center">
                                                <span className="font-mono text-[9px] text-neutral-400">MATRIX NODE_0{index + 1}</span>
                                                <enhancement.icon className="w-4 h-4 stroke-[1.5]" />
                                            </div>
                                            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-950 leading-tight">
                                                {enhancement.title}
                                            </h4>
                                            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                                                {enhancement.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── 3. High-Contrast Bottom Strategic Verdict Canvas ── */}
                    <div className="border-t-2 border-neutral-950 pt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-neutral-950">
                                    REPEATABLE QUALITY OUTCOME
                                </span>
                            </div>
                            <div className="lg:col-span-8 space-y-6">
                                <p className="text-xl lg:text-3xl font-black uppercase tracking-tighter text-neutral-950 leading-tight">
                                    This framework enables Bio Foods to ship output payloads that satisfy the most unyielding global trade expectations,not on variable cycles, but consistently and natively at enterprise volume.
                                </p>
                                <p className="text-sm font-mono tracking-wide text-neutral-400">
                                    In essence, Agroventures transforms baseline operational intent from a simple target into a completely measurable, repeatable, and globally benchmarked industrial reality.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default QualityCertificationsAgroVentures;