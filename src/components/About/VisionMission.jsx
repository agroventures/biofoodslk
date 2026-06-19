import React from 'react';
import { Eye, Target, Leaf, Sparkles, Globe, ShieldCheck } from 'lucide-react';

function VisionMission() {
    return (
        <div className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            
            {/* ── 1. Vision Node: Asymmetric Structural Matrix ── */}
            <section className="relative py-24 lg:py-36 bg-white border-t border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Primary Vision Heading Block */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Eye className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Institutional Target</span>
                            </div>

                            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                To be the <br />
                                <span className="text-neutral-900 underline decoration-1 underline-offset-8">Leading Light</span> <br />
                                of Organic Asia.
                            </h2>

                            <div className="max-w-2xl pt-4">
                                <p className="text-lg md:text-xl font-medium text-neutral-500 leading-relaxed">
                                    To establish a global reference model in organic agriculture, recognized universally for raw integrity, cross-border innovation, and systemic environmental sustainability.
                                </p>
                            </div>
                        </div>

                        {/* Visual Structural Data Cubes */}
                        <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:pt-12">
                            <div className="bg-neutral-50 p-6 border border-neutral-200 flex flex-col justify-between aspect-square">
                                <Globe className="w-5 h-5 text-neutral-950 stroke-[1.5]" />
                                <div className="space-y-1">
                                    <span className="text-2xl font-black uppercase tracking-tight text-neutral-950 block">Asia</span>
                                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block">Core Node Location</span>
                                </div>
                            </div>
                            <div className="bg-neutral-950 p-6 flex flex-col justify-between aspect-square">
                                <ShieldCheck className="w-5 h-5 text-white stroke-[1.5]" />
                                <div className="space-y-1">
                                    <span className="text-2xl font-black uppercase tracking-tight text-white block">100%</span>
                                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/50 block">Certified Organic</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 2. Mission Node: Split Column Layout ── */}
            <section className="py-24 lg:py-36 bg-white border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        
                        {/* Left Control Column */}
                        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-12">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Target className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Execution Plan</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                Raising <br /> Standards
                            </h2>
                        </div>

                        {/* Right Content Payload Block */}
                        <div className="lg:col-span-8 space-y-10">
                            <div className="bg-neutral-50 border border-neutral-200 p-8 lg:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                                    <Sparkles className="w-24 h-24 text-neutral-950" />
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-neutral-900 leading-relaxed">
                                    "To produce and deliver premium organic products through strictly ethical field sourcing, continuous scientific advancement, and fundamentally responsible enterprise business practices."
                                </p>
                                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-neutral-950 rounded-full" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                                        Collective Ecosystem Operation
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 3. Sustainability Node: High-Contrast Editorial Canvas ── */}
            <section className="py-24 lg:py-36 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        <div className="lg:col-span-4 space-y-4">
                            <div className="flex items-center gap-2 text-white/60">
                                <Leaf className="w-4 h-4 stroke-[1.5]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Resource Guarantee</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                                A promise to future generations.
                            </h2>
                        </div>

                        <div className="lg:col-span-8 space-y-12">
                            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
                                We treat the combined strategic execution of verified organic agriculture and cross-border fair trade protocols as the singular mechanism required to build absolute sustainability across all systemic farming nodes.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
                                <div className="space-y-2">
                                    <h4 className="text-white font-mono text-[11px] uppercase tracking-wider font-bold">
                                        [ Matrix 01 // Organic Standards ]
                                    </h4>
                                    <p className="text-neutral-400 text-xs leading-relaxed">
                                        Ensuring core topsoil environments remain intensely fertile, bio-diverse, and chemical-free for ongoing production multi-cycles.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-white font-mono text-[11px] uppercase tracking-wider font-bold">
                                        [ Matrix 02 // Fair Trade Security ]
                                    </h4>
                                    <p className="text-neutral-400 text-xs leading-relaxed">
                                        Locking down clear premium price guarantees to distribute concrete economic safety directly to individual grower nodes.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default VisionMission;