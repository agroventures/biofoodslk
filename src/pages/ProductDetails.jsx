import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeSubTab, setActiveSubTab] = useState(
    product?.grades && !Array.isArray(product.grades)
      ? Object.keys(product.grades)[0]
      : ''
  );

  const displayItems = useMemo(() => {
    if (!product?.grades) return [];
    if (Array.isArray(product.grades)) return product.grades;
    return product.grades[activeSubTab] || [];
  }, [product, activeSubTab]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-neutral-500">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 lg:py-24">

        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-primary mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Hero */}
        <section className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-primary" />
            </div>
            <h1
              className="text-5xl lg:text-7xl tracking-tight text-neutral-950"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {product.desc}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden border border-neutral-200 bg-neutral-50">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Grades / Sub-tabs */}
        {product.grades && (
          <section>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Available Products</p>

              {!Array.isArray(product.grades) && (
                <div className="flex flex-wrap gap-2">
                  {Object.keys(product.grades).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveSubTab(tab)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                        activeSubTab === tab
                          ? 'bg-brand-primary text-white'
                          : 'bg-brand-light text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      {tab.replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white overflow-hidden hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="aspect-square overflow-hidden bg-neutral-50">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/400x400?text=Organic+Product';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-medium text-neutral-900">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;
