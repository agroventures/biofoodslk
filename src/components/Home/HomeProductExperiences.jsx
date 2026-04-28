import React from 'react';
import { Leaf, Coffee, Nut, Snowflake, Sprout, ArrowRight, Sparkles, Package } from 'lucide-react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

function HomeProductExperiences() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-brand-light overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-150 h-150 bg-brand-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-brand-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10 shadow-sm">
                        <Package className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Portfolio</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
                        Product <br className="sm:hidden" />
                        <span className="text-brand-primary">Experiences</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A curated portfolio designed for premium markets
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <div 
                            key={index}
                            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                    {product.name}
                                </h3>
                                
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {product.desc.length > 100 ? product.desc.slice(0, 100) + '...' : product.desc}
                                </p>

                                <Link to='/products'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-2 pr-6 shadow-xl border border-gray-100">
                        <div className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Premium Quality
                        </div>
                        <p className="text-gray-600 text-sm font-medium px-4">
                            All products certified organic & fair-trade
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeProductExperiences;