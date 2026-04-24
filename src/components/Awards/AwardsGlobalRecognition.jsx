import { Award, Globe, Trophy } from 'lucide-react';
import React from 'react'

function AwardsGlobalRecognition() {
    const achievements = [
        {
            icon: Trophy,
            title: "World's Fairest Fair Trader Award",
            description: "Awarded by FLO for exceptional fair trade practices"
        },
        {
            icon: Award,
            title: "Presidential Export Awards",
            description: "Recognized by the Government of Sri Lanka"
        },
        {
            icon: Globe,
            title: "International Sustainability Leadership",
            description: "Global recognition for environmental excellence"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                            <Award className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Excellence Recognized</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Global <span className="text-brand-primary">Recognition</span>
                        </h2>

                        <p className="text-lg lg:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                            Bio Foods has received numerous prestigious awards acknowledging its leadership in organic
                            and fair-trade agriculture.
                        </p>
                    </div>

                    {/* Achievements Grid */}
                    <div>
                        <h3 className="text-2xl font-black text-brand-dark text-center mb-8">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 text-center hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                        <achievement.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">{achievement.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsGlobalRecognition
