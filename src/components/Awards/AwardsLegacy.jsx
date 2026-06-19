import React from 'react';
import { Globe, Heart, Shield, Target } from 'lucide-react';

const AwardsLegacy = () => {
    const continuityPrinciples = [
        {
            icon: Globe,
            title: "Expanding International Reach",
            description: "Without diluting origin authenticity."
        },
        {
            icon: Heart,
            title: "Scaling Operations",
            description: "While maintaining artisanal quality standards."
        },
        {
            icon: Target,
            title: "Strengthening Brand Positioning",
            description: "Within premium global segments natively."
        }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            <div className="w-full px-6 lg:px-8 py-24 lg:py-32 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto">
                    
                    {/* ── Architectural Section Header ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-neutral-100">
                        <div className="lg:col-span-8 space-y-3">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Shield className="w-3.5 h-3.5 stroke-2" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Preservation Framework</span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                A Legacy Continued
                            </h2>
                        </div>
                        <div className="lg:col-span-4 flex items-end">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                                Integration Analysis / Agroventures Group
                            </span>
                        </div>
                    </div>

                    {/* ── Main Editorial Text Matrix ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Column: Purpose & Context */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">MISSION STATEMENT</span>
                                <p className="text-lg font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                                    Bio Foods' journey is historically anchored by integrity, shared purpose, and a deep, systemic respect for nature.
                                </p>
                            </div>
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                Its structural legacy—built over decades of verified ethical farming networks, certified fair-trade practices, and premium organic value chains—remains its most vital operational asset. With strategic integration into Agroventures Group, this legacy is extended sustainably into global markets.
                            </p>
                        </div>

                        {/* Right Column: Dynamic Continuity Pillars */}
                        <div className="lg:col-span-7 space-y-12 lg:pl-12 lg:border-l border-neutral-100">
                            <div>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-8">
                                    Agroventures systematically recognizes the permanent value of Bio Foods' heritage, preserving founding protocols while deploying global allocation infrastructure:
                                </p>

                                {/* Continuity Columns Directory */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    {continuityPrinciples.map((principle, index) => (
                                        <div key={index} className="space-y-3 pt-6 border-t border-neutral-100">
                                            <div className="text-neutral-950">
                                                <principle.icon className="w-4 h-4 stroke-[1.5]" />
                                            </div>
                                            <h4 className="text-xs font-mono uppercase tracking-wider font-black text-neutral-950 leading-tight">
                                                {principle.title}
                                            </h4>
                                            <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                                                {principle.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Structural Accent Quote Block */}
                            <div className="bg-neutral-50 p-8 border border-neutral-200/60 rounded-xl">
                                <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-2">Evolution Yield</p>
                                <p className="text-sm font-bold text-neutral-900 uppercase tracking-tight">
                                    The definitive result is a seamless corporate paradigm where tradition remains dynamic, progressive, and scale-ready.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* ── High-Contrast Strategic Footer Canvas ── */}
                    <div className="mt-28 bg-neutral-950 text-white rounded-2xl p-8 lg:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                        
                        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                            <span className="inline-block border border-white/20 font-mono text-[9px] uppercase tracking-[0.3em] px-3 py-1 bg-white/5 rounded-md">
                                Core Summary Matrix
                            </span>
                            <h3 className="text-xl lg:text-3xl font-black uppercase tracking-tighter leading-tight">
                                A premium corporate ecosystem that evolves without losing its essence, and scales without compromising its core principles.
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AwardsLegacy;