import { CheckCircle2, Globe, Network, TrendingUp, Truck } from 'lucide-react';
import React from 'react'

function GlobalPresenceAgroVentures() {
    const agroventuresEnhancements = [
        {
            icon: Network,
            title: "Established Trade Partnerships",
            description: "Across Europe, North America, and Asia"
        },
        {
            icon: Truck,
            title: "Streamlined Logistics",
            description: "Export management systems for efficiency"
        },
        {
            icon: TrendingUp,
            title: "Scalable Infrastructure",
            description: "Capable of meeting large-volume demand"
        },
        {
            icon: Globe,
            title: "Market Intelligence",
            description: "Strategic expansion initiatives"
        }
    ];

    const partnerBenefits = [
        { icon: CheckCircle2, text: "Consistent product availability" },
        { icon: CheckCircle2, text: "Reliable delivery timelines" },
        { icon: CheckCircle2, text: "Confidence in long-term supply agreements" },
        { icon: CheckCircle2, text: "Access to a professionally managed agribusiness network" }
    ];

    return (
        <section className="w-full py-20 lg:py-28 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-secondary/5 text-brand-secondary px-5 py-2.5 rounded-full mb-6 border border-brand-secondary/10">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-bold tracking-[0.15em] uppercase text-xs">Enhanced Capabilities</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-brand-dark tracking-tight mb-6">
                            Powered by <span className="text-brand-secondary">Agroventures</span>
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Opening Statement */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed mb-6">
                                The global presence of Bio Foods is significantly strengthened by the expansive capabilities
                                of Agroventures Group.
                            </p>
                            <p className="text-base lg:text-lg text-brand-dark/70 leading-relaxed">
                                What was once a strong export operation has now evolved into a{' '}
                                <span className="font-bold text-brand-secondary">globally connected supply and distribution network</span>,
                                enabling Bio Foods to serve international markets with greater efficiency, reliability, and responsiveness.
                            </p>
                        </div>

                        {/* Enhancements Section */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">
                                Agroventures enhances global reach through:
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                {agroventuresEnhancements.map((enhancement, index) => (
                                    <div
                                        key={index}
                                        className="group bg-brand-light/30 rounded-2xl p-6 border border-brand-light hover:border-brand-secondary/20 transition-all duration-300"
                                    >
                                        <div className="flex gap-4">
                                            <div className="shrink-0">
                                                <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-300">
                                                    <enhancement.icon className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-brand-dark mb-2 leading-tight">
                                                    {enhancement.title}
                                                </h4>
                                                <p className="text-sm text-brand-dark/60 leading-relaxed">
                                                    {enhancement.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Integration Impact */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm text-center">
                            <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed">
                                This integration ensures that Bio Foods is{' '}
                                <span className="font-bold text-brand-primary">not only present in global markets but positioned competitively</span>{' '}
                                within them.
                            </p>
                        </div>

                        {/* Partner Benefits */}
                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">
                                For international partners, this translates into:
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                {partnerBenefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-brand-light/30 rounded-xl p-4 border border-brand-light"
                                    >
                                        <benefit.icon className="w-5 h-5 text-brand-primary shrink-0" />
                                        <span className="text-base text-brand-dark/80 font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Statement */}
                        <div className="relative bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-10 lg:p-16 border border-brand-primary/10 overflow-hidden">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="relative text-center">
                                <p className="text-xl lg:text-2xl xl:text-3xl font-black text-brand-dark leading-tight">
                                    Ultimately, being powered by Agroventures means that Bio Foods combines{' '}
                                    <span className="text-brand-primary">the authenticity of origin</span> with{' '}
                                    <span className="text-brand-secondary">the strength of a global enterprise</span>-
                                    delivering products that are as{' '}
                                    <span className="text-brand-primary">dependable</span> as they are{' '}
                                    <span className="text-brand-secondary">exceptional</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalPresenceAgroVentures
