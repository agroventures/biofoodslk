import React from 'react';
import { Leaf, Handshake, ScanLine, Gauge, Sparkles } from 'lucide-react';

function HomeCorePrinciples() {
    const principles = [
        {
            icon: Leaf,
            title: "Organic & Biodynamic Integrity",
            color: "bg-brand-primary/5 text-brand-primary border-brand-primary/10"
        },
        {
            icon: Handshake,
            title: "Ethical Fair-Trade Engagement",
            color: "bg-brand-secondary/5 text-brand-secondary border-brand-secondary/10"
        },
        {
            icon: ScanLine,
            title: "End-to-End Traceability",
            color: "bg-brand-primary/5 text-brand-primary border-brand-primary/10"
        },
        {
            icon: Gauge,
            title: "Precision Quality Management",
            color: "bg-brand-secondary/5 text-brand-secondary border-brand-secondary/10"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-24 bg-brand-light border-t border-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">What We Stand For</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
                        Our Core <span className="text-brand-primary">Principles</span>
                    </h2>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${principle.color} group-hover:scale-110 transition-transform duration-300`}>
                                <principle.icon className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-brand-dark leading-snug">
                                {principle.title}
                            </h3>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-brand-primary/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeCorePrinciples;