import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item, productId }) => {
  const content = (
    <div className="group border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-sm">
      <div className="aspect-square overflow-hidden bg-neutral-50">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x400?text=Organic+Product";
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium text-neutral-900 group-hover:text-brand-primary transition-colors duration-300">
          {item.name}
        </h3>
      </div>
    </div>
  );

  return productId ? (
    <Link to={`/products/${productId}`}>{content}</Link>
  ) : content;
};

export default ProductCard;