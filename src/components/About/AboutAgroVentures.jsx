import React from 'react';
import { Building2, Factory, Ship, Network, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { companies } from '../../data/companies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Editorial Header Structure ── */}
                <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-950">
                            <Sparkles className="w-4 h-4 stroke-[1.5]" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Parent Conglomerate</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                            Agroventures Group
                        </h2>
                    </div>
                </div>

                {/* ── Headline Narrative Payload ── */}
                <div className="max-w-4xl mb-24">
                    <p className="text-xl sm:text-2xl font-bold text-neutral-900 leading-relaxed uppercase tracking-tight">
                        Agroventures Group operates as a diversified agribusiness conglomerate, engineering strategic infrastructure across the entirety of the agricultural value chain spectrum.
                    </p>
                </div>

                {/* ── Asymmetric Structural Sections ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Grid: Core Capability Clusters */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="space-y-4">
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 block">CORE CAPABILITIES</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-neutral-950">Areas of Expertise</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {expertise.map((item, index) => (
                                <div key={index} className="border border-neutral-200 p-6 bg-white flex items-start gap-6 hover:border-neutral-950 transition-colors duration-300">
                                    <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 shrink-0">
                                        <item.icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-mono text-[10px] text-neutral-400">[EXP_0{index + 1}]</span>
                                            <h4 className="font-black uppercase tracking-tight text-neutral-950">{item.title}</h4>
                                        </div>
                                        <p className="text-xs text-neutral-500 font-medium">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Grid: Structural Integration Loop */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="space-y-4">
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 block">INTEGRATION BENEFITS</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-neutral-950">Strategic Asset Access</h3>
                        </div>

                        <div className="space-y-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="border border-neutral-200 p-6 bg-white flex items-start gap-6 hover:border-neutral-950 transition-colors duration-300">
                                    <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 shrink-0">
                                        <item.icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-mono text-[10px] text-neutral-400">[NET_0{index + 1}]</span>
                                            <h4 className="font-black uppercase tracking-tight text-neutral-950">{item.title}</h4>
                                        </div>
                                        <p className="text-xs text-neutral-500 font-medium">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Corporate Assembly Registry Carousel ── */}
                <div className="mt-24 pt-12 border-t border-neutral-950">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                            AGROVENTURES SUBSIDIARY ALLIANCE MATRIX
                        </span>
                    </div>

                    <div className="border border-neutral-200 bg-neutral-50 p-4">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={16}
                            slidesPerView={2}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 6 },
                            }}
                            className="flex items-center"
                        >
                            {companies.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="w-full h-16 bg-white border border-neutral-200 flex items-center justify-center">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-3 filter contrast-105 opacity-90"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutAgroVentures;