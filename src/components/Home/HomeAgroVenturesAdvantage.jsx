import React from 'react';
import { GitMerge, Factory, Globe, TrendingUp, Sparkles } from 'lucide-react';

function HomeAgroVenturesAdvantage() {
    const advantages = [
        {
            icon: GitMerge,
            title: "Integrated Supply Chain Systems",
            description: "Ensuring highly structured, consistent, and resilient high-volume production metrics."
        },
        {
            icon: Factory,
            title: "Advanced Processing Facilities",
            description: "Maintaining rigorous standards of purity, biological hygiene, and product architectural integrity."
        },
        {
            icon: Globe,
            title: "International Trade Networks",
            description: "Enabling frictionless logistical export execution across critical global market channels."
        },
        {
            icon: TrendingUp,
            title: "Strategic Growth Vision",
            description: "Driven by systemic environmental sustainability and long-term capital value creation."
        }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Editorial Layout Header ── */}
                <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-950">
                            <Sparkles className="w-4 h-4 stroke-[1.5]" />
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Why Choose Us</span>
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                            The Agroventures Advantage
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-base text-neutral-600 font-medium leading-relaxed">
                            The corporate infrastructure of Agroventures Group elevates Bio Foods into a premium, globally agile agribusiness network.
                        </p>
                    </div>
                </div>

                {/* ── High-Contrast Structural Advantage Matrix ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-neutral-200 p-8 flex flex-col justify-between items-start h-70 hover:border-neutral-950 transition-colors duration-300"
                        >
                            {/* Structural Icon Container */}
                            <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:border-neutral-950 group-hover:text-white">
                                <advantage.icon className="w-5 h-5 stroke-[1.5]" />
                            </div>

                            {/* Text Payload Block */}
                            <div className="space-y-2 mt-auto">
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-lg font-black uppercase tracking-tight text-neutral-950 leading-tight">
                                        {advantage.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                                    {advantage.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom Balanced Narrative Block ── */}
                <div className="border border-neutral-950 p-8 lg:p-12 bg-neutral-950 text-white space-y-4">
                    <div className="flex items-center gap-2">
                        <h4 className="font-mono text-xs font-black uppercase tracking-tight text-white">System Synthesis</h4>
                    </div>
                    <p className="text-lg sm:text-xl font-bold leading-relaxed tracking-tight max-w-5xl">
                        This convergence empowers Bio Foods to scale with absolute industrial reliability while maintaining the deep, uncompromising trace provenance of artisanal cultivation.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default HomeAgroVenturesAdvantage;