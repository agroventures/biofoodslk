import { Award, Network, Shield, TrendingUp } from 'lucide-react';
import React from 'react'

function QualityCertificationsAgroVentures() {
    const agroventuresEnhancements = [
        { icon: Shield, title: "Enhanced Quality Assurance Protocols", description: "Rigorous multi-stage verification systems" },
        { icon: Network, title: "Digitally Integrated Traceability Systems", description: "Real-time tracking from farm to export" },
        { icon: TrendingUp, title: "Continuous Improvement Methodologies", description: "Data-driven performance optimization" },
        { icon: Award, title: "Modern Processing Technologies", description: "State-of-the-art facilities and equipment" }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Strategic Integration</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Enhanced by <span className="text-brand-secondary">Agroventures</span>
                        </h2>
                    </div>

                    {/* Main Statement */}
                    <div className="bg-brand-light/30 rounded-3xl p-8 lg:p-12 mb-12 border border-brand-light">
                        <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed mb-6">
                            The integration with Agroventures Group represents a decisive evolution in Bio Foods' operational
                            excellence—introducing a level of structure, precision, and scalability that elevates every aspect
                            of our value chain.
                        </p>
                        <p className="text-base lg:text-lg text-brand-dark/70 leading-relaxed">
                            Through this strategic alignment, our quality and certification frameworks are no longer maintained
                            solely as compliance measures, but as part of a holistic, system-driven approach to excellence.
                            Agroventures brings with it advanced governance models, standardized operating procedures, and
                            continuous performance monitoring mechanisms that ensure consistency across all stages of production.
                        </p>
                    </div>

                    {/* Touchpoint Statement */}
                    <div className="mb-12">
                        <p className="text-lg text-brand-dark/70 leading-relaxed text-center max-w-4xl mx-auto">
                            From cultivation and harvesting to processing and export, each touchpoint is supported by:
                        </p>
                    </div>

                    {/* Enhancements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {agroventuresEnhancements.map((enhancement, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-300">
                                            <enhancement.icon className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-dark mb-2">{enhancement.title}</h3>
                                        <p className="text-sm text-brand-dark/60 leading-relaxed">{enhancement.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="text-center">
                        <div className="inline-block bg-white border border-brand-light rounded-2xl px-8 py-6 shadow-sm">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed max-w-4xl">
                                This enables Bio Foods to deliver products that meet the most stringent international standards—
                                <span className="font-bold text-brand-primary"> not occasionally, but consistently and at scale</span>.
                            </p>
                        </div>
                    </div>

                    {/* Final Statement */}
                    <div className="mt-12 text-center">
                        <p className="text-xl lg:text-2xl font-bold text-brand-dark/90 italic max-w-3xl mx-auto">
                            In essence, Agroventures transforms quality from a promise into a{' '}
                            <span className="text-brand-secondary">measurable, repeatable, and globally benchmarked outcome</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityCertificationsAgroVentures
