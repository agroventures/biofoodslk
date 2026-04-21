import React from 'react';
import { Eye, Target, Leaf, Sparkles, Globe, ShieldCheck, Users } from 'lucide-react';

function VisionMissionSustainability() {
    return (
        <div className="w-full bg-white">
            {/* Vision Section - Focus on Clarity and Brand Primary */}
            <section className="relative py-20 lg:py-32 bg-brand-light overflow-hidden">
                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                    <div className='absolute top-0 right-0 w-125 h-125 rounded-full blur-[120px] opacity-10' style={{ backgroundColor: 'var(--color-brand-primary)' }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full mb-8 border border-brand-primary/10 shadow-sm">
                                <Eye className="w-5 h-5" />
                                <span className="font-bold tracking-[0.2em] uppercase text-xs">Our Vision</span>
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                                To be the <br />
                                <span className="text-brand-primary">Leading Light</span> <br />
                                of Organic Asia.
                            </h2>

                            <div className="max-w-xl">
                                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                    To be the best environmentally-friendly organic food producer in Asia, guaranteeing global customer satisfaction through a sustainable fair trade approach that empowers our primary producers and employees.
                                </p>
                            </div>
                        </div>

                        {/* Visual Metric Block instead of Image */}
                        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-8 rounded-4xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                                <Globe className="w-10 h-10 text-brand-secondary mb-4" />
                                <span className="text-3xl font-black text-gray-900">Asia</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Focus</span>
                            </div>
                            <div className="bg-brand-primary p-8 rounded-4xl shadow-xl flex flex-col items-center text-center mt-8">
                                <ShieldCheck className="w-10 h-10 text-brand-accent mb-4" />
                                <span className="text-3xl font-black text-white">100%</span>
                                <span className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">Organic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Clean Grid Layout */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 sticky top-32">
                            <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                                <Target className="w-5 h-5" />
                                <span className="font-bold tracking-[0.2em] uppercase text-xs">Our Mission</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none">
                                Raising <br />
                                <span className="text-brand-secondary">Standards</span>
                            </h2>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="bg-brand-light rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                    <Sparkles className="w-32 h-32 text-brand-primary" />
                                </div>
                                <p className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight relative z-10">
                                    "To establish ever higher standards of organic and fair trade production through the team effort of our primary producers and members of the Bio Foods family."
                                </p>
                                <div className="mt-12 flex items-center gap-6 relative z-10">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-light bg-gray-200 flex items-center justify-center overflow-hidden">
                                                <Users className="w-6 h-6 text-gray-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-brand-primary uppercase tracking-widest">Team Effort</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability - The Commitment */}
            <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden relative">
                {/* Decorative primary glow */}
                <div className="absolute bottom-0 right-0 w-150 h-150 bg-brand-primary/20 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 text-brand-accent px-5 py-2.5 rounded-full mb-8 border border-white/10 backdrop-blur-md">
                            <Leaf className="w-5 h-5" />
                            <span className="font-bold tracking-[0.2em] uppercase text-xs">Sustainability</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tight">
                            A promise to <span className="text-brand-accent italic">future</span> generations.
                        </h2>
                        
                        <div className="space-y-8">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We believe in the combination of organic and fair trade practices as the tool to establish sustainability in all agricultural practices. 
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-left">
                                <div>
                                    <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-3">Organic Standards</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Ensuring environment remains fertile and chemical-free for the generations to come.</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-3">Fair Trade Security</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Guaranteeing fair prices to provide incentives for farmers to continue their vital work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VisionMissionSustainability;