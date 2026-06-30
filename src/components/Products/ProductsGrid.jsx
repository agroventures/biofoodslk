import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
