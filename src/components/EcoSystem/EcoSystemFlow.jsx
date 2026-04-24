import { Award, CheckCircle2, Globe, Heart, Leaf, Network, Package, Shield, TrendingUp, Users } from 'lucide-react'
import React from 'react'

function EcoSystemFlow() {
    const modelGuarantees = [
        {
            icon: CheckCircle2,
            title: "Consistent Product Quality",
            description: "Rigorous standards maintained throughout the value chain"
        },
        {
            icon: Network,
            title: "Full Traceability",
            description: "Complete transparency from farm to final product"
        },
        {
            icon: TrendingUp,
            title: "Efficient Supply Chain",
            description: "Streamlined operations ensuring timely delivery"
        }
    ];

    const farmerSupport = [
        {
            icon: Heart,
            title: "Fair and Transparent Pricing",
            description: "Guaranteed minimum prices protecting farmer incomes"
        },
        {
            icon: Award,
            title: "Training and Knowledge",
            description: "Access to modern agricultural practices and expertise"
        },
        {
            icon: Shield,
            title: "Long-Term Economic Stability",
            description: "Secure partnerships ensuring sustainable livelihoods"
        }
    ];

    return (
        <>
            <section className="w-full py-20 lg:py-24 bg-brand-light/30 border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-light shadow-sm">
                            <h3 className="text-2xl font-black text-brand-dark text-center mb-12">
                                Integrated Value Chain
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Farming */}
                                <div className="relative">
                                    <div className="bg-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10 text-center">
                                        <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Leaf className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Farming</h4>
                                        <p className="text-sm text-brand-dark/60">Organic cultivation by certified farmers</p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-brand-primary border-b-4 border-b-transparent"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Processing */}
                                <div className="relative">
                                    <div className="bg-brand-secondary/5 rounded-2xl p-8 border border-brand-secondary/10 text-center">
                                        <div className="w-14 h-14 bg-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Package className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Processing</h4>
                                        <p className="text-sm text-brand-dark/60">Modern facilities maintaining purity</p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <div className="w-6 h-6 bg-brand-secondary/20 rounded-full flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-brand-secondary border-b-4 border-b-transparent"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Export */}
                                <div>
                                    <div className="bg-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10 text-center">
                                        <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Globe className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Export</h4>
                                        <p className="text-sm text-brand-dark/60">Global distribution network</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Farmer Partnerships */}
            <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 lg:mb-16">
                            <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-7 h-7 text-brand-primary" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                                Farmer Partnerships
                            </h2>
                            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                                Our network of farmers is the foundation of our success.
                            </p>
                        </div>

                        <div className="bg-white border border-brand-light rounded-3xl p-8 lg:p-12 mb-12 shadow-sm">
                            <p className="text-lg text-brand-dark/80 text-center mb-10">
                                We work closely with them to ensure:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {farmerSupport.map((support, index) => (
                                    <div
                                        key={index}
                                        className="group bg-brand-light/30 rounded-2xl p-6 border border-brand-light hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                                            <support.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="text-lg font-bold text-brand-dark mb-2">{support.title}</h4>
                                        <p className="text-sm text-brand-dark/60 leading-relaxed">{support.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EcoSystemFlow
