import React from 'react';
import { Building2, Factory, Ship, Network, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { companies } from '../../data/companies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function AboutAgroVentures() {
    const expertise = [
        {
            icon: Building2,
            title: "Plantation Development",
            description: "Development and management"
        },
        {
            icon: Factory,
            title: "Advanced Processing",
            description: "Food processing and manufacturing"
        },
        {
            icon: Ship,
            title: "Global Trade",
            description: "Export logistics and international trade"
        }
    ];

    const benefits = [
        {
            icon: Network,
            title: "Large-Scale Infrastructure",
            description: "Operational infrastructure at scale"
        },
        {
            icon: TrendingUp,
            title: "Investment-Backed Growth",
            description: "Expansion opportunities backed by investment"
        },
        {
            icon: Globe,
            title: "Enhanced Market Reach",
            description: "Global market access and distribution"
        }
    ];

    return (
        <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Parent Company</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
                        Agroventures <span className="text-brand-primary">Group</span>
                    </h2>
                </div>

                {/* Main Description */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed">
                        Agroventures Group is a diversified agribusiness conglomerate operating across the full
                        agricultural value chain.
                    </p>
                </div>

                {/* Areas of Expertise */}
                <div className="mb-16">
                    <h3 className="text-2xl font-black text-brand-dark text-center mb-8">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
                            >
                                <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-primary transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h4>
                                <p className="text-sm text-brand-dark/60">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos Placeholder */}
                <div className="bg-brand-light/50 rounded-2xl lg:rounded-3xl p-10 lg:p-16 mb-16 text-center border border-brand-light">
                    <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest mb-4">
                        Agroventures Group of Companies
                    </p>
                    <div className="w-full py-10">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2} // Default for mobile
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                // Responsive breakpoints
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 6 },
                            }}
                            className="flex items-center"
                        >
                            {companies.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Partnership Benefits */}
                <div>
                    <h3 className="text-2xl font-black text-brand-dark text-center mb-8">Through This Partnership, Bio Foods Gains Access To</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-brand-secondary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-secondary transition-colors duration-300">
                                    <item.icon className="w-7 h-7 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h4>
                                <p className="text-sm text-brand-dark/60">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAgroVentures;