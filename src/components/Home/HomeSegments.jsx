import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeSegments() {
    // Standardizing the segments array and mapping to your brand colors
    const segments = [
        {
            id: 1,
            title: "Producers",
            description: "Meet our trusted organic farmers across the island.",
            img: '/Home/producers.avif',
            link: '/producers',
            gradient: 'from-brand-primary to-brand-secondary' 
        },
        {
            id: 2,
            title: "Process",
            description: "Advanced sustainable processing techniques.",
            img: '/Home/process.avif',
            link: '/process',
            gradient: 'from-brand-secondary to-brand-accent' 
        },
        {
            id: 3,
            title: "Products",
            description: "100% organic, fresh, and certified exports.",
            img: '/Home/products.avif',
            link: '/products',
            gradient: 'from-brand-accent to-brand-primary' 
        },
        {
            id: 4,
            title: "Quality",
            description: "Certified excellence in every single batch.",
            img: '/Home/quality.avif',
            link: '/quality',
            gradient: 'from-brand-primary to-brand-accent' 
        }
    ];

    return (
        <div className='w-full py-16 lg:py-24 bg-brand-light overflow-hidden'>
            {/* Section Header */}
            <div className='max-w-7xl mx-auto mb-16 px-6 text-center'>
                <div className='inline-flex items-center gap-2 bg-brand-accent/20 text-brand-primary px-5 py-2 rounded-full mb-6 text-sm font-bold tracking-wide'>
                    <Sparkles className='w-4 h-4' />
                    <span>DISCOVER OUR JOURNEY</span>
                </div>
                <h2 className='text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter'>
                    Experience BioFoods
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                    Explore every step of our commitment to bringing you the finest organic products from farm to table.
                </p>
            </div>

            {/* Cards Grid - Adjusted to 4 columns for the 4 segments */}
            <div className='max-w-350 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {segments.map((segment, index) => (
                    <Link
                        key={segment.id}
                        to={segment.link}
                        className='group relative overflow-hidden rounded-4xl bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3'
                        style={{ 
                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                            opacity: 0
                        }}
                    >
                        {/* Image Container */}
                        <div className='relative h-112.5 lg:h-137.5 overflow-hidden'>
                            {/* Background Image */}
                            <div className='absolute inset-0 transition-transform duration-1000 group-hover:scale-110'>
                                <img 
                                    src={segment.img} 
                                    alt={segment.title} 
                                    className='h-full w-full object-cover' 
                                />
                                {/* Brand Color Tint on Hover */}
                                <div className={`absolute inset-0 bg-linear-to-t ${segment.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent' />
                            </div>

                            {/* Top Right Arrow */}
                            <div className='absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center border border-white/20'>
                                <ArrowRight className='w-5 h-5 text-white transition-transform group-hover:-rotate-45deg' />
                            </div>

                            {/* Static Title (Visible initially) */}
                            <div className='absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0'>
                                <p className='text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-2'>Explore</p>
                                <h3 className='text-3xl font-bold text-white mb-4'>
                                    {segment.title}
                                </h3>
                                <div className='h-1.5 w-12 bg-brand-accent rounded-full' />
                            </div>

                            {/* Hover Content (Revealed from Bottom) */}
                            <div className='absolute inset-0 flex flex-col items-center justify-center p-8 bg-white/95 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]'>
                                <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${segment.gradient} flex items-center justify-center mb-6 shadow-xl transform group-hover:rotate-12 transition-transform duration-700`}>
                                    <Sparkles className='w-10 h-10 text-white' />
                                </div>

                                <h3 className='text-2xl font-black text-brand-primary mb-3 uppercase tracking-tighter'>
                                    {segment.title}
                                </h3>

                                <p className='text-gray-600 text-center mb-8 font-medium leading-relaxed'>
                                    {segment.description}
                                </p>

                                <div className='inline-flex items-center gap-3 text-xs font-black text-white bg-brand-primary px-8 py-4 rounded-2xl hover:bg-brand-secondary transition-colors group/btn shadow-lg shadow-brand-primary/20'>
                                    <span>LEARN MORE</span>
                                    <ArrowRight className='w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomeSegments;