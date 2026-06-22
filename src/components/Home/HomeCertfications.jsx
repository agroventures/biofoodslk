import React from "react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeCertifications({ section }) {
  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-28 xl:py-40">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute right-10 top-0 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-20">
          {/* Left Side */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-secondary" />

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Quality Assurance
                </span>
              </div>
            </div>

            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-5xl xl:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Trusted by
              <br />
              Global Standards.
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
              Every product is supported by internationally recognized
              certifications that reflect our commitment to organic integrity,
              food safety, traceability, and responsible sourcing.
            </p>

            <div className="mt-12">
              <Link to="/quality-certifications">
                <button
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Certifications

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 01 */}
              <div
                className="
                  rounded-4xl
                  bg-white
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Organic & Fairtrade
                  </span>

                  <span className="text-xs tracking-[0.25em] text-brand-secondary">
                    01
                  </span>
                </div>

                <div className="flex min-h-45 items-center justify-center">
                  <img
                    src="/Home/ICS_logos.avif"
                    alt="Organic Certifications"
                    className="max-h-27.5 w-full object-contain"
                  />
                </div>
              </div>

              {/* Card 02 */}
              <div
                className="
                  rounded-4xl
                  bg-white
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Food Safety Systems
                  </span>

                  <span className="text-xs tracking-[0.25em] text-brand-secondary">
                    02
                  </span>
                </div>

                <div className="flex min-h-45 items-center justify-center">
                  <img
                    src="/Home/Foodsafety.avif"
                    alt="Food Safety Certifications"
                    className="max-h-27.5 w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Statement Block */}
            <div className="mt-8 rounded-[40px] bg-brand-primary p-8 text-white lg:p-10 xl:p-12">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-12 bg-brand-gold" />

                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Commitment
                </span>
              </div>

              <h3
                className="max-w-3xl text-2xl leading-tight lg:text-3xl xl:text-4xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Certification is not the destination.
                It is the standard we begin with.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Our systems are designed to exceed expectations through
                transparent sourcing, rigorous quality controls, and continuous
                improvement across every stage of production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCertifications;