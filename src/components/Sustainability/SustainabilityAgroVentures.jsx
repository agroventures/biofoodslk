import { Award, Droplet, FileCheck, Globe, Heart, Leaf, Shield, Sparkles, Sprout, TrendingUp, Users } from 'lucide-react';
import React from 'react'

function SustainabilityAgroVentures() {
    const environmentalStrategies = [
        { icon: Sprout, title: "Regenerative Agriculture", description: "Long-term soil health and ecosystem vitality" },
        { icon: Droplet, title: "Water Resource Management", description: "Efficient irrigation and conservation practices" },
        { icon: Leaf, title: "Biodiversity Preservation", description: "Protecting diverse farming ecosystems" },
        { icon: TrendingUp, title: "Environmental Footprint Reduction", description: "Optimized processes minimizing impact" }
    ];

    const socialResponsibility = [
        { icon: Users, title: "Farmer Support Programs", description: "Formalized assistance and development initiatives" },
        { icon: Globe, title: "Community Development", description: "Infrastructure and social program investments" },
        { icon: Award, title: "Capacity Building", description: "Knowledge transfer and skills development" },
        { icon: Heart, title: "Economic Participation", description: "Inclusive opportunities across rural networks" }
    ];

    const governance = [
        { icon: FileCheck, title: "Standardized Operational Policies", description: "Consistent frameworks across all operations" },
        { icon: Shield, title: "International Compliance", description: "Alignment with global standards and regulations" },
        { icon: TrendingUp, title: "Monitoring & Reporting", description: "Continuous performance tracking systems" },
        { icon: Award, title: "Sustainability Benchmarking", description: "Long-term goals and progress measurement" }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Structured Excellence</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Agroventures <span className="text-brand-secondary">ESG Framework</span>
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Opening Statement */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed mb-6">
                                Sustainability within Bio Foods is deeply rooted in its origins - but through Agroventures Group,
                                it is elevated into a{' '}
                                <span className="font-bold text-brand-secondary">structured, measurable, and future-focused ESG</span>{' '}
                                (Environmental, Social, and Governance) framework.
                            </p>
                            <p className="text-base lg:text-lg text-brand-dark/70 leading-relaxed">
                                This framework ensures that sustainability is not approached as a standalone initiative, but as
                                an integrated system embedded across all operations.
                            </p>
                        </div>

                        {/* Environmental Stewardship */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center">
                                    <Leaf className="w-6 h-6 text-brand-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-dark">Environmental Stewardship</h3>
                            </div>

                            <p className="text-base text-brand-dark/70 mb-6">
                                Agroventures implements scalable environmental strategies that focus on:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {environmentalStrategies.map((strategy, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-brand-light/30 rounded-xl p-4 border border-brand-light"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center">
                                                <strategy.icon className="w-5 h-5 text-brand-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-brand-dark mb-1">{strategy.title}</h4>
                                            <p className="text-xs text-brand-dark/60">{strategy.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Responsibility Enhanced */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center">
                                    <Users className="w-6 h-6 text-brand-secondary" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-dark">Social Responsibility</h3>
                            </div>

                            <p className="text-base text-brand-dark/70 mb-6">
                                The Group strengthens Bio Foods' longstanding fair-trade principles through:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {socialResponsibility.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-brand-light/30 rounded-xl p-4 border border-brand-light"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 bg-brand-secondary/5 rounded-lg flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-brand-secondary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-brand-dark mb-1">{item.title}</h4>
                                            <p className="text-xs text-brand-dark/60">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Governance & Accountability */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-brand-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-dark">Governance & Accountability</h3>
                            </div>

                            <p className="text-base text-brand-dark/70 mb-6">
                                At the core of the ESG framework lies a commitment to transparency, compliance, and ethical governance:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {governance.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-brand-light/30 rounded-xl p-4 border border-brand-light"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-brand-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-brand-dark mb-1">{item.title}</h4>
                                            <p className="text-xs text-brand-dark/60">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Statement */}
                        <div className="relative bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-10 lg:p-16 border border-brand-primary/10 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="relative text-center">
                                <p className="text-xl lg:text-2xl font-bold text-brand-dark/90 leading-relaxed">
                                    Through this structured ESG approach, Agroventures ensures that sustainability is{' '}
                                    <span className="text-brand-primary">not only upheld but continuously improved</span>,
                                    measured, and{' '}
                                    <span className="text-brand-secondary">aligned with global expectations</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SustainabilityAgroVentures
