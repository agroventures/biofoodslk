import React from "react";
import { Leaf, Heart, ShieldCheck } from "lucide-react";
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
    <section className="relative bg-white py-16 lg:py-24 border-y border-neutral-100 overflow-hidden">
      {/* Decorative number */}
      <div className="pointer-events-none absolute left-0 top-10 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">02</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-24 max-w-7xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <span className="text-base uppercase tracking-[0.3em] font-semibold text-neutral-500">Founding Vision</span>
            </div>
            <div className="h-px w-12 bg-brand-secondary" />
          </div>
          <h2
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl text-center"
            style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
          >
            A simple belief:
            <br />
            <span className="italic text-brand-primary">food should be grown with care.</span>
          </h2>
          <p className="mt-8 max-w-7xl text-lg leading-8 text-neutral-600 text-center">
            Bio Foods was founded by{" "}
            <span className="text-neutral-900">Dr. Sarath Ranaweera</span>{" "}
            with a clear idea - agriculture should support nature, not extract from it.
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
              <div className="flex items-center justify-center gap-4 lg:contents">
                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-brand-primary group-hover:bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:text-white transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3
                  className="text-2xl lg:text-3xl tracking-tight text-neutral-950 text-center lg:text-left"
                  style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="max-w-7xl text-lg leading-8 text-neutral-600 text-center lg:text-left">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement panel */}
        <motion.div {...fadeUp(0.3)} className="mt-20 rounded-[40px] bg-brand-primary p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-14">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">Our Promise</span>
            <div className="h-px w-12 bg-brand-gold" />
          </div>
          <h3
            className="max-w-7xl mx-auto text-3xl leading-tight text-brand-light lg:text-5xl text-center"
            style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
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