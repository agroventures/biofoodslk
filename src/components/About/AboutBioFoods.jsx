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
      <div className="w-full bg-neutral-50 text-neutral-950 overflow-hidden antialiased relative">
        
        {/* ── EDITORIAL INTRO (SIDE-BY-SIDE LAYOUT) ── */}
        <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200/60 overflow-hidden">
          
          {/* Background Vectors */}
          <div className="absolute top-0 left-0 w-72 h-72 lg:w-120 lg:h-120 text-brand-primary/3 pointer-events-none -translate-x-12 -translate-y-12 select-none">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
              <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
            </svg>
          </div>
          
          <div className="absolute right-1/2 bottom-0 w-96 h-96 text-brand-gold/4 pointer-events-none translate-x-1/4 translate-y-1/3 select-none hidden lg:block">
            {/* Stylized Botanical Leaf Line Art */}
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-60">
              <path d="M50,100 Q45,60 10,40 Q40,40 50,0 Q60,40 90,40 Q55,60 50,100 Z" />
              <path d="M50,100 Q48,70 25,55" />
              <path d="M50,100 Q52,70 75,55" />
              <path d="M50,75 Q47,50 30,35" />
              <path d="M50,75 Q53,50 70,35" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Content Column */}
              <div className="flex flex-col justify-center">
                <motion.span
                  {...fadeUp(0)}
                  className="inline-flex items-center gap-3 mb-6 text-sm uppercase tracking-[0.3em] text-brand-gold font-semibold"
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

                <motion.p {...fadeUp(0.15)} className="text-neutral-600 text-lg font-light leading-relaxed mb-8 relative">
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
                className="overflow-hidden rounded-2xl border border-neutral-200 p-2 bg-neutral-50 shadow-inner h-full max-h-137.5 relative"
              >
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/intro.webp"
                  alt="Bio Foods organic farm"
                  className="w-full h-full min-h-87.5 lg:min-h-120 object-cover rounded-xl relative z-10"
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
        <section className="py-16 lg:py-24 bg-brand-primary relative overflow-hidden">
          
          {/* Top-Right Organic Topography Line Mapping Accent */}
          <div className="absolute top-12 right-0 w-80 h-80 text-brand-light/2 pointer-events-none select-none translate-x-1/4">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
              <path d="M0,30 Q25,15 50,40 T100,20" />
              <path d="M0,45 Q25,30 50,55 T100,35" />
              <path d="M0,60 Q25,45 50,70 T100,50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-neutral-200 pb-6 mb-16">
              <motion.h2
                {...fadeUp(0)}
                className="text-4xl lg:text-5xl tracking-tight text-brand-light font-light text-center md:text-left mb-4 md:mb-0"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Our Legacy & <span className="italic text-brand-gold">Journey</span>
              </motion.h2>
              <motion.p {...fadeUp(0.05)} className="text-sm uppercase tracking-[0.3em] font-semibold text-brand-muted text-center md:text-left mt-2 md:mt-0">
                Milestones over time
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  {...fadeUp(i * 0.1)}
                  className="bg-white backdrop-blur-xs border border-neutral-200/70 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group"
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