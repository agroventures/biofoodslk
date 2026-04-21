import React from 'react';
import { processingFacilities } from '../../data/processingFacilities';
import { Factory, CheckCircle2, MapPin, Award, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProcessingFacilitiesDetails() {
    return (
        <section className='relative w-full py-20 lg:py-28 bg-brand-light overflow-hidden'>
            {/* Background Decorations - Using Brand Colors with high blur */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-10' style={{ backgroundColor: 'var(--color-brand-primary)' }} />
                <div className='absolute bottom-20 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-10' style={{ backgroundColor: 'var(--color-brand-secondary)' }} />
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className="mb-16 lg:mb-20 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10 shadow-sm">
                        <Factory className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Infrastructure</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        World-Class <br />
                        <span className="text-brand-primary">
                            Processing Facilities
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        State-of-the-art facilities ensuring the highest standards of quality and safety throughout our supply chain.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12'>
                    {processingFacilities.map((facility, index) => (
                        <div
                            key={facility.id}
                            className={`group relative bg-white rounded-4xl lg:rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 ${
                                index % 2 !== 0 ? 'lg:mt-12' : ''
                            }`}
                        >
                            <div className="relative p-6 lg:p-10 flex flex-col h-full">
                                {/* Header Info */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-black uppercase text-brand-secondary bg-brand-secondary/5 px-4 py-2 rounded-full inline-flex items-center gap-2 border border-brand-secondary/10">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            {facility.name}
                                        </span>
                                    </div>

                                    <p className='text-sm text-gray-600 leading-relaxed font-medium'>
                                        {facility.description}
                                    </p>
                                </div>

                                {/* Image with Enhanced Overlay */}
                                <div className='relative w-full aspect-4/3 rounded-2xl lg:rounded-3xl overflow-hidden mb-8 shadow-inner'>
                                    <img
                                        src={facility.image}
                                        alt={facility.name}
                                        className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
                                    />

                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60' />

                                    {/* Floating Icon - Using Brand Secondary */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                                        <Factory className="w-6 h-6 text-brand-primary" />
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4 transition-colors group-hover:bg-brand-secondary/5">
                                        <Award className="w-5 h-5 text-brand-secondary shrink-0" />
                                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Certified</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4 transition-colors group-hover:bg-brand-secondary/5">
                                        <TrendingUp className="w-5 h-5 text-brand-secondary shrink-0" />
                                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">High Tech</span>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                                        <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                                            ISO Certified
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 lg:mt-32 text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-2 pr-8 rounded-[2.5rem] shadow-xl border border-gray-100 pl-8 py-6 md:py-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/20">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900 text-lg">Partner With Us</p>
                                <p className="text-sm text-gray-500 font-medium">Become a certified organic supplier today.</p>
                            </div>
                        </div>
                        <Link to='/contact' className="w-full md:w-auto">
                            <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-brand-secondary/30 active:scale-95 whitespace-nowrap">
                                Get In Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessingFacilitiesDetails;