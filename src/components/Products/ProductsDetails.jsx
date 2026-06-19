import React, { useState, useEffect, useMemo } from 'react';
import { Leaf, ChevronRight, Info, ArrowUpRight } from 'lucide-react';
import { products } from '../../data/products';

const ProductsDetails = () => {
    const [selectedCategory, setSelectedCategory] = useState(products[0]);
    const [activeSubTab, setActiveSubTab] = useState('');

    useEffect(() => {
        if (selectedCategory.grades && !Array.isArray(selectedCategory.grades)) {
            setActiveSubTab(Object.keys(selectedCategory.grades)[0]);
        } else {
            setActiveSubTab('');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedCategory.id]);

    const displayItems = useMemo(() => {
        if (!selectedCategory.grades) return [];
        if (Array.isArray(selectedCategory.grades)) return selectedCategory.grades;
        return selectedCategory.grades[activeSubTab] || [];
    }, [selectedCategory, activeSubTab]);

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-neutral-900 selection:text-white">
            
            {/* ── Left Sidebar Directory Node ── */}
            <aside className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-neutral-100 p-6 lg:p-10 lg:sticky lg:top-0 lg:h-screen overflow-y-auto z-20 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-12 text-neutral-950">
                        <Leaf className="w-4 h-4 stroke-[1.5]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Range Index</span>
                    </div>

                    <nav className="space-y-1">
                        {products.map((product) => {
                            const isSelected = selectedCategory.id === product.id;
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => setSelectedCategory(product)}
                                    className={`w-full flex items-center justify-between py-3.5 px-4 text-left transition-all duration-200 border-l-2 ${
                                        isSelected 
                                            ? 'border-neutral-950 bg-neutral-50 text-neutral-950 font-bold' 
                                            : 'border-transparent text-neutral-400 hover:text-neutral-950 hover:bg-neutral-50/50'
                                    }`}
                                >
                                    <span className="text-xs uppercase tracking-wider font-semibold">{product.name}</span>
                                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                        isSelected ? 'opacity-100 translate-x-0.5' : 'opacity-0 -translate-x-1'
                                    }`} />
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Technical Quality Context */}
                <div className="mt-16 pt-6 border-t border-neutral-100">
                    <div className="flex items-center gap-2 mb-2 text-neutral-900">
                        <Info className="w-3.5 h-3.5 text-neutral-400 stroke-[1.5]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest font-bold">Standard Notice</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                        All operations are fully verified organic and fair trade. Seasonal yields dictate specific grade metrics.
                    </p>
                </div>
            </aside>

            {/* ── Main Production Exhibition Canvas ── */}
            <main className="flex-1 p-6 lg:p-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Editorial Category Canvas Header */}
                    <header className="border border-neutral-200 rounded-2xl overflow-hidden bg-white mb-20">
                        <div className="grid lg:grid-cols-12">
                            <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">Category Core</span>
                                <h1 className="text-4xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight mb-6 leading-none">
                                    {selectedCategory.name}
                                </h1>
                                <p className="text-neutral-500 font-medium leading-relaxed text-sm max-w-lg">
                                    {selectedCategory.desc}
                                </p>
                            </div>
                            <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden bg-neutral-50 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-neutral-200">
                                <img 
                                    src={selectedCategory.img} 
                                    alt={selectedCategory.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-[1.5s] hover:scale-105"
                                />
                            </div>
                        </div>
                    </header>

                    {/* Inventory Specifications Segment */}
                    {selectedCategory.grades && (
                        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-100 pb-4 gap-4">
                                <div>
                                    <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Available Manifest Varieties</h2>
                                </div>
                                
                                {/* Refined Segment Selection Controls */}
                                {!Array.isArray(selectedCategory.grades) && (
                                    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
                                        {Object.keys(selectedCategory.grades).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveSubTab(tab)}
                                                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all rounded-md ${
                                                    activeSubTab === tab 
                                                        ? 'bg-neutral-950 text-white font-bold' 
                                                        : 'text-neutral-400 hover:text-neutral-950 bg-neutral-50 hover:bg-neutral-100'
                                                }`}
                                            >
                                                {tab.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Clean Grid Infrastructure */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                                {displayItems.map((item) => (
                                    <div key={item.id} className="group bg-white border border-neutral-200/60 rounded-xl p-3 transition-all duration-300 hover:border-neutral-900">
                                        <div className="aspect-square bg-neutral-50 overflow-hidden mb-4 rounded-lg border border-neutral-100">
                                            <img 
                                                src={item.img} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                                onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=Premium+Grade'; }}
                                            />
                                        </div>
                                        <h3 className="text-[11px] font-bold text-neutral-900 text-center uppercase tracking-wider px-1 leading-tight">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Strategic Enterprise Scalability Core */}
                    <footer className="mt-32 pt-12 border-t border-neutral-100">
                        <div className="bg-neutral-950 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                            
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="max-w-xl space-y-2">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500">// Enterprise Scale</span>
                                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight">Scalability Architecture</h3>
                                    <p className="text-neutral-400 text-xs font-medium leading-relaxed">
                                        Production capabilities are systematically enhanced to secure high-volume international allocations while preserving local ecosystem frameworks.
                                    </p>
                                </div>
                                <div className="p-4 border border-white/10 rounded-full bg-white/5 text-white/50 hover:text-white hover:border-white transition-colors duration-300 shrink-0">
                                    <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </main>
        </div>
    );
};

export default ProductsDetails;