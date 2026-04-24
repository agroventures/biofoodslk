import React from 'react';
import { Leaf, Heart, ShieldCheck, Quote, Sparkles } from 'lucide-react';

function AboutFoundingVision() {
    const principles = [
        {
            icon: Leaf,
            title: "Protect and Regenerate",
            description: "Natural ecosystems preserved through responsible farming"
        },
        {
            icon: Heart,
            title: "Provide Fair Livelihoods",
            description: "Stable, dignified income for farming communities"
        },
        {
            icon: ShieldCheck,
            title: "Deliver Pure Food",
            description: "100% chemical-free produce for consumers"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Leadership</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
                        The Founding <span className="text-brand-primary">Vision</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Quote / Intro Block */}
                    <div className="relative bg-brand-light/30 rounded-3xl p-8 lg:p-12 mb-12 border border-brand-light">
                        <div className="absolute -top-6 left-8 lg:left-12 w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="w-6 h-6 text-white" />
                        </div>
                        
                        <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed pt-4">
                            At the heart of Bio Foods lies the vision of <span className="font-bold text-brand-primary">Dr. Sarath Ranaweera</span>, whose philosophy redefined the role of agriculture in society.
                        </p>
                        
                        <p className="text-base lg:text-lg text-brand-dark/70 leading-relaxed mt-4">
                            He believed that farming must:
                        </p>
                    </div>

                    {/* Three Principles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                    <principle.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-brand-dark mb-3 leading-snug">
                                    {principle.title}
                                </h3>
                                
                                <p className="text-sm text-brand-dark/60 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="text-center">
                        <div className="inline-block bg-white border border-brand-light rounded-2xl px-8 py-6 shadow-sm">
                            <p className="text-lg text-brand-dark/80 font-medium italic">
                                This philosophy remains deeply embedded in every aspect of Bio Foods today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutFoundingVision;