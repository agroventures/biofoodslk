import React, { useState, useEffect, useMemo } from 'react';
import { Leaf, ChevronRight, Info } from 'lucide-react';
import { products } from '../../data/products';

function ProductsDetails() {
    const [selectedCategory, setSelectedCategory] = useState(products[0]);
    const [activeSubTab, setActiveSubTab] = useState('');

    // Update sub-tab automatically when category changes
    useEffect(() => {
        if (selectedCategory.grades && !Array.isArray(selectedCategory.grades)) {
            setActiveSubTab(Object.keys(selectedCategory.grades)[0]);
        } else {
            setActiveSubTab('');
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedCategory.id]);

    // Memoize the items to display based on category and sub-tab
    const displayItems = useMemo(() => {
        if (!selectedCategory.grades) return [];
        if (Array.isArray(selectedCategory.grades)) return selectedCategory.grades;
        return selectedCategory.grades[activeSubTab] || [];
    }, [selectedCategory, activeSubTab]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-85 bg-white border-r border-gray-100 p-6 lg:p-10 lg:sticky lg:top-0 lg:h-screen overflow-y-auto z-20 shadow-sm">
                <div className="flex items-center gap-3 mb-10 text-brand-primary">
                    <div className="p-2 bg-brand-light rounded-lg">
                        <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-black tracking-widest uppercase text-xs">Our Organic Range</span>
                </div>

                <nav className="space-y-1.5">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setSelectedCategory(product)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 group ${
                                selectedCategory.id === product.id 
                                ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20 scale-[1.02]' 
                                : 'hover:bg-brand-light text-gray-500 hover:text-brand-primary'
                            }`}
                        >
                            <span className="font-bold text-sm leading-tight">{product.name}</span>
                            <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                                selectedCategory.id === product.id ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'
                            }`} />
                        </button>
                    ))}
                </nav>

                {/* Sidebar Info Box */}
                <div className="mt-12 p-6 bg-brand-light rounded-3xl border border-brand-primary/5">
                    <div className="flex items-center gap-2 mb-3 text-brand-primary">
                        <Info className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Quality Assurance</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed italic">
                        All products are certified organic and fair trade. Seasonal availability may apply to specific harvest grades.
                    </p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-16">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Hero Display */}
                    <header className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 mb-16">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
                                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                                    {selectedCategory.name}
                                </h1>
                                <p className="text-gray-500 leading-relaxed text-base lg:text-lg max-w-md">
                                    {selectedCategory.desc}
                                </p>
                            </div>
                            <div className="relative h-72 lg:h-auto overflow-hidden group order-1 lg:order-2">
                                <img 
                                    src={selectedCategory.img} 
                                    alt={selectedCategory.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent lg:bg-none" />
                            </div>
                        </div>
                    </header>

                    {/* Grades Section */}
                    {selectedCategory.grades && (
                        <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-6 gap-6">
                                <div>
                                    <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Available Varieties</h2>
                                    <div className="h-1 w-12 bg-brand-accent rounded-full" />
                                </div>
                                
                                {/* Sub-Category Tabs */}
                                {!Array.isArray(selectedCategory.grades) && (
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {Object.keys(selectedCategory.grades).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveSubTab(tab)}
                                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                                                    activeSubTab === tab 
                                                    ? 'bg-gray-900 text-white shadow-lg' 
                                                    : 'bg-white text-gray-400 hover:text-brand-primary border border-gray-100 shadow-sm'
                                                }`}
                                            >
                                                {tab.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Grid Display */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
                                {displayItems.map((item) => (
                                    <div key={item.id} className="group bg-white rounded-4xl p-4 border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                        <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 mb-5">
                                            <img 
                                                src={item.img} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                                onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=Premium+Grade'; }}
                                            />
                                        </div>
                                        <h3 className="text-[13px] font-black text-gray-800 text-center uppercase tracking-tight px-2 leading-tight">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* IQF/Frozen Section (Special Case) */}
                    {selectedCategory.id === 6 && (
                        <section className="grid md:grid-cols-3 gap-6 mt-20">
                            {['Fresh Fruit', 'Vegetables', 'Herbs'].map((type) => (
                                <div key={type} className="bg-brand-primary p-10 rounded-[2.5rem] text-white shadow-xl shadow-brand-primary/10 hover:bg-brand-secondary transition-colors cursor-default">
                                    <h4 className="font-black text-2xl mb-3 tracking-tighter">{type}</h4>
                                    <p className="text-white/70 text-xs leading-relaxed uppercase tracking-widest font-bold">BRC A-Rated Processing</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Scalability Footer Section */}
                    <footer className="mt-24 pt-12 border-t border-gray-100">
                        <div className="bg-gray-900 rounded-[2.5rem] p-10 lg:p-16 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
                            <h3 className="text-2xl lg:text-4xl font-black tracking-tighter mb-4">Scalability Through Agroventures</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
                                Production capabilities are strategically enhanced to meet global wholesale demand while maintaining the boutique premium quality BioFoodsLK is known for.
                            </p>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default ProductsDetails;