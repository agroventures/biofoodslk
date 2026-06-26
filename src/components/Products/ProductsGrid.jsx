import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

const ProductsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="group border border-neutral-200 bg-white overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden bg-neutral-50">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x450?text=Organic+Product";
                }}
              />
            </div>
            <div className="p-6">
              <h2
                className="text-2xl lg:text-3xl tracking-tight text-neutral-950 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {product.name}
              </h2>
              <p className="text-sm leading-6 text-neutral-500 line-clamp-2">{product.desc}</p>
              <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-brand-primary group-hover:underline">
                Explore Products
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
