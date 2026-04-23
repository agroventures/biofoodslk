import React from 'react';
import { Sparkles, Leaf, TrendingUp, Globe2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeBrandNarrative() {
    const principles = [
        { icon: Leaf, title: "Soil Vitality", description: "Nurturing the foundation of life" },
        { icon: Globe2, title: "Ecological Balance", description: "Harmony with nature's rhythms" },
        { icon: Award, title: "Human Well-being", description: "Quality that enriches lives" }
    ];

    return (
        <section className="relative w-full py-20 lg:py-28 overflow-hidden">

            {/* Decorative Blurs using brand colors */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 right-10 w-96 h-96 bg-brand-secondary/30 rounded-full blur-3xl' />
                <div className='absolute bottom-20 left-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl' />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-primary backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/20">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Philosophy</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
                            Brand Narrative
                        </h2>

                        {/* Description */}
                        <div className="space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
                            <p>
                                Bio Foods represents more than a producer of organic ingredients — it embodies a philosophy
                                shaped by time, nature, and responsibility.
                            </p>
                            <p>
                                For over three decades, we have cultivated crops in harmony with the land, guided by principles
                                that prioritize soil vitality, ecological balance, and human well-being. Each harvest reflects a
                                careful process rooted in tradition, refined through experience, and aligned with the
                                expectations of global markets.
                            </p>
                            <p>
                                Today, as part of Agroventures Group, Bio Foods enters a new era of excellence. This integration
                                enhances our ability to scale responsibly, maintain consistency, and deliver premium-quality
                                products across international markets without compromising the integrity of our origins.
                            </p>
                        </div>

                        {/* CTA */}
                        <Link to='/about'>
                            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-secondary cursor-pointer transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group shadow-lg hover:shadow-brand-accent/30">
                            Discover Our Story
                            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                {/* Right Content - Principles Cards */}
                <div className="space-y-4">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="group bg-brand-secondary/40 backdrop-blur-md border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-white/10 hover:border-brand-primary transition-all duration-500 hover:-translate-x-2"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                                    <principle.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h4>
                                    <p className="text-gray-600">{principle.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Agroventures Badge */}
                    <div className="bg-brand-secondary/20 backdrop-blur-md border border-brand-accent/30 rounded-2xl lg:rounded-3xl p-6 lg:p-8 mt-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-brand-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">Part of Agroventures Group</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            A new era of excellence, scaling responsibly while maintaining the integrity of our organic origins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section >
    );
}

export default HomeBrandNarrative;