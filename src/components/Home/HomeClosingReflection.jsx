import React from "react";
import { Leaf } from "lucide-react";

function HomeClosingReflection() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-32 lg:py-48">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[220px] font-black leading-none text-black/3 lg:text-[400px]">
          08
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Symbol */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-5">
            <div className="h-px w-12 bg-brand-secondary" />

            <div className="rounded-full bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <Leaf className="h-5 w-5 text-brand-primary" />
            </div>

            <div className="h-px w-12 bg-brand-secondary" />
          </div>
        </div>

        {/* Quote */}
        <blockquote>
          <h2
            className="text-4xl leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Every product carries
            <br />
            the story of its origin.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-neutral-600 lg:text-xl">
            From carefully cultivated fields to global destinations,
            every step reflects a commitment to quality, responsibility,
            and respect for the people and environments that make it possible.
          </p>
        </blockquote>

        {/* Signature */}
        <div className="mt-16">
          <div className="mx-auto h-px w-24 bg-brand-secondary" />

          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Bio Foods • Agroventures Group
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeClosingReflection;