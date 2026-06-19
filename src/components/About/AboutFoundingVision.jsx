import React from 'react';
import { Leaf, Heart, ShieldCheck, Sparkles } from 'lucide-react';

function AboutFoundingVision() {
    const principles = [
        {
            icon: Leaf,
            title: "Protect and Regenerate",
            description: "Natural ecosystems preserved through responsible farming"
        },
        {
            icon: Heart,
            title: "Provide Fair Livelihoods",
            description: "Stable, dignified income for farming communities"
        },
        {
            icon: ShieldCheck,
            title: "Deliver Pure Food",
            description: "100% chemical-free produce for consumers"
        }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Header Matrix ── */}
                <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-950">
                            <Sparkles className="w-4 h-4 stroke-[1.5]" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Institutional Mandate</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                            The Founding Vision
                        </h2>
                    </div>
                </div>

                {/* ── Main Editorial Structure ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Column: Philosophical Positioning */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-12">
                        <div className="bg-neutral-50 border border-neutral-200 p-8 relative">
                            <p className="text-xl font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                                At the heart of Bio Foods lies the strategic vision of Dr. Sarath Ranaweera, whose system design completely redefined the role of agricultural infrastructure in modern society.
                            </p>
                            <p className="text-xs text-neutral-500 font-medium leading-relaxed mt-4 pt-4 border-t border-neutral-200">
                                He established that commercial production models must remain completely synchronized with three unyielding systemic pillars:
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Technical Grid System */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            {principles.map((principle, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-neutral-200 p-6 flex flex-col sm:flex-row gap-6 items-start hover:border-neutral-950 transition-colors duration-300"
                                >
                                    <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 shrink-0">
                                        <principle.icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-mono text-[10px] text-neutral-400">[0{index + 1}]</span>
                                            <h3 className="text-lg font-black uppercase tracking-tight text-neutral-950">
                                                {principle.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-xl">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutFoundingVision;