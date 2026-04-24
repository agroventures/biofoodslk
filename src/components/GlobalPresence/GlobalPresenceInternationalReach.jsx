import { Award, Globe, MapPin, Package, ShoppingBag } from 'lucide-react';
import React from 'react'

function GlobalPresenceInternationalReach() {
    const markets = [
        { region: "Europe", icon: Globe, countries: "EU Nations, UK, Switzerland" },
        { region: "North America", icon: MapPin, countries: "USA, Canada" },
        { region: "Asia", icon: Globe, countries: "Japan, Singapore, UAE" }
    ];

    const marketPosition = [
        {
            icon: ShoppingBag,
            title: "Premium Organic Retailers",
            description: "Serving specialty organic supermarkets worldwide"
        },
        {
            icon: Award,
            title: "Gourmet Brands",
            description: "Partnering with prestigious culinary brands"
        },
        {
            icon: Package,
            title: "Private Label Manufacturers",
            description: "White-label solutions for major distributors"
        }
    ];

    return (
        <>
            <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                                International Reach
                            </h2>
                            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
                                Bio Foods exports to key global markets including:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                            {markets.map((market, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 text-center hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                        <market.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-dark mb-3">{market.region}</h3>
                                    <p className="text-sm text-brand-dark/60">{market.countries}</p>
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
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                                Market Position
                            </h2>
                            <p className="text-lg text-brand-dark/70">A trusted supplier for:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {marketPosition.map((position, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-8 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 bg-brand-secondary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-secondary transition-colors duration-300">
                                        <position.icon className="w-7 h-7 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">{position.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">{position.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GlobalPresenceInternationalReach
