import React from "react";
import {
  Sparkles,
  Leaf,
  ArrowUpRight,
  Globe2,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

function HomeBrandNarrative({ section }) {
  const principles = [
    {
      icon: Leaf,
      title: "Soil Vitality",
      description:
        "Protecting and enriching the natural foundation that supports sustainable organic agriculture.",
    },
    {
      icon: Globe2,
      title: "Ecological Balance",
      description:
        "Working in harmony with environmental systems to ensure long-term resilience and biodiversity.",
    },
    {
      icon: Award,
      title: "Human Well-being",
      description:
        "Creating products that contribute positively to the lives of consumers and farming communities alike.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-28 xl:py-40">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute right-10 top-10 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Label */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Brand Narrative
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-5xl xl:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Built on Nature.
              <br />
              Guided by Purpose.
            </h2>

            {/* Statement Card */}
            <div className="relative mt-10 overflow-hidden rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-secondary" />

              <p className="text-xl font-light leading-snug text-neutral-900 lg:text-2xl xl:text-3xl">
                Bio Foods represents more than organic production. It is a
                long-term commitment to responsible cultivation, environmental
                stewardship, and exceptional quality.
              </p>
            </div>

            {/* Body Copy */}
            <div className="mt-10 max-w-2xl space-y-6">
              <p className="text-lg leading-8 text-neutral-600">
                For more than three decades, we have worked closely with
                agricultural communities, cultivating products that reflect the
                richness of Sri Lanka’s natural environment while meeting the
                expectations of international markets.
              </p>

              <p className="text-lg leading-8 text-neutral-600">
                As part of a larger agricultural ecosystem, our operations are
                supported by robust supply infrastructure and responsible
                sourcing practices that protect the integrity of every harvest
                while preserving the land for future generations.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link to="/about">
                <button
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  Discover Our Story

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-20">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Core Principles
              </span>
            </div>

            <div className="space-y-5">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="
                    group
                    rounded-[28px]
                    bg-white
                    p-8
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="flex gap-5">
                    <div className="h-fit rounded-2xl bg-brand-muted p-4 text-brand-primary">
                      <principle.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs tracking-[0.25em] text-brand-secondary">
                          0{index + 1}
                        </span>

                        <h4 className="text-xl font-semibold tracking-tight text-neutral-950">
                          {principle.title}
                        </h4>
                      </div>

                      <p className="leading-7 text-neutral-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alliance Panel */}
            <div className="mt-8 rounded-4xl bg-brand-primary p-8 text-white">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Integrated System
                </span>

                <div className="h-px flex-1 bg-white/20" />
              </div>

              <h4
                className="text-3xl tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Agroventures Group
              </h4>

              <p className="mt-4 text-base leading-7 text-white/80">
                Supported by an integrated agricultural ecosystem that enables
                responsible scaling, supply consistency, and complete product
                traceability from origin to destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBrandNarrative;