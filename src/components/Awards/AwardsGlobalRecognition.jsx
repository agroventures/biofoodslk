import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import awardsData from "../../data/awards";

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
    return (
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 group/slider">
            <img
                src={images[current]}
                alt={`Award image ${current + 1}`}
                className="w-full h-full object-contain transition-opacity duration-300"
            />
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-all duration-200"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-all duration-200"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

const AwardsGlobalRecognition = () => (
    <section className="w-full bg-neutral-50 border-t border-neutral-200/60 antialiased">

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-7">
                    <p className="text-md uppercase tracking-[0.4em] text-brand-gold font-semibold mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-brand-gold/50 inline-block"></span>
                        Global Recognition
                    </p>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.05]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Recognized for <br />
                        <span className="italic text-brand-primary">excellence</span> worldwide.
                    </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-14">
                    <p className="text-neutral-600 text-lg leading-relaxed font-light">
                        Over the years, Bio Foods has earned recognition from respected
                        international organizations for its commitment to organic
                        excellence, ethical trade, and sustainable business practices.
                    </p>
                </div>
            </div>
        </div>

        {/* ACHIEVEMENT CARDS GRID */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32">
            <div className="border-b border-neutral-200 pb-6 mb-12">
                <p className="text-md uppercase font-semibold text-black">
                    International Achievements
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {awardsData.map(({ icon: Icon, number, title, org, description, images }) => (
                    <div
                        key={number}
                        className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                    >
                        <div>
                            {/* Card Header: Slider if images exist, else Number & Icon */}
                            {images ? (
                                <ImageSlider images={images} />
                            ) : (
                                <div className="flex items-center justify-between border-b border-neutral-100 pb-5 mb-6">
                                    <span
                                        className="text-4xl text-neutral-300 group-hover:text-brand-gold transition-colors duration-300 font-light tabular-nums"
                                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                                    >
                                        {number}
                                    </span>
                                    <div className="p-2.5 rounded-xl bg-brand-primary group-hover:bg-brand-light transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-brand-light group-hover:text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>
                            )}

                            {/* Award Title & Org */}
                            <h3
                                className="text-2xl tracking-tight text-neutral-900 font-medium mb-2 group-hover:text-brand-primary transition-colors duration-300"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {title}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-gold mb-4">
                                {org}
                            </p>
                            <p className="text-neutral-500 text-sm leading-relaxed font-light">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* VALUES FEATURE BLOCK */}
        <div className="bg-white border-y border-neutral-200/60">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 border-l-2 border-brand-gold pl-6 lg:pl-8">
                    <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-primary mb-4">
                        A Trusted Reputation
                    </p>
                    <h3
                        className="text-4xl lg:text-5xl tracking-tight text-neutral-900 font-light"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Awards that reflect <br />
                        <span className="italic font-normal text-brand-gold">our core values.</span>
                    </h3>
                </div>
                <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 lg:gap-12">
                    <p className="text-neutral-600 leading-relaxed font-light text-[14px] lg:text-[15px]">
                        Every recognition received by Bio Foods represents more than
                        an achievement. It reflects our commitment to ethical
                        sourcing, environmental responsibility, and the well-being
                        of farming communities across our network.
                    </p>
                    <p className="text-neutral-600 leading-relaxed font-light text-[14px] lg:text-[15px]">
                        These awards strengthen our position as a trusted global
                        supplier while reaffirming the values that have guided our
                        growth from the very beginning.
                    </p>
                </div>
            </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="bg-brand-primary text-white rounded-3xl p-8 md:p-12 lg:p-20 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
                
                <div className="lg:col-span-7 relative z-10">
                    <p className="text-xs uppercase tracking-[0.4em] text-brand-gold font-semibold mb-6">
                        Continuing the Journey
                    </p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Inspired by achievement, <br />
                        <span className="italic text-brand-gold">driven by purpose.</span>
                    </h2>
                </div>
                
                <div className="lg:col-span-5 relative z-10 lg:pl-6 flex flex-col items-start">
                    <p className="text-white/80 font-light leading-relaxed mb-8 text-[15px]">
                        As we continue to grow, these recognitions motivate us to uphold
                        the highest standards of quality, sustainability, and innovation
                        while creating lasting value for customers, communities, and
                        future generations.
                    </p>
                    <a
                        href="/about"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white border border-white/20 bg-white/5 px-6 py-3.5 rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300 group"
                    >
                        Our Story 
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>

    </section>
);

export default AwardsGlobalRecognition;