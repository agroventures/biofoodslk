import React from "react";
import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const principles = [
    {
      icon: Leaf,
      title: "Regenerate nature",
      description:
        "Farming that restores soil health and protects ecosystems over time.",
    },
    {
      icon: Heart,
      title: "Support farmers",
      description:
        "Fair and stable livelihoods for the communities behind every harvest.",
    },
    {
      icon: ShieldCheck,
      title: "Pure by design",
      description:
        "Food grown without chemicals, with full respect for natural processes.",
    },
  ];

function AboutFoundingVision() {

  return (
    <LazyMotion features={domAnimation}>
    <section className="relative bg-white py-28 lg:py-40 border-y border-neutral-100 overflow-hidden">
      {/* Decorative number */}
      <div className="pointer-events-none absolute left-0 top-10 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">02</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-24 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-secondary" />
              <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Founding Vision</span>
            </div>
          </div>
          <h2
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            A simple belief:
            <br />
            <span className="italic text-brand-primary">food should be grown with care.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Bio Foods was founded by{" "}
            <span className="text-neutral-900">Dr. Sarath Ranaweera</span>{" "}
            with a clear idea — agriculture should support nature, not extract from it.
          </p>
        </motion.div>

        {/* Principles editorial list */}
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp(index * 0.1)}
              className="group grid gap-6 py-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8"
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 lg:contents">
                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-brand-primary group-hover:bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:text-white transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3
                  className="text-2xl lg:text-3xl tracking-tight text-neutral-950"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="max-w-xl text-lg leading-8 text-neutral-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement panel */}
        <motion.div {...fadeUp(0.3)} className="mt-20 rounded-[40px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-14">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Our Promise</span>
          </div>
          <h3
            className="max-w-4xl text-3xl leading-tight text-neutral-950 lg:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Sustainable practices. Trusted partnerships. Uncompromising quality.
          </h3>
        </motion.div>

      </div>
    </section>
    </LazyMotion>
  );
}

export default AboutFoundingVision;