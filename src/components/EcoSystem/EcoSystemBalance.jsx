import { Handshake, Leaf, Sparkles, Target } from 'lucide-react';
import React from 'react'

function EcoSystemBalance() {
    const balanceElements = [
        {
            icon: Leaf,
            title: "Traditional Farming Practices",
            description: "Time-tested methods preserving agricultural heritage",
            color: "brand-primary"
        },
        {
            icon: Sparkles,
            title: "Modern Agricultural Innovation",
            description: "Cutting-edge techniques enhancing productivity",
            color: "brand-secondary"
        },
        {
            icon: Target,
            title: "Commercial Scalability",
            description: "Infrastructure capable of meeting global demand",
            color: "brand-primary"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                            <Handshake className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Harmonious Integration</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6">
                            A Sustainable <span className="text-brand-primary">Balance</span>
                        </h2>
                        <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                            Our ecosystem is designed to harmonize:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        {balanceElements.map((element, index) => (
                            <div
                                key={index}
                                className={`group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 text-center hover:border-${element.color}/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                            >
                                <div className={`w-16 h-16 bg-${element.color}/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${element.color} transition-colors duration-300`}>
                                    <element.icon className={`w-8 h-8 text-${element.color} group-hover:text-white transition-colors duration-300`} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">{element.title}</h3>
                                <p className="text-sm text-brand-dark/60 leading-relaxed">{element.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final Statement */}
                    <div className="relative bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-10 lg:p-16 border border-brand-primary/10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="relative text-center">
                            <p className="text-xl lg:text-2xl font-bold text-brand-dark/90 leading-relaxed">
                                An ecosystem where{' '}
                                <span className="text-brand-primary">heritage meets innovation</span>, and{' '}
                                <span className="text-brand-secondary">sustainability drives growth</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoSystemBalance