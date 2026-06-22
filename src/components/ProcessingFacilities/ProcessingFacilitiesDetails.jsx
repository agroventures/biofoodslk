import React, { useState } from "react";
import { processingFacilities } from "../../data/processingFacilities";
import { Award, TrendingUp, Shield, Globe, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const STATS = [
  { value: "30+",  label: "Years Experience", icon: TrendingUp },
  { value: "20+",  label: "Countries Served",  icon: Globe },
  { value: "100%", label: "Quality Assured",   icon: Shield },
  { value: "ISO",  label: "Certified Facility", icon: Award },
];

const BADGES = ["ISO Certified", "HACCP Compliant", "Export Ready", "Quality Assured"];

/* ── Image Carousel ── */
function ImageCarousel({ images, name }) {
  const [current, setCurrent] = useState(0);
  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${name} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            current === i ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition">
            <ChevronLeft className="w-4 h-4 text-neutral-800" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition">
            <ChevronRight className="w-4 h-4 text-neutral-800" />
          </button>

          {/* counter */}
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 text-xs text-white tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* progress dots */}
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 rounded-full transition-all ${current === i ? "w-6 bg-white" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Main Component ── */
function ProcessingFacilitiesDetails() {
  return (
    <section className="w-full bg-white text-neutral-950">

      {/* INTRO */}
      <div className="py-24 lg:py-36 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-xs uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Processing Facilities
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight leading-[1.05]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              World-class facilities,
              <br />
              <span className="text-brand-primary">crafted for quality.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-lg leading-8 text-neutral-600">
              Our processing facilities combine modern technology, international
              quality standards, and decades of experience to deliver premium
              organic products for global markets.
            </motion.p>
          </div>

        </div>
      </div>

      {/* STATS BAND */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="py-10 px-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-4xl lg:text-5xl text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">{label}</p>
              </div>
              <Icon className="h-4 w-4 text-white/20 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FACILITIES */}
      <div className="divide-y divide-neutral-100">
        {processingFacilities.map((facility, index) => {
          const hasImages = facility.images && facility.images.length > 0;
          const reverse = index % 2 !== 0;

          return hasImages ? (
            /* WITH IMAGES — editorial split */
            <motion.div
              key={facility.id}
              {...fadeUp(0)}
              className="py-24 lg:py-32"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${reverse ? "direction-rtl" : ""}`}>

                  {/* IMAGE */}
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <ImageCarousel images={facility.images} name={facility.name} />
                  </div>

                  {/* CONTENT */}
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <span className="text-xs text-neutral-400 tracking-[0.3em] uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-4 h-px w-8 bg-brand-secondary" />

                    <h3
                      className="mt-6 text-3xl lg:text-4xl tracking-tight leading-snug"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {facility.name}
                    </h3>

                    <p className="mt-6 text-sm leading-8 text-neutral-600">
                      {facility.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {BADGES.map((badge) => (
                        <span
                          key={badge}
                          className="px-3 py-1.5 border border-neutral-200 text-xs uppercase tracking-[0.2em] text-neutral-600 bg-brand-light"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            /* WITHOUT IMAGES — full-width text layout */
            <motion.div
              key={facility.id}
              {...fadeUp(0)}
              className="py-24 lg:py-32 bg-brand-light"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex items-start gap-8 lg:gap-16">
                  <span
                    className="hidden lg:block text-[80px] leading-none font-light text-neutral-200 select-none"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <span className="text-xs text-neutral-400 tracking-[0.3em] uppercase lg:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-4 lg:mt-0 h-px w-8 bg-brand-secondary mb-6" />

                      <h3
                        className="text-3xl lg:text-4xl tracking-tight leading-snug"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {facility.name}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm leading-8 text-neutral-600">
                        {facility.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {BADGES.map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1.5 border border-neutral-200 text-xs uppercase tracking-[0.2em] text-neutral-600 bg-white"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA BANNER */}
      <div className="bg-brand-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <div>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50 mb-8">
                <span className="h-px w-8 bg-brand-secondary" />
                Partner With Us
              </span>

              <h2
                className="text-4xl lg:text-6xl tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Bringing organic products
                to markets worldwide.
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-8">
              <p className="text-base leading-8 text-white/60">
                From sourcing and processing to export and distribution, our
                facilities are designed to maintain quality, consistency, and
                traceability at every stage of the journey.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-sm text-white uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  Contact Us
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default ProcessingFacilitiesDetails;
