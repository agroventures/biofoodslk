import React from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

function HomeProductExperiences({ section }) {
  return (
    <section className="relative overflow-hidden bg-brand-light py-10 lg:py-14">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-7xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />

            <div className="flex items-center gap-2">
              <span className="text-sm uppercase font-semibold tracking-wider text-neutral-500">
                Product Collection
              </span>
            </div>
            <div className="h-px w-12 bg-brand-secondary" />
          </div>

          <h2
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Crafted From Nature.
            <br />
            Shared With The World.
          </h2>

          <p className="mt-8 max-w-7xl text-lg leading-8 text-neutral-600 text-center">
            A curated portfolio of organic products, responsibly sourced and produced for global markets.
          </p>
        </div>

        {/* Editorial Product Rows */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <div key={product.slug} className="flex flex-col">
              {/* Image */}
              <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-64 sm:h-80 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3
                  className="mt-4 text-4xl tracking-tight text-neutral-950 lg:text-5xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {product.name}
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {product.desc}
                </p>

                <Link
                  to={`/products/${product.slug}`}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full border border-brand-primary px-6 py-3 text-sm font-medium text-brand-primary transition-colors duration-300 hover:bg-brand-primary hover:text-white"
                >
                  Explore Collection
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Panel */}
        <div className="mt-28 rounded-[40px] bg-brand-primary p-10 text-white lg:p-14">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-gold" />

            <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">
              Product Promise
            </span>
          </div>

          <h3
            className="max-w-7xl text-3xl leading-tight lg:text-5xl text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Every product begins with responsible sourcing and ends with uncompromising quality.
          </h3>

          <p className="mt-6 max-w-7xl text-lg leading-8 text-white/80 text-center">
            Transparent supply chains, international standards, and a commitment to sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeProductExperiences;
