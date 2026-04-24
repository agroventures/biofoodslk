import { Globe, Heart, Shield, Target } from 'lucide-react';
import React from 'react'

function AwardsLegacy() {
    const continuityPrinciples = [
        {
            icon: Globe,
            title: "Expanding International Reach",
            description: "Without diluting origin authenticity"
        },
        {
            icon: Heart,
            title: "Scaling Operations",
            description: "While maintaining artisanal quality"
        },
        {
            icon: Target,
            title: "Strengthening Brand Positioning",
            description: "Within premium global segments"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-brand-light/30">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <Shield className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Heritage</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            A Legacy <span className="text-brand-secondary">Continued</span>
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Opening Statement */}
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-light shadow-sm">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed mb-6">
                                Bio Foods' journey has always been defined by <span className="font-bold text-brand-primary">integrity, purpose, and a deep respect for nature</span>.
                                Its legacy—built over decades of ethical farming, fair-trade practices, and organic innovation—remains its most valuable asset.
                            </p>
                            <p className="text-base lg:text-lg text-brand-dark/70 leading-relaxed">
                                With the integration into Agroventures Group, this legacy is not replaced, but thoughtfully extended
                                into a new era of relevance and global impact.
                            </p>
                        </div>

                        {/* Heritage Preservation */}
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-light shadow-sm">
                            <p className="text-base lg:text-lg text-brand-dark/80 leading-relaxed mb-8">
                                Agroventures recognizes the intrinsic value of Bio Foods' heritage and preserves its founding
                                principles, while simultaneously introducing the capabilities required to thrive in a rapidly
                                evolving global market. This includes:
                            </p>

                            {/* Continuity Principles */}
                            <div className="grid md:grid-cols-3 gap-6">
                                {continuityPrinciples.map((principle, index) => (
                                    <div
                                        key={index}
                                        className="group bg-brand-light/30 rounded-2xl p-6 border border-brand-light hover:border-brand-secondary/20 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-secondary transition-colors duration-300">
                                            <principle.icon className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="text-base font-bold text-brand-dark mb-2 leading-tight">
                                            {principle.title}
                                        </h4>
                                        <p className="text-sm text-brand-dark/60 leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progressive Tradition */}
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-light shadow-sm text-center">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed mb-4">
                                The result is a seamless continuation where{' '}
                                <span className="font-bold text-brand-secondary">tradition is not static, but progressive</span>.
                            </p>
                        </div>

                        {/* Final Statement */}
                        <div className="relative bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-10 lg:p-16 border border-brand-primary/10 overflow-hidden">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="relative text-center">
                                <p className="text-xl lg:text-2xl font-bold text-brand-dark/90 leading-relaxed mb-6">
                                    Bio Foods, under Agroventures, represents a rare continuity:
                                </p>
                                <p className="text-2xl lg:text-3xl xl:text-4xl font-black text-brand-dark leading-tight">
                                    A legacy that{' '}
                                    <span className="text-brand-primary">evolves without losing its essence</span>, and{' '}
                                    <span className="text-brand-secondary">grows without compromising its values</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsLegacy
