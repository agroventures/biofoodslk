import React from 'react';
import { Award, Globe, Leaf, Users, TrendingUp, Heart, CheckCircle2, Sparkles } from 'lucide-react';

function AboutBioFoods() {
    const milestones = [
        { year: "1993", title: "Established", description: "Family-owned business founded in Kandy" },
        { year: "2014", title: "World Recognition", description: "First ever 'World's Fairest Fairtrader Award'" },
        { year: "2018", title: "25th Anniversary", description: "Leading exporters of organic products" },
        { year: "2024", title: "Global Leader", description: "Trusted worldwide for organic excellence" }
    ];

    const achievements = [
        {
            icon: Award,
            title: "World's Fairest Fairtrader",
            description: "Awarded to Dr. Sarath Ranaweera by FLO in 2014"
        },
        {
            icon: Users,
            title: "Best Small Organic Farmer Group",
            description: "MOPA recognized as best in Asia by FLO 2014"
        },
        {
            icon: Globe,
            title: "Global Certifications",
            description: "Trusted across Europe, North America, Japan & Australia"
        }
    ];

    const values = [
        { icon: Leaf, text: "100% Organic & Biodynamic" },
        { icon: Heart, text: "Fair Trade Standards" },
        { icon: CheckCircle2, text: "Complete Traceability" },
        { icon: TrendingUp, text: "Sustainable Agriculture" }
    ];

    return (
        <div className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            
            {/* ── Section 1: Hero Block & Narrative Matrix ── */}
            <section className="relative w-full py-24 lg:py-36 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Editorial Bordered Header */}
                    <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Sparkles className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Corporate Origin</span>
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                About Bio Foods
                            </h1>
                        </div>
                    </div>

                    {/* Content Splitting Framework */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Narrative Segment */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="bg-neutral-50 border border-neutral-200 p-8">
                                <p className="text-xl font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                                    Established in 1993, Bio Foods is an institution completely devoted to an unyielding sustainable, organic, and fair trade operational model. Originating as a family business infrastructure within Kandy, the enterprise has scaled to become a globally benchmarked pioneer in biodynamic agriculture.
                                </p>
                            </div>
                            
                            <div className="space-y-6 text-sm text-neutral-500 font-medium leading-relaxed">
                                <p>
                                    We reject systemic agrochemical implementation natively. Every production layer leverages certified organic methods, actively protecting soil architecture, downstream waterways, and local environments for sequential harvesting generations.
                                </p>
                                <p>
                                    Simultaneously, our structure ensures absolute fair trade compliance, insulating regional farming networks from erratic middle-market volatility and localized exploitation channels.
                                </p>
                            </div>

                            {/* Minimal Dynamic Grid Elements */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {values.map((value, index) => (
                                    <div key={index} className="border border-neutral-200 p-4 flex items-center gap-4 bg-white">
                                        <value.icon className="w-4 h-4 text-neutral-950 shrink-0 stroke-[1.5]" />
                                        <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-neutral-900">{value.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Timeline & Media Elements */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="border border-neutral-200 bg-neutral-50 p-2">
                                <div className="aspect-video bg-neutral-200 overflow-hidden relative border border-neutral-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
                                        alt="Bio Foods Field Operations"
                                        className="w-full h-full object-cover mix-blend-multiply filter contrast-105"
                                    />
                                </div>
                            </div>

                            {/* Rigorous Micro Timeline */}
                            <div className="border border-neutral-950 p-6 space-y-6 bg-white">
                                <div className="space-y-4">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="grid grid-cols-12 gap-2 items-start text-xs">
                                            <span className="col-span-3 font-mono font-bold text-neutral-950">{milestone.year}</span>
                                            <div className="col-span-9 space-y-0.5">
                                                <h4 className="font-black uppercase tracking-tight text-neutral-950">{milestone.title}</h4>
                                                <p className="text-neutral-500 font-medium text-[11px]">{milestone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Section 2: Global Recognition Board ── */}
            <section className="w-full py-24 bg-neutral-50 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-neutral-950 mb-12 text-center lg:text-left">
                        System Certifications & Awards
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-white border border-neutral-200 p-6 flex flex-col justify-between aspect-square">
                                <div className="border border-neutral-200 p-3 w-fit bg-neutral-50">
                                    <achievement.icon className="w-5 h-5 text-neutral-950 stroke-[1.5]" />
                                </div>
                                <div className="space-y-2 mt-8">
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="font-mono text-[10px] text-neutral-400">[0{index + 1}]</span>
                                        <h4 className="text-lg font-black uppercase tracking-tight text-neutral-950">{achievement.title}</h4>
                                    </div>
                                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: Deep Technical Operational Payload ── */}
            <section className="py-24 lg:py-36 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-12">
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 block">Supply Line Ledger</span>
                            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-neutral-950 leading-tight">
                                Current Supply Chain Operations Today
                            </h3>
                        </div>

                        <div className="lg:col-span-8 space-y-12">
                            <div className="columns-1 md:columns-2 gap-8 space-y-6 text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-tight text-justify">
                                <p>
                                    As an integrated processor and agricultural product exporter, Bio Foods coordinates a dominant network footprint inside Sri Lanka's organic post-harvest processing framework. While addressing international volume requirements, our mechanism assumes full regulatory accountability for ecosystem survival across all extraction nodes.
                                </p>
                                <p>
                                    Our framework locks down a guaranteed execution minimum pricing matrix direct to the farm-gate, completely bypassing intermediary exploitation setups. While starting strictly in tea, the grid engineered the world's introductory fairtrade registered setup for spices.
                                </p>
                                <p>
                                    We are executing a direct-to-consumer brand paradigm architecture, translating our legacy catalog (teas, spices, botanical herbs, organic fruits, whole grains) into distributed global networks, affirming optimized standard access across multiple territories.
                                </p>
                                <p>
                                    By grouping certified independent micro-producers into discrete localized clusters, final packaging and sorting pass directly through our processing facilities. This close structural visibility establishes absolute verified product origin verification protocols worldwide.
                                </p>
                                <p>
                                    Bulk and specialized commercial consumer export channels service Europe, North America, Japan, and Australia concurrently. The framework's core network asset, the Marginalized Organic Producers Association (MOPA), stands validated as Asia's top smallholder farming block by FLO.
                                </p>
                            </div>

                            {/* High-Contrast Analytical Metrics Block */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-neutral-950">
                                <div className="space-y-1">
                                    <span className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tighter block">30+</span>
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">Years Infrastructure</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tighter block">1000+</span>
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">Contracted Families</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tighter block">100%</span>
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">Certified Matrix</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tighter block">Global</span>
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">Export Nodes</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutBioFoods;