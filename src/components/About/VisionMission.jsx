import React from "react";
import { Eye, Target, Leaf, Heart, CheckCircle2, Sparkles } from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

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
    <LazyMotion features={domAnimation}>
    <div className="w-full bg-white text-neutral-950">

      {/* INTRO */}
      <section className="relative border-t border-neutral-100 py-16 lg:py-20 overflow-hidden">
        {/* Decorative number */}
        <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
          <span className="text-[280px] font-black leading-none text-black/3">03</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div {...fadeUp(0)} className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-secondary" />
              <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">Vision & Mission</span>
            </div>
            <div className="h-px w-12 bg-brand-secondary" />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl lg:text-7xl tracking-tight text-neutral-950 max-w-7xl text-center mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Growing responsibly,
            <br />
            <span className="italic text-brand-primary">creating lasting impact.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-neutral-600 text-center">
            Our vision and mission guide every decision - from supporting farming communities to delivering certified organic products worldwide.
          </motion.p>
        </div>
      </section>

      {/* VISION + MISSION editorial list */}
      <section className="py-16 lg:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">

            {/* VISION row */}
            <motion.div {...fadeUp(0)} className="group grid gap-6 py-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8">
              <div className="flex items-center gap-4 lg:contents">
                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-brand-primary group-hover:bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:text-white transition-colors duration-300">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <h2
                  className="text-2xl lg:text-3xl tracking-tight text-neutral-950"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Vision
                </h2>
              </div>
              <div className="lg:col-span-6">
                <h3
                  className="text-xl lg:text-2xl tracking-tight text-neutral-800 mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Leading organic agriculture across Asia and beyond.
                </h3>
                <p className="text-lg leading-8 text-neutral-600">
                  A future where organic agriculture strengthens communities, restores ecosystems, and becomes the global standard.
                </p>
              </div>
            </motion.div>

            {/* MISSION row */}
            <motion.div {...fadeUp(0.1)} className="group grid gap-6 py-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8">
              <div className="flex items-center gap-4 lg:contents">
                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-brand-primary group-hover:bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:text-white transition-colors duration-300">
                    <Target className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <h2
                  className="text-2xl lg:text-3xl tracking-tight text-neutral-950"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Mission
                </h2>
              </div>
              <div className="lg:col-span-6">
                <h3
                  className="text-xl lg:text-2xl tracking-tight text-neutral-800 mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Raising standards through responsible farming.
                </h3>
                <p className="text-lg leading-8 text-neutral-600">
                  High-quality organic foods through ethical sourcing, fair partnerships, and scientific innovation - creating value for people and nature.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TYPOGRAPHIC STATEMENT - matches HomeAgroVenturesAdvantage CTA panel */}
      <section className="overflow-hidden rounded-none">
        <motion.div
          {...fadeUp(0)}
          className="bg-brand-primary py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">Bio Foods Philosophy</span>
            </div>
            <h3
              className="max-w-7xl text-3xl leading-tight lg:text-5xl text-white text-center"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "Every harvest is a promise - to the land, to the farmer,
              and to the people who trust what we grow."
            </h3>
            <p className="mt-8 max-w-7xl text-lg leading-8 text-white/80 text-center">
              From field to global destination - every step reflects quality, responsibility, and respect.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
    </LazyMotion>
  );
}

export default VisionMission;
