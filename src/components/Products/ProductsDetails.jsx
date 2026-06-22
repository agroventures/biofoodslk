import React, { useState, useEffect, useMemo } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

const ProductsDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(products[0]);
  const [activeSubTab, setActiveSubTab] = useState("");

  useEffect(() => {
    if (
      selectedCategory.grades &&
      !Array.isArray(selectedCategory.grades)
    ) {
      setActiveSubTab(
        Object.keys(selectedCategory.grades)[0]
      );
    } else {
      setActiveSubTab("");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedCategory.id]);

  const displayItems = useMemo(() => {
    if (!selectedCategory.grades) return [];

    if (Array.isArray(selectedCategory.grades))
      return selectedCategory.grades;

    return (
      selectedCategory.grades[activeSubTab] || []
    );
  }, [selectedCategory, activeSubTab]);

  return (
    <div className="min-h-screen bg-white lg:flex">

      {/* SIDEBAR */}
      <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-neutral-100 bg-white">
        <div className="p-8 lg:p-10 lg:sticky lg:top-0">

          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-4 w-4 text-brand-primary" />
          </div>

          <div className="space-y-3">

            {products.map((product) => {
              const isSelected =
                selectedCategory.id === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() =>
                    setSelectedCategory(product)
                  }
                  className={`w-full flex items-center justify-between p-4 border text-left transition-all duration-300 ${
                    isSelected
                      ? "border-brand-primary bg-brand-light"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <span className="text-sm text-neutral-800">
                    {product.name}
                  </span>

                  <ChevronRight
                    className={`w-4 h-4 transition-all ${
                      isSelected
                        ? "text-brand-primary translate-x-1"
                        : "text-neutral-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-100">
            <p className="text-sm leading-7 text-neutral-600">
              Certified organic products sourced
              through sustainable farming partnerships
              and responsible processing methods.
            </p>
          </div>

        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

          {/* HERO */}
          <section className="mb-20">

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-4 w-4 text-brand-primary" />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-7">

                <h1
                  className="text-5xl lg:text-7xl tracking-tight text-neutral-950"
                  style={{
                    fontFamily:
                      "Cormorant Garamond, serif",
                  }}
                >
                  {selectedCategory.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                  {selectedCategory.desc}
                </p>

              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden border border-neutral-200 bg-neutral-50">
                  <img
                    src={selectedCategory.img}
                    alt={selectedCategory.name}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

            </div>

          </section>

          {/* PRODUCT TYPES */}
          {selectedCategory.grades && (
            <section>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Available Products
                  </p>
                </div>

                {!Array.isArray(
                  selectedCategory.grades
                ) && (
                  <div className="flex flex-wrap gap-2">

                    {Object.keys(
                      selectedCategory.grades
                    ).map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveSubTab(tab)
                        }
                        className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                          activeSubTab === tab
                            ? "bg-brand-primary text-white"
                            : "bg-brand-light text-neutral-600 hover:bg-neutral-100"
                        }`}
                      >
                        {tab.replace("-", " ")}
                      </button>
                    ))}

                  </div>
                )}

              </div>

              {/* PRODUCTS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                {displayItems.map((item) => (
                  <div
                    key={item.id}
                    className="group border border-neutral-200 bg-white overflow-hidden"
                  >

                    <div className="aspect-square overflow-hidden bg-neutral-50">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/400x400?text=Organic+Product";
                        }}
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-medium text-neutral-900">
                        {item.name}
                      </h3>
                    </div>

                  </div>
                ))}

              </div>

            </section>
          )}

          {/* QUALITY COMMITMENT */}
          <section className="mt-24 pt-24 border-t border-neutral-100">

            <p className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6">
              Quality Commitment
            </p>

            <h2
              className="text-4xl lg:text-5xl tracking-tight text-neutral-950"
              style={{
                fontFamily:
                  "Cormorant Garamond, serif",
              }}
            >
              Produced with care,
              <br />
              from farm to market.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Every product is developed through
              sustainable farming practices,
              rigorous quality control, and
              long-term partnerships with farming
              communities. From cultivation to
              processing, we remain committed to
              delivering organic products that meet
              the highest international standards.
            </p>

          </section>

        </div>
      </main>

    </div>
  );
};

export default ProductsDetails;
