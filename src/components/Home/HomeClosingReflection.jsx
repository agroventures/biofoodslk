import React from 'react';
import { Leaf, Quote } from 'lucide-react';

function HomeClosingReflection() {
    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-10">
                
                {/* ── Micro Blueprint Indicator ── */}
                <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-px bg-neutral-200" />
                    <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-neutral-950">
                        <Leaf className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div className="w-8 h-px bg-neutral-200" />
                </div>

                {/* ── Minimalist Quote Frame ── */}
                <div className="flex justify-center">
                    <div className="p-4 bg-neutral-950 border border-neutral-950 text-white">
                        <Quote className="w-6 h-6 stroke-[1.5] fill-white" />
                    </div>
                </div>

                {/* ── Main High-Contrast Statement ── */}
                <blockquote className="max-w-4xl mx-auto">
                    <p className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                        Every product tells a story of <br className="hidden sm:inline" />
                        <span className="text-neutral-400 italic font-normal tracking-tight normal-case">origin</span>, care, and responsibility <br />
                        <span className="text-neutral-500 font-mono text-base sm:text-lg block tracking-widest uppercase mt-6 sm:mt-8">
                            Sustained through the infrastructure of Agroventures Group
                        </span>
                    </p>
                </blockquote>

                {/* ── System Anchor Asset ── */}
                <div className="flex items-center justify-center gap-3 pt-4">
                    <div className="w-12 h-px bg-linear-to-r from-transparent to-neutral-200" />
                    <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-[0.25em]">End Matrix</span>
                    <div className="w-12 h-px bg-linear-to-l from-transparent to-neutral-200" />
                </div>
                
            </div>
        </section>
    );
}

export default HomeClosingReflection;