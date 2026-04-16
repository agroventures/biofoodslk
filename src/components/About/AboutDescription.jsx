import React from 'react';
import { Award, ShieldCheck, Leaf, Users, Globe, Recycle } from 'lucide-react';

function AboutDescription() {
    return (
        <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                        <Leaf className="w-5 h-5" />
                        <span className="font-bold tracking-[0.2em] uppercase text-xs">Our Heritage</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
                        The <span className="text-brand-primary">#OrganicWay</span> <br /> 
                        Since 1993.
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Established as a family-owned business in Kandy, Bio Foods has grown into a global leader in biodynamic, organic, and fair-trade agriculture. We believe in produce exactly as nature intended-clean, uncontaminated, and ethical.
                    </p>
                </div>

                {/* Achievement Highlight - The "World's Fairest" Card */}
                <div className="relative bg-brand-primary rounded-[3rem] p-8 lg:p-16 overflow-hidden mb-24 shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Award className="w-64 h-64 text-white" />
                    </div>
                    <div className="relative z-10 lg:flex items-center gap-12">
                        <div className="mb-8 lg:mb-0">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                <Award className="w-10 h-10 text-brand-accent" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                                "World’s Fairest Fairtrader"
                            </h3>
                            <p className="text-white/80 mt-4 text-lg max-w-xl">
                                Awarded to our founder, Dr. Sarath Ranaweera, by the World Fairtrade Labelling Organization (FLO) in 2014-a testament to our unwavering ethical standing.
                            </p>
                        </div>
                        <div className="hidden lg:block h-32 w-px bg-white/20" />
                        <div className="flex flex-col gap-2">
                            <span className="text-brand-accent font-black text-5xl">25+</span>
                            <span className="text-white/60 font-bold uppercase tracking-widest text-sm">Years of Excellence</span>
                        </div>
                    </div>
                </div>

                {/* Secondary Content - The Operations */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black text-gray-900 tracking-tight">Full-Spectrum Responsibility</h3>
                        <p className="text-gray-600 leading-relaxed">
                            From the initial harvest to final consumer packaging, we take pride in the transparency of our entire production line. By organizing certified organic farmers into collaborative groups, we ensure every product-be it tea, spices, or coconut-is traceable back to the very soil it grew in.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We aren't just exporters; we are processors and packagers. This allows us to guarantee a minimum farm-gate price, protecting our farmers from middle-man exploitation and market fluctuations.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: <ShieldCheck />, title: "Traceability", desc: "Transparent documentation for every harvest." },
                            { icon: <Users />, title: "MOPA", desc: "Awarded Best Small Organic Farmer Group in Asia." },
                            { icon: <Globe />, title: "Global Reach", desc: "Exporting to Japan, Europe, and North America." },
                            { icon: <Recycle />, title: "Bio-Dynamic", desc: "Even our fertilizers are certified organic." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-brand-light rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-brand-primary mb-4">{React.cloneElement(item.icon, { size: 28 })}</div>
                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Philosophy */}
                <div className="text-center bg-gray-50 py-16 rounded-[4rem] border border-gray-100">
                    <h4 className="text-brand-secondary font-black text-2xl mb-4 italic">#OrganicWay</h4>
                    <p className="max-w-2xl mx-auto text-gray-700 px-6">
                        "We believe that the organic way of life is for everyone, no matter where they are from. It is our initiative to give back to the people of the land that we harvest our wonderful produce from."
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutDescription;