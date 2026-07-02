import React from "react";
import { Leaf, Handshake, ScanLine, Gauge } from "lucide-react";

const principles = [
  {
    icon: Leaf,
    title: "Organic & Biodynamic Integrity",
    description:
      "Respecting natural ecosystems through responsible cultivation and regenerative agricultural practices.",
  },
  {
    icon: Handshake,
    title: "Ethical Fair-Trade Engagement",
    description:
      "Supporting farming communities through equitable partnerships and long-term relationships.",
  },
  {
    icon: ScanLine,
    title: "End-to-End Traceability",
    description:
      "Ensuring transparency across every stage of sourcing, production, and distribution.",
  },
  {
    icon: Gauge,
    title: "Precision Quality Management",
    description:
      "Maintaining rigorous standards through continuous monitoring and quality assurance systems.",
  },
];

function HomeCorePrinciples({ section }) {

  return (
    <section className="relative overflow-hidden bg-brand-light py-28 lg:py-40">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute left-0 top-10 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />

            <div className="flex items-center gap-2">

              <span className="text-base uppercase tracking-[0.3em] text-neutral-500">
                What We Stand For
              </span>
            </div>
          </div>

          <h2
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
          >
            Principles That
            <br />
            Shape Everything We Do.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            From cultivation to export, these values guide every decision we make.
          </p>
        </div>

        {/* Editorial List */}
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group grid gap-6 py-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8"
            >
              {/* Number + Icon (side-by-side on mobile, separate columns on lg) */}
              <div className="flex items-center gap-4 lg:contents">
                <div className="lg:col-span-1">
                  <span className="text-base tracking-[0.25em] text-brand-secondary">
                    0{index + 1}
                  </span>
                </div>

                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-white p-4 shadow-sm w-fit text-brand-primary">
                    <principle.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3
                  className="text-2xl lg:text-3xl tracking-tight text-neutral-950"
                  style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                >
                  {principle.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="max-w-xl text-lg leading-8 text-neutral-600">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 rounded-[40px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-14">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Our Promise
            </span>
          </div>

          <h3
            className="max-w-4xl text-3xl leading-tight text-neutral-950 lg:text-5xl"
            style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
          >
            Sustainable practices. Trusted partnerships. Uncompromising quality.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default HomeCorePrinciples;
