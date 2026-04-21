import React, { useState, useEffect } from 'react';
import { Leaf, ChevronRight } from 'lucide-react';
import { products } from '../../data/product';

function ProductsDetails() {
    const [selectedCategory, setSelectedCategory] = useState(products[0]);
    const [activeSubTab, setActiveSubTab] = useState('');

    // Automatically scroll to top whenever the selected category changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }, [selectedCategory.id]);

    // Update sub-tab when category changes if it has nested grades
    const handleCategoryChange = (product) => {
        setSelectedCategory(product);
        if (product.grades && !Array.isArray(product.grades)) {
            setActiveSubTab(Object.keys(product.grades)[0]);
        } else {
            setActiveSubTab('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-80 bg-white border-r border-gray-100 p-8 sticky top-0 lg:h-screen overflow-y-auto z-20">
                <div className="flex items-center gap-2 mb-10 text-brand-primary">
                    <Leaf className="w-6 h-6" />
                    <span className="font-black tracking-widest uppercase text-sm">Our Range</span>
                </div>

                <nav className="space-y-2">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => handleCategoryChange(product)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 group ${
                                selectedCategory.id === product.id 
                                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                                : 'hover:bg-brand-light text-gray-600'
                            }`}
                        >
                            <span className="font-bold text-sm leading-tight">{product.name}</span>
                            <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${
                                selectedCategory.id === product.id ? 'opacity-100 translate-x-1' : ''
                            }`} />
                        </button>
                    ))}
                </nav>

                <div className="mt-12 p-6 bg-brand-light rounded-3xl border border-brand-primary/10">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">Note:</p>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                        All products are certified organic and fair trade. Seasonal availability may apply to specific spice grades.
                    </p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-12">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Display */}
                    <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-xl border border-gray-100 mb-12">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                                    {selectedCategory.name}
                                </h1>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {selectedCategory.desc}
                                </p>
                            </div>
                            <div className="relative h-64 lg:h-auto overflow-hidden group">
                                <img 
                                    src={selectedCategory.img} 
                                    alt={selectedCategory.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Grades / Sub-items Section */}
                    {selectedCategory.grades && (
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 gap-4">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Available Grades & Varieties</h2>
                                
                                {/* Sub-Category Tabs (For Spices/Coconut) */}
                                {!Array.isArray(selectedCategory.grades) && (
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {Object.keys(selectedCategory.grades).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveSubTab(tab)}
                                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                                                    activeSubTab === tab 
                                                    ? 'bg-gray-900 text-white' 
                                                    : 'bg-white text-gray-400 hover:text-gray-600 border border-gray-200'
                                                }`}
                                            >
                                                {tab.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Grid Display */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {(Array.isArray(selectedCategory.grades) 
                                    ? selectedCategory.grades 
                                    : selectedCategory.grades[activeSubTab] || []
                                ).map((item) => (
                                    <div key={item.id} className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
                                            <img 
                                                src={item.img} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=Product+Image'; }}
                                            />
                                        </div>
                                        <h3 className="text-sm font-black text-gray-800 text-center uppercase tracking-tighter">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* IQF/Frozen Section (Special Case for id: 6) */}
                    {selectedCategory.id === 6 && (
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {['Fresh Fruit', 'Vegetables', 'Herbs'].map((type) => (
                                <div key={type} className="bg-brand-primary p-8 rounded-4xl text-white">
                                    <h4 className="font-black text-xl mb-2">{type}</h4>
                                    <p className="text-white/70 text-sm">Processed at our A-rated BRC certified facility.</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ProductsDetails;