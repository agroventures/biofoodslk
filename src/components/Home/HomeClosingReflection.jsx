import React from 'react';
import { Leaf, Quote } from 'lucide-react';

function HomeClosingReflection() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
            {/* Subtle Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-primary/2 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Decorative Top Element */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-12 bg-brand-primary/20" />
                    <div className="w-10 h-10 bg-brand-primary/5 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="h-px w-12 bg-brand-primary/20" />
                </div>

                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center">
                        <Quote className="w-8 h-8 text-brand-primary" />
                    </div>
                </div>

                {/* Main Text */}
                <blockquote className="relative">
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-dark leading-tight tracking-tight">
                        Every product tells a story of{' '}
                        <span className="text-brand-primary">origin</span>,{' '}
                        <span className="text-brand-secondary">care</span>, and{' '}
                        <span className="text-brand-primary">responsibility</span>{' '}
                        brought to life through the strength of Agroventures.
                    </p>
                </blockquote>

                {/* Decorative Bottom Element */}
                <div className="flex items-center justify-center gap-4 mt-10">
                    <div className="h-px w-16 bg-linear-to-r from-transparent to-brand-primary/20" />
                    <div className="w-2 h-2 bg-brand-primary/30 rounded-full" />
                    <div className="h-px w-16 bg-linear-to-l from-transparent to-brand-primary/20" />
                </div>
            </div>
        </section>
    );
}

export default HomeClosingReflection;