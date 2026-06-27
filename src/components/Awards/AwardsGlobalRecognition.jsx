import React from "react";
import { Trophy, Award, Globe, ArrowRight } from "lucide-react";
import awardsData from "../../data/awards";

const AwardsGlobalRecognition = () => (
    <section className="w-full bg-white border-t border-neutral-100">

        {/* DARK HEADER BAND */}
        <div className="bg-brand-primary text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-end">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-6">
                        Global Recognition
                    </p>
                    <h2
                        className="text-5xl lg:text-7xl tracking-tight leading-none"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Recognized for
                        <br />
                        excellence worldwide.
                    </h2>
                </div>
                <p className="text-white/70 text-lg leading-8 lg:max-w-md lg:ml-auto">
                    Over the years, Bio Foods has earned recognition from respected
                    international organizations for its commitment to organic
                    excellence, ethical trade, and sustainable business practices.
                </p>
            </div>
        </div>

        {/* ACHIEVEMENT ROWS */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-primary mb-16">
                International Achievements
            </p>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {awardsData.map(({ icon: Icon, number, title, org, description }) => (
                    <div
                        key={number}
                        className="grid lg:grid-cols-12 gap-6 lg:gap-16 py-12 items-start group"
                    >
                        {/* Number + Icon */}
                        <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                            <span
                                className="text-4xl text-neutral-200 leading-none select-none"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {number}
                            </span>
                            <Icon className="w-4 h-4 text-brand-primary" />
                        </div>

                        {/* Title + Org */}
                        <div className="lg:col-span-5">
                            <h3
                                className="text-3xl lg:text-4xl tracking-tight text-neutral-950 leading-tight"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {title}
                            </h3>
                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
                                {org}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="lg:col-span-6 text-neutral-600 leading-8 lg:pt-1">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* FEATURE BAND */}
        <div className="bg-brand-light">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-primary mb-6">
                        A Trusted Reputation
                    </p>
                    <h3
                        className="text-4xl lg:text-5xl tracking-tight text-neutral-950"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Awards that reflect
                        our values.
                    </h3>
                </div>
                <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 lg:pt-16">
                    <p className="text-neutral-600 leading-8">
                        Every recognition received by Bio Foods represents more than
                        an achievement. It reflects our commitment to ethical
                        sourcing, environmental responsibility, and the well-being
                        of farming communities across our network.
                    </p>
                    <p className="text-neutral-600 leading-8">
                        These awards strengthen our position as a trusted global
                        supplier while reaffirming the values that have guided our
                        growth from the very beginning.
                    </p>
                </div>
            </div>
        </div>

        {/* CLOSING CTA */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end gap-12 border-t border-neutral-100">
            <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-primary mb-6">
                    Continuing the Journey
                </p>
                <h2
                    className="text-5xl lg:text-6xl tracking-tight text-neutral-950"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                    Inspired by achievement,
                    <br />
                    driven by purpose.
                </h2>
            </div>
            <div className="lg:max-w-md">
                <p className="text-lg leading-8 text-neutral-600 mb-8">
                    As we continue to grow, these recognitions motivate us to uphold
                    the highest standards of quality, sustainability, and innovation
                    while creating lasting value for customers, communities, and
                    future generations.
                </p>
                <a
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition"
                >
                    Our Story <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>

    </section>
);

export default AwardsGlobalRecognition;
