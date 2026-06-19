import React from 'react';
import { TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react';

function AboutGrowth() {
    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-b border-neutral-100 py-24 lg:py-36">
            <div className="w-full px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        
                        {/* Graphic Column Framework */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="aspect-[4/5] bg-neutral-50 overflow-hidden border border-neutral-200 relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=700&fit=crop" 
                                    alt="Growth and Transformation" 
                                    className="w-full h-full object-cover opacity-95 transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            
                            {/* Technical Metadata Node Instead of Floating Card */}
                            <div className="pt-4 border-t border-neutral-950 flex items-start justify-between">
                                <div className="space-y-1">
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">OPERATIONAL LOG LOG_01</span>
                                    <p className="text-xl font-black uppercase tracking-tighter text-neutral-950">1993 — Present</p>
                                </div>
                                <TrendingUp className="w-4 h-4 text-neutral-950 stroke-[1.5]" />
                            </div>
                        </div>

                        {/* Textual Structural Payload */}
                        <div className="lg:col-span-7 space-y-8 lg:pt-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-neutral-950">
                                    <Sparkles className="w-4 h-4 stroke-[1.5]" />
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Scale Metrics</span>
                                </div>

                                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                    Growth & Transformation
                               </h2>
                            </div>

                            <div className="space-y-8 border-t border-neutral-100 pt-8">
                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                                    <div className="sm:col-span-3">
                                        <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase block">[ PHASE_01 ]</span>
                                    </div>
                                    <div className="sm:col-span-9">
                                        <p className="text-lg font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                                            From a modest regional initiative focused strictly on chemical-free organic cultivation methods, Bio Foods has systematically scaled into an internationally certified agricultural exporter servicing premium trade ecosystems globally.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start pt-8 border-t border-neutral-100">
                                    <div className="sm:col-span-3">
                                        <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase block">[ PHASE_02 ]</span>
                                    </div>
                                    <div className="sm:col-span-9">
                                        <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                                            The capital and processing realignment with Agroventures Group establishes a definitive technical integration loop. This partnership dynamically builds out our industrial output capability thresholds while preserving our core baseline processing philosophies and fair trade safety nets natively.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Minimal Technical Separation Rule */}
                            <div className="pt-8 flex items-center justify-between border-t border-neutral-950">
                                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">END OF TRANSFORMATION STATEMENT</span>
                                <ArrowUpRight className="w-4 h-4 text-neutral-950 stroke-[1.5]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutGrowth;