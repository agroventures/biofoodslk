import React from 'react';
import { Award, Globe, Trophy } from 'lucide-react';

const AwardsGlobalRecognition = () => {
    const achievements = [
        {
            icon: Trophy,
            title: "World's Fairest Fair Trader Award",
            description: "Awarded by FLO for exceptional global fair trade pioneering practices."
        },
        {
            icon: Award,
            title: "Presidential Export Awards",
            description: "Recognized natively by the Export Development Board & Government of Sri Lanka."
        },
        {
            icon: Globe,
            title: "Sustainability Leadership",
            description: "International architecture recognition for environmental framework excellence."
        }
    ];

    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            <div className="w-full px-6 lg:px-8 py-24 lg:py-32 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto">
                    
                    {/* ── Editorial Layout Header Split ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
                        <div className="lg:col-span-7 space-y-3">
                            <div className="flex items-center gap-2 text-neutral-950">
                                <Award className="w-3.5 h-3.5 stroke-2" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Verified Credentials</span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                Global Recognition
                            </h2>
                        </div>
                        <div className="lg:col-span-5 pt-4 lg:pt-8">
                            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                Bio Foods has systematically secured numerous international titles acknowledging its absolute structural leadership in certified organic processing and fair-trade agricultural operations over consecutive decades.
                            </p>
                        </div>
                    </div>

                    {/* ── Structural Grid Matrix ── */}
                    <div className="border-t border-neutral-950 pt-12">
                        <div className="mb-10">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-neutral-950">
                                [ Core Operational Manifest Honors ]
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group bg-white pt-8 pb-12 md:py-4 md:px-8 first:pl-0 last:pr-0 transition-colors duration-300"
                                >
                                    {/* Icon Identifier Node */}
                                    <div className="text-neutral-950 mb-8 transition-transform duration-300 group-hover:translate-x-1">
                                        <achievement.icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    
                                    {/* Content Block */}
                                    <div className="space-y-2">
                                        <span className="block font-mono text-[9px] text-neutral-400">
                                            METRIC REF_0{index + 1}
                                        </span>
                                        <h3 className="text-base font-bold text-neutral-900 uppercase tracking-tight leading-tight">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-sm">
                                            {achievement.description}
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
};

export default AwardsGlobalRecognition;