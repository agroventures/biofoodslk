import { Globe, Heart, Leaf, Shield, Sprout, Users } from 'lucide-react'
import React from 'react'

function SustainabilityEnvironmentalResponsibility() {
    const environmental = [
        { icon: Sprout, title: "Soil Regeneration", description: "Rebuilding soil health through natural processes" },
        { icon: Leaf, title: "Biodiversity Conservation", description: "Protecting and enhancing natural ecosystems" },
        { icon: Shield, title: "Chemical-Free Farming", description: "100% organic practices without synthetic inputs" }
    ];

    const social = [
        { icon: Heart, title: "Fair Trade Partnerships", description: "Ethical sourcing and equitable value distribution" },
        { icon: Users, title: "Farmer Empowerment", description: "Training, resources, and sustainable livelihoods" },
        { icon: Globe, title: "Community Development", description: "Supporting local communities and infrastructure" }
    ];

    return (
        <>
            <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
                            <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Leaf className="w-7 h-7 text-brand-primary" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark">
                                Environmental Responsibility
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {environmental.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 lg:py-24 bg-brand-light/30 border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="w-14 h-14 bg-brand-secondary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-7 h-7 text-brand-secondary" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark">
                                Social Responsibility
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {social.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 bg-brand-secondary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-secondary transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SustainabilityEnvironmentalResponsibility
