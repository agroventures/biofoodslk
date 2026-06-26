import React from "react";
import { Package, ArrowUpRight } from "lucide-react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

function HomeProductExperiences({ section }) {
  return (
    <section className="relative overflow-hidden bg-brand-light py-28 lg:py-40">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />

            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-brand-secondary" />

              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Product Collection
              </span>
            </div>
          </div>

          <h2
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Crafted From Nature.
            <br />
            Shared With The World.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            A curated portfolio of organic products, responsibly sourced and produced for global markets.
          </p>
        </div>

        {/* Editorial Product Rows */}
        <div className="space-y-12 lg:space-y-20">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className={`
                grid items-center gap-12
                lg:grid-cols-12
                ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-64 sm:h-80 lg:h-105 w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <span className="text-xs tracking-[0.25em] text-secondary">
                  0{index + 1}
                </span>

                <h3
                  className="mt-4 text-4xl tracking-tight text-neutral-950 lg:text-5xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {product.name}
                </h3>

                <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
                  {product.desc}
                </p>

                <Link
                  to="/products"
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
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-gold" />

            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
              Product Promise
            </span>
          </div>

          <h3
            className="max-w-4xl text-3xl leading-tight lg:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Every product begins with responsible sourcing and ends with uncompromising quality.
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Transparent supply chains, international standards, and a commitment to sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeProductExperiences;
