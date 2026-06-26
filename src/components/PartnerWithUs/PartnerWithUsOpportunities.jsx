import { ArrowRight, CheckCircle2, Globe, Package, Sparkles, Target } from 'lucide-react';
import React from 'react'

function PartnerWithUsOpportunities() {
    const opportunities = [
        {
            icon: Globe,
            title: "Import and Distribution",
            description: "Become our trusted partner in your regional market",
            benefits: [
                "Exclusive territory rights",
                "Marketing support",
                "Product training",
                "Competitive pricing"
            ]
        },
        {
            icon: Package,
            title: "Private Labeling",
            description: "Launch your own organic brand with our expertise",
            benefits: [
                "Custom packaging solutions",
                "Product development support",
                "Quality assurance",
                "Flexible MOQ options"
            ]
        },
        {
            icon: Target,
            title: "Bulk Supply Agreements",
            description: "Secure long-term supply for your operations",
            benefits: [
                "Volume-based pricing",
                "Consistent availability",
                "Technical specifications",
                "Dedicated account management"
            ]
        }
    ];

    return (
        <section id="opportunities" className="w-full py-20 lg:py-28 bg-brand-light/30 border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Partnership Models</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Partnership <span className="text-brand-secondary">Opportunities</span>
                        </h2>
                        <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                            Choose the model that fits your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {opportunities.map((opportunity, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl overflow-hidden hover:border-brand-secondary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Header */}
                                <div className="bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 p-8 border-b border-brand-light">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <opportunity.icon className="w-7 h-7 text-brand-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-3">{opportunity.title}</h3>
                                    <p className="text-sm text-brand-dark/70 leading-relaxed">{opportunity.description}</p>
                                </div>

                                {/* Benefits */}
                                <div className="p-8">
                                    <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-wider mb-4">
                                        Key Benefits
                                    </p>
                                    <ul className="space-y-3">
                                        {opportunity.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-brand-dark/80">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerWithUsOpportunities
