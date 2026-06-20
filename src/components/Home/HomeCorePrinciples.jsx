import React from 'react';
import { Leaf, Handshake, ScanLine, Gauge, Sparkles } from 'lucide-react';

function HomeCorePrinciples() {
    const principles = [
        {
            icon: Leaf,
            title: "Organic & Biodynamic Integrity"
        },
        {
            icon: Handshake,
            title: "Ethical Fair-Trade Engagement"
        },
        {
            icon: ScanLine,
            title: "End-to-End Traceability"
        },
        {
            icon: Gauge,
            title: "Precision Quality Management"
        }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Editorial Section Header ── */}
                <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-950">
                            <Sparkles className="w-4 h-4 stroke-[1.5]" />
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">What We Stand For</span>
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                            Our Core Principles
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-base text-neutral-600 font-medium leading-relaxed">
                            The non-negotiable architectural foundations governing every volume trace processed within our distribution framework.
                        </p>
                    </div>
                </div>

                {/* ── Brutalist Principles Grid Matrix ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-neutral-200 p-8 flex flex-col justify-between items-start h-60 hover:border-neutral-950 transition-colors duration-300"
                        >
                            {/* Structural Metric Label & Icon */}
                            <div className="w-full flex items-start justify-between">
                                <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                    <principle.icon className="w-5 h-5 stroke-[1.5]" />
                                </div>
                            </div>

                            {/* Core Title Blueprint */}
                            <div className="space-y-2 mt-auto">
                                <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950 leading-tight">
                                    {principle.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HomeCorePrinciples;