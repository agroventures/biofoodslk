import { Globe, Package, TrendingUp } from 'lucide-react';
import React from 'react'

function EcoSystemAgroVentures() {
    const agroventuresBenefits = [
        {
            icon: Globe,
            title: "Expanded Market Opportunities",
            description: "Access to international markets and premium buyers"
        },
        {
            icon: Package,
            title: "Improved Infrastructure",
            description: "Enhanced processing facilities and logistics support"
        },
        {
            icon: TrendingUp,
            title: "Increased Demand",
            description: "Growing orders through global expansion initiatives"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-brand-light/30 border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Enhanced Support</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Empowerment Through <span className="text-brand-secondary">Agroventures</span>
                        </h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-light shadow-sm mb-8">
                            <p className="text-lg lg:text-xl text-brand-dark/80 text-center leading-relaxed mb-8">
                                With the support of Agroventures Group, our farmer network benefits from:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {agroventuresBenefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white border border-brand-light rounded-2xl p-6 hover:border-brand-secondary/20 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-secondary transition-colors duration-300">
                                            <benefit.icon className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="text-base font-bold text-brand-dark mb-2">{benefit.title}</h4>
                                        <p className="text-sm text-brand-dark/60 leading-relaxed">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoSystemAgroVentures
