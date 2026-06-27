import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import {
  Award,
  Globe,
  Leaf,
  Users,
  TrendingUp,
  Heart,
  CheckCircle2,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.215, 0.610, 0.355, 1] },
});

const milestones = [
  {
    year: "1993",
    title: "Founded in Kandy",
    description: "A family beginning rooted in organic farming traditions.",
  },
  {
    year: "2014",
    title: "Global Recognition",
    description: "Awarded for leadership in fair trade agriculture.",
  },
  {
    year: "2018",
    title: "Growing Reach",
    description: "Expanded as a leading certified organic exporter.",
  },
  {
    year: "2024",
    title: "Today",
    description: "Trusted by partners across more than 30 countries.",
  },
];

const stats = [
  { value: "30+", label: "Years of Farming" },
  { value: "100%", label: "Certified Organic" },
  { value: "30+", label: "Countries Reached" },
  { value: "1993", label: "Established" },
];

const values = [
  { icon: Leaf, text: "Certified Organic" },
  { icon: Heart, text: "Fair Trade" },
  { icon: CheckCircle2, text: "Traceable Chain" },
  { icon: TrendingUp, text: "Sustainable Growth" },
];

export default function AboutBioFoods() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full bg-neutral-50 text-neutral-950 overflow-hidden antialiased">
        
        {/* ── EDITORIAL INTRO (SIDE-BY-SIDE LAYOUT) ── */}
        <section className="relative py-24 lg:py-36 bg-white border-b border-neutral-200/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Content Column */}
              <div className="flex flex-col justify-center">
                <motion.span
                  {...fadeUp(0)}
                  className="inline-flex items-center gap-3 mb-6 text-md uppercase tracking-[0.4em] text-brand-gold font-semibold"
                >
                  <span className="h-px w-8 bg-brand-gold/60" />
                  About Bio Foods
                </motion.span>

                <motion.h1
                  {...fadeUp(0.1)}
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Rooted in nature, <br />
                  <span className="italic text-brand-primary">grown with care.</span>
                </motion.h1>

                <motion.p {...fadeUp(0.15)} className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
                  Since 1993 - cultivating certified organic products with deep
                  respect for people, land, and the communities behind every
                  harvest.
                </motion.p>
                
                {/* Brand Values Interactive Mini-Grid */}
                <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3.5 bg-neutral-50 border border-neutral-200/70 rounded-xl px-5 py-3.5 hover:bg-white hover:border-brand-primary hover:shadow-md hover:shadow-neutral-100 transition-all duration-300 group"
                    >
                      <div className="p-1.5 rounded-lg bg-brand-primary border border-neutral-200 group-hover:bg-brand-light group-hover:border-transparent transition-colors duration-300">
                        <Icon className="h-4 w-4 shrink-0 text-brand-light group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side: Image Column */}
              <motion.div
                {...fadeUp(0.3)}
                className="overflow-hidden rounded-2xl border border-neutral-200 p-2 bg-neutral-50 shadow-inner h-full max-h-137.5"
              >
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/intro.webp"
                  alt="Bio Foods organic farm"
                  className="w-full h-full min-h-87.5 lg:min-h-120 object-cover rounded-xl"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* ── INTEGRATED STATS CARDS GRID ── */}
        <section className="py-12 bg-white border-b border-neutral-200/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp(i * 0.08)}
                  className="bg-neutral-50 border border-neutral-200/60 p-8 rounded-2xl text-center group hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300"
                >
                  <p
                    className="text-4xl md:text-5xl font-light tracking-tight text-brand-primary group-hover:text-white transition-colors duration-300 tabular-nums"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {s.value}
                  </p>
                  <div className="w-4 h-px bg-brand-gold/60 mx-auto my-3 group-hover:bg-white/30 transition-colors" />
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CARD-BASED JOURNEY TIMELINE ── */}
        <section className="py-24 lg:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-neutral-200 pb-6 mb-16">
              <motion.h2
                {...fadeUp(0)}
                className="text-4xl lg:text-5xl tracking-tight text-neutral-900 font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Our Legacy & <span className="italic text-brand-gold">Journey</span>
              </motion.h2>
              <motion.p {...fadeUp(0.05)} className="text-md uppercase tracking-[0.3em] font-semibold text-brand-dark mt-2 md:mt-0">
                Milestones over time
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  {...fadeUp(i * 0.1)}
                  className="bg-white border border-neutral-200/70 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Subtle top bar decorative marker */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-neutral-100 group-hover:bg-brand-gold transition-colors duration-300" />
                  
                  <div>
                    <span
                      className="text-3xl lg:text-4xl text-brand-primary text-center group-hover:text-brand-primary transition-colors duration-300 font-light tabular-nums block mb-4"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {m.year}
                    </span>
                    <h3 className="text-lg font-medium text-center text-neutral-900 mb-2">
                      {m.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] text-neutral-600 text-center leading-relaxed font-light">
                    {m.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </LazyMotion>
  );
}