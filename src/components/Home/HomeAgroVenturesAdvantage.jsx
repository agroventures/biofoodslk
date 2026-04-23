import React from 'react';
import { GitMerge, Factory, Globe, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

function HomeAgroVenturesAdvantage() {
    const advantages = [
        {
            icon: GitMerge,
            title: "Integrated Supply Chain Systems",
            description: "Ensuring consistent, high-volume production"
        },
        {
            icon: Factory,
            title: "Advanced Processing Facilities",
            description: "Maintaining purity, hygiene, and product integrity"
        },
        {
            icon: Globe,
            title: "International Trade Networks",
            description: "Enabling seamless export to key global markets"
        },
        {
            icon: TrendingUp,
            title: "Strategic Growth Vision",
            description: "Driven by sustainability and long-term value creation"
        }
    ];

    return (
        <section className="relative w-full py-20 lg:py-24 bg-brand-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight mb-6">
                        The Agroventures <span className="text-brand-primary">Advantage</span>
                    </h2>

                    <p className="text-lg text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                        The strength of Agroventures Group transforms Bio Foods into a globally competitive agribusiness entity.
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                <advantage.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-brand-dark mb-2 leading-tight">
                                {advantage.title}
                            </h3>
                            <p className="text-sm text-brand-dark/60 leading-relaxed">
                                {advantage.description}
                            </p>

                            {/* Hover Arrow */}
                            {/* <div className="mt-6 flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2.5 group-hover:translate-x-0">
                                <span className="text-xs font-bold uppercase tracking-wider">Learn More</span>
                                <ArrowRight className="w-4 h-4" />
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-white shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 shrink-0" />
                        <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed font-medium">
                            This combination allows Bio Foods to offer both artisanal authenticity and industrial reliability — 
                            a rare balance in today's global organic sector.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAgroVenturesAdvantage;