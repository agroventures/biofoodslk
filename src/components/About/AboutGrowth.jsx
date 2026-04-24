import React from 'react';
import { TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react';

function AboutGrowth() {
    return (
        <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Image Side */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                            <img 
                                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=700&fit=crop" 
                                alt="Growth and Transformation" 
                                className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-brand-light">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-wider">Established</p>
                                        <p className="text-lg font-black text-brand-dark">1993 — Present</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-bold tracking-[0.15em] uppercase text-xs">Evolution</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight mb-8">
                                Growth & <span className="text-brand-secondary">Transformation</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                                    </div>
                                    <p className="text-lg text-brand-dark/80 leading-relaxed">
                                        From a modest initiative focused on organic farming, Bio Foods has grown into a globally 
                                        recognized exporter serving premium international markets.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                    </div>
                                    <p className="text-lg text-brand-dark/80 leading-relaxed">
                                        The integration with Agroventures Group represents a defining moment enabling the company 
                                        to expand its capabilities while preserving its core values.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px flex-1 bg-brand-light" />
                                <ArrowUpRight className="w-5 h-5 text-brand-secondary" />
                                <div className="h-px w-12 bg-brand-secondary/30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutGrowth;