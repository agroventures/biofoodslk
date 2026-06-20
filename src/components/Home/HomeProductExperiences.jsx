import React from 'react';
import { ArrowUpRight, Package } from 'lucide-react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

function HomeProductExperiences() {
    return (
        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-b border-neutral-100 py-24 lg:py-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ── Editorial Section Header ── */}
                <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-950">
                            <Package className="w-4 h-4 stroke-[1.5]" />
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Our Portfolio</span>
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                            Product Experiences
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-base text-neutral-600 font-medium leading-relaxed">
                            A highly calibrated asset framework designed explicitly to fulfill premium compliance baselines across global target markets.
                        </p>
                    </div>
                </div>

                {/* ── High-Contrast Products Grid Matrix ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product, index) => (
                        <div 
                            key={index}
                            className={`group bg-white border border-neutral-200 flex flex-col justify-between overflow-hidden hover:border-neutral-950 transition-colors duration-300 ${
                                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                            }`}
                        >
                            {/* Graphic Frame with Grayscale Mapping */}
                            <div className="relative h-56 overflow-hidden bg-neutral-950 border-b border-neutral-100">
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-80 filter contrast-110 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 to-transparent" />
                            </div>

                            {/* Context Payload Area */}
                            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-950">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-neutral-600 font-medium leading-relaxed">
                                        {product.desc.length > 110 ? product.desc.slice(0, 110) + '...' : product.desc}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Link 
                                        to="/products"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-950 border-b border-neutral-950 pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-colors"
                                    >
                                        Learn More
                                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom System Integration Footer ── */}
                <div className="border border-neutral-950 p-6 bg-neutral-950 text-white space-y-3 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <div className="flex items-center gap-2">
                        <h4 className="font-mono text-xs font-black uppercase tracking-tight text-white">Global Trace Infrastructure</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide">
                        100% of sequential outputs strictly verified under organic & fair-trade auditing layers.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default HomeProductExperiences;