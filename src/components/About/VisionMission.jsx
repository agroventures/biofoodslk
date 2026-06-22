import React from "react";
import { Eye, Target, Leaf, Heart, CheckCircle2, Sparkles } from "lucide-react";

const sustainability = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Protecting soil health and biodiversity through natural farming methods.",
  },
  {
    icon: Heart,
    title: "Fair Partnerships",
    description: "Supporting farmers through long-term relationships and fair pricing.",
  },
  {
    icon: CheckCircle2,
    title: "Traceability",
    description: "Ensuring transparency throughout the entire supply chain.",
  },
];

function VisionMission() {
  return (
    <div className="w-full bg-white text-neutral-950">

      {/* INTRO */}
      <section className="border-y border-neutral-100 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Vision & Mission
              </span>
            </div>
          </div>

          <h1
            className="text-5xl lg:text-7xl tracking-tight text-neutral-950 max-w-4xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Growing responsibly,
            <br />
            creating lasting impact.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Our vision and mission guide every decision — from supporting farming
            communities to delivering certified organic products worldwide.
          </p>
        </div>
      </section>

      {/* VISION + MISSION SPLIT */}
      <section className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">

          {/* VISION */}
          <div className="pb-16 lg:pb-0 lg:pr-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 border border-brand-primary/20 bg-brand-light rounded-full">
                <Eye className="h-4 w-4 text-brand-primary" />
              </div>
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">Vision</span>
            </div>

            <h2
              className="text-4xl lg:text-5xl tracking-tight text-neutral-950 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Leading organic agriculture across Asia and beyond.
            </h2>

            <div className="mt-8 h-px w-12 bg-brand-secondary" />

            <p className="mt-8 text-base leading-8 text-neutral-600">
              We aspire to create a future where organic agriculture strengthens
              communities, restores ecosystems, and becomes the trusted standard
              for food production globally.
            </p>
          </div>

          {/* MISSION */}
          <div className="pt-16 lg:pt-0 lg:pl-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 border border-brand-primary/20 bg-brand-light rounded-full">
                <Target className="h-4 w-4 text-brand-primary" />
              </div>
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">Mission</span>
            </div>

            <h2
              className="text-4xl lg:text-5xl tracking-tight text-neutral-950 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Raising standards through responsible farming.
            </h2>

            <div className="mt-8 h-px w-12 bg-brand-secondary" />

            <p className="mt-8 text-base leading-8 text-neutral-600">
              We produce high-quality organic foods through ethical sourcing,
              scientific innovation, and fair partnerships with growers — creating
              value for both people and nature.
            </p>
          </div>

        </div>
      </section>

      {/* TYPOGRAPHIC STATEMENT */}
      <section className="bg-brand-primary py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p
            className="text-3xl lg:text-5xl text-white/90 tracking-tight leading-snug max-w-4xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            "Every harvest is a promise — to the land, to the farmer,
            and to the people who trust what we grow."
          </p>
          <p className="mt-6 text-sm text-white/50 uppercase tracking-[0.3em]">
            Bio Foods Philosophy
          </p>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-20 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-brand-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Sustainability
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <h2
              className="lg:col-span-5 text-4xl lg:text-6xl tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Built for
              <br />
              the long term.
            </h2>
            <p className="lg:col-span-5 lg:col-start-8 text-base leading-8 text-neutral-600">
              Our practices are designed to endure — cultivating resilience in
              every farm, partnership, and product we bring to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200">
            {sustainability.map((item, i) => (
              <div
                key={i}
                className="group p-8 lg:p-10 hover:bg-brand-light transition-colors duration-300"
              >
                <span className="text-xs text-neutral-400 tracking-[0.3em] uppercase">
                  0{i + 1}
                </span>

                <div className="mt-6 flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-brand-primary" />
                  <h3
                    className="text-xl text-neutral-900"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-0 group-hover:w-12 bg-brand-secondary transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default VisionMission;
