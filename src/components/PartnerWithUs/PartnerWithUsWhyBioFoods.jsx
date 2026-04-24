import { Award, CheckCircle2, Shield, TrendingUp } from 'lucide-react';
import React from 'react'

function PartnerWithUsWhyBioFoods() {
    const whyBioFoods = [
        {
            icon: Award,
            title: "Over 30 Years of Expertise",
            description: "Three decades of organic farming excellence and innovation"
        },
        {
            icon: Shield,
            title: "Certified Organic & Fair-Trade",
            description: "Internationally recognized certifications and standards"
        },
        {
            icon: TrendingUp,
            title: "Backed by Agroventures Group",
            description: "Enhanced capabilities and global infrastructure"
        },
        {
            icon: CheckCircle2,
            title: "Reliable, Scalable Supply",
            description: "Consistent quality and volume to meet growing demand"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                            Why <span className="text-brand-primary">Bio Foods</span>
                        </h2>
                        <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                            Partner with a leader in organic agriculture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {whyBioFoods.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                    <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-brand-dark mb-3 leading-tight">{item.title}</h3>
                                <p className="text-sm text-brand-dark/60 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerWithUsWhyBioFoods
