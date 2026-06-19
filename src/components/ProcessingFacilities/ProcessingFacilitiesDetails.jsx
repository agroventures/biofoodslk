import React, { useState } from 'react';
import { processingFacilities } from '../../data/processingFacilities';
import {
    Factory, CheckCircle2, MapPin, Award, TrendingUp,
    Sparkles, ArrowRight, Shield, Globe, Zap, ChevronRight, ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = [
    { value: '30+', label: 'Years Experience', icon: TrendingUp },
    { value: '20+', label: 'Countries Served', icon: Globe },
    { value: '100%', label: 'Quality Assured', icon: Shield },
    { value: 'ISO', label: 'Certified Facility', icon: Award },
];

const BADGES = [
    { icon: Award, label: 'ISO Certified' },
    { icon: Shield, label: 'HACCP Compliant' },
    { icon: Zap, label: 'High Capacity' },
    { icon: Globe, label: 'Export Ready' },
];

// ── Per-card image carousel ──────────────────────────────────────────────────
function ImageCarousel({ images, name }) {
    const [current, setCurrent] = useState(0);

    const prev = (e) => {
        e.stopPropagation();
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };

    const next = (e) => {
        e.stopPropagation();
        setCurrent((c) => (c + 1) % images.length);
    };

    return (
        <div className='relative w-full h-full min-h-85 lg:min-h-full overflow-hidden bg-neutral-900'>
            {/* Slides */}
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`${name} — view ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                        i === current
                            ? 'opacity-100 scale-100 mix-blend-normal'
                            : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                />
            ))}

            {/* Cinematic Gradient Mask */}
            <div className='absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90' />

            {/* Prev / Next — Only shown when more than 1 image */}
            {images.length > 1 && (
                <>
                    <div className='absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
                        <button
                            onClick={prev}
                            className='w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-95'
                            aria-label='Previous image'
                        >
                            <ChevronLeft className='w-5 h-5' />
                        </button>

                        <button
                            onClick={next}
                            className='w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-95'
                            aria-label='Next image'
                        >
                            <ChevronRight className='w-5 h-5' />
                        </button>
                    </div>

                    {/* Dot indicators */}
                    <div className='absolute bottom-6 left-6 z-20 flex items-center gap-1'>
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                                aria-label={`Go to image ${i + 1}`}
                                className='py-2'
                            >
                                <div
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────
function ProcessingFacilitiesDetails() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className='relative w-full py-24 lg:py-36 bg-[#FDFDFB] text-neutral-900 overflow-hidden'>
            
            {/* ── Subdued Blueprint Grid Architecture ── */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-[0.4]'>
                <div 
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `linear-gradient(to right, #E2E2DF 1px, transparent 1px),
                                          linear-gradient(to bottom, #E2E2DF 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>

                {/* ══════════════════════════════════════
                    SECTION HEADER — Editorial Layout
                   ══════════════════════════════════════ */}
                <div className='border-b border-neutral-200 pb-16 mb-20 lg:mb-28'>
                    <div className='grid lg:grid-cols-12 gap-8 items-start'>
                        
                        {/* Title Block */}
                        <div className='lg:col-span-7 flex flex-col items-start'>
                            <div className='flex items-center gap-3 mb-6'>
                                <span className='text-xs font-bold tracking-[0.3em] uppercase text-neutral-500'>
                                    Industrial Blueprint
                                </span>
                            </div>

                            <h2 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 leading-[0.9] uppercase'>
                                World‑Class
                                <span className='block text-transparent bg-clip-text bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-500'>
                                    Processing
                                </span>
                                Infrastructure
                            </h2>
                        </div>

                        {/* Description + Structural Stats */}
                        <div className='lg:col-span-5 lg:pt-10 flex flex-col gap-10'>
                            <p className='text-base sm:text-lg text-neutral-600 leading-relaxed font-medium font-sans'>
                                High-efficiency engineering frameworks mapped directly to international agricultural export standards. Ensuring deterministic traceability, quality management, and global supply guarantees.
                            </p>

                            <div className='grid grid-cols-2 gap-px bg-neutral-200 p-px rounded-xl overflow-hidden shadow-sm'>
                                {STATS.map(({ value, label, icon: Icon }) => (
                                    <div key={label} className='bg-white p-5 flex flex-col justify-between min-h-27.5'>
                                        <div className='flex justify-between items-start w-full'>
                                            <p className='text-3xl font-light text-neutral-900 font-mono tracking-tighter'>{value}</p>
                                            <Icon className='w-4 h-4 text-neutral-400 stroke-[1.5]' />
                                        </div>
                                        <p className='text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-4'>{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* ══════════════════════════════════════
                    FACILITY CARDS — Asymmetric Structural Layout
                   ══════════════════════════════════════ */}
                <div className='flex flex-col gap-16 lg:gap-24'>
                    {processingFacilities.map((facility, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={facility.id}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group flex flex-col lg:grid lg:grid-cols-12 bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 ${
                                    hoveredIndex === index ? 'shadow-xl border-neutral-300' : ''
                                }`}
                            >
                                {/* Media Segment: Alternate layout weight explicitly */}
                                <div className={`w-full lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <ImageCarousel
                                        images={facility.images}
                                        name={facility.name}
                                    />
                                    {/* Number Watermark over media frame */}
                                    {/* <div className='absolute bottom-6 right-6 z-20 font-mono text-xs text-white/50 bg-black/40 backdrop-blur-sm px-2 py-1 rounded'>
                                        SYS-REF // 0{index + 1}
                                    </div> */}
                                </div>

                                {/* Content Details Frame */}
                                <div className={`w-full lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div>
                                        <div className='flex items-center gap-2 mb-4'>
                                            <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                                            <span className='text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400'>
                                                Live Facility Hub
                                            </span>
                                        </div>

                                        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight mb-4'>
                                            {facility.name}
                                        </h3>

                                        <p className='text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 font-medium'>
                                            {facility.description}
                                        </p>

                                        {/* Infrastructure Verification Tag Matrix */}
                                        <div className='grid grid-cols-2 gap-2 mb-8'>
                                            {BADGES.map(({ icon: Icon, label }) => (
                                                <div
                                                    key={label}
                                                    className='flex items-center gap-3 border border-neutral-150 rounded-xl px-4 py-3 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-200'
                                                >
                                                    <Icon className='w-4 h-4 text-neutral-700 shrink-0 stroke-[1.5]' />
                                                    <span className='text-[11px] font-bold text-neutral-700 uppercase tracking-wider'>
                                                        {label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Structural Footer Row */}
                                    {/* <div className='pt-6 border-t border-neutral-100 flex items-center justify-between gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <CheckCircle2 className='w-4 h-4 text-neutral-900' />
                                            <span className='text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider'>
                                                Status: Nominal
                                            </span>
                                        </div>

                                        <button className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200'>
                                            Specs Frame <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ══════════════════════════════════════
                    BOTTOM CTA BANNER — High Contrast Matrix
                   ══════════════════════════════════════ */}
                <div className='mt-24 lg:mt-36'>
                    <div className='relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-20 bg-neutral-950 text-white shadow-2xl'>
                        
                        {/* Vector Grid Overlay for CTA Block */}
                        <div className='absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay'>
                            <div className='w-full h-full bg-grid-white/[0.2]' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                        </div>

                        <div className='relative flex flex-col lg:flex-row lg:items-center justify-between gap-12 z-10'>
                            
                            {/* Copywrite Section */}
                            <div className='max-w-2xl'>
                                <div className='flex items-center gap-2 mb-6'>
                                    <Sparkles className='w-4 h-4 text-neutral-400 stroke-[1.5]' />
                                    <span className='text-neutral-400 text-xs font-mono font-bold uppercase tracking-[0.2em]'>
                                        Global Allocation Frame
                                    </span>
                                </div>

                                <h3 className='text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-6'>
                                    Ready to Source 
                                    <span className='block text-neutral-400'>at Global Scale?</span>
                                </h3>

                                <p className='text-sm sm:text-base text-neutral-400 font-medium leading-relaxed mb-8'>
                                    Connect directly with our export Logistics desk to isolate regional supply volumes, specific processing metrics, and structural customs certification workflows built for destination markets.
                                </p>

                                <div className='flex flex-wrap items-center gap-3'>
                                    {['USDA Certified', 'EU Compliant', 'Direct Farm Access'].map((tag) => (
                                        <div key={tag} className='flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-md'>
                                            <div className='w-1 h-1 rounded-full bg-neutral-400' />
                                            <span className='text-white/90 text-[11px] font-mono tracking-wider uppercase'>{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Operations */}
                            <div className='flex flex-col gap-4 w-full lg:w-auto shrink-0 min-w-65'>
                                <Link to='/contact' className='w-full'>
                                    <button className='group flex items-center justify-between w-full bg-white text-neutral-950 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]'>
                                        <span>Initiate Contact</span>
                                        <ChevronRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5' />
                                    </button>
                                </Link>

                                {/* <Link to='/products' className='w-full'>
                                    <button className='flex items-center justify-between w-full bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300'>
                                        <span>Inventory Sheets</span>
                                        <ArrowRight className='w-4 h-4' />
                                    </button>
                                </Link> */}

                                {/* <div className='flex items-center gap-2 justify-center lg:justify-start mt-2 opacity-50'>
                                    <MapPin className='w-3.5 h-3.5' />
                                    <span className='text-[10px] font-mono uppercase tracking-wider'>
                                        Global Logistics Base · ET
                                    </span>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProcessingFacilitiesDetails;