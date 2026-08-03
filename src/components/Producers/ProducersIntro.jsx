import { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { Users, MapPin, Sprout, Heart, Award, ShieldCheck, ZoomIn, Leaf, CheckCircle2 } from "lucide-react";
import Lightbox from "../shared/Lightbox";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const stats = [
  { value: "10,050+", label: "Farmer Families", icon: Users },
  { value: "24,400", label: "Acres Outreach", icon: Sprout },
  { value: "06", label: "Provinces", icon: MapPin },
  { value: "50%+", label: "Certified Organic", icon: Leaf },
];

const regions = ["Central", "Uva", "Wayamba", "Down-South", "North-East", "Western"];

const values = [
  { icon: Award, text: "Best Small Farmer Group in Asia – 2014" },
  { icon: ShieldCheck, text: "Largest Farmer Group in Asia" },
  { icon: Heart, text: "Women's Empowerment" },
  { icon: CheckCircle2, text: "100% Sustainable Future" },
];

const mopaGallery = Array.from({ length: 10 }, (_, i) => ({
  src: `https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/${i + 1}.webp`,
  alt: `MOPA ${i + 1}`,
}));

export default function ProducersIntro() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full bg-neutral-50 text-neutral-950 overflow-hidden antialiased">

        {/* ── EDITORIAL INTRO ── */}
        <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200/60 overflow-hidden">
          {/* Decorative vector */}
          <div className="absolute top-0 left-0 w-72 h-72 lg:w-120 lg:h-120 text-brand-primary/3 pointer-events-none -translate-x-12 -translate-y-12 select-none">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
              <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: Content */}
              <div className="flex flex-col justify-center">
                <motion.span
                  {...fadeUp(0)}
                  className="inline-flex items-center gap-3 mb-6 text-lg uppercase tracking-[0.3em] text-brand-gold font-semibold"
                >
                  <span className="h-px w-8 bg-brand-gold/60" />
                  Marginalized Organic Producers' Association
                  <span className="h-px w-8 bg-brand-gold/60" />
                </motion.span>

                <motion.h1
                  {...fadeUp(0.1)}
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6"
                  style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                >
                  Empowering the
                  <br />
                  <span className="italic text-brand-primary">Marginalized.</span>
                </motion.h1>

                <motion.p {...fadeUp(0.15)} className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
                  Established in 2010, MOPA was founded to protect small-scale farmers from middleman exploitation. By educating and mobilizing these communities, Bio Foods has bridged the gap between rural producers and the sophisticated global consumer.
                </motion.p>

                <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3.5 bg-neutral-50 border border-neutral-200/70 rounded-xl px-5 py-3.5 hover:bg-white hover:border-brand-primary hover:shadow-md hover:shadow-neutral-100 transition-all duration-300 group"
                    >
                      <div className="p-1.5 rounded-lg bg-brand-primary border border-neutral-200 group-hover:bg-brand-light group-hover:border-brand-primary transition-colors duration-300">
                        <Icon className="h-4 w-4 shrink-0 text-brand-light group-hover:text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Image */}
              <motion.div
                {...fadeUp(0.3)}
                className="overflow-hidden rounded-2xl border border-neutral-200 p-2 bg-neutral-50 shadow-inner h-full max-h-137.5 relative"
              >
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/mopa-logo.webp"
                  alt="MOPA Logo"
                  className="w-full h-full min-h-87.5 lg:min-h-120 object-cover rounded-xl"
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section className="py-12 bg-white border-b border-neutral-200/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(i * 0.08)}
                  className="bg-neutral-50 border border-neutral-200/60 p-8 rounded-2xl text-center group hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300"
                >
                  <p
                    className="text-4xl md:text-5xl font-light tracking-tight text-brand-primary group-hover:text-white transition-colors duration-300 tabular-nums"
                    style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                  >
                    {value}
                  </p>
                  <div className="w-4 h-px bg-brand-gold/60 mx-auto my-3 group-hover:bg-white/30 transition-colors" />
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGIONAL COVERAGE ── */}
        <section className="relative py-16 lg:py-24 bg-brand-primary overflow-hidden">
          {/* Decorative topography lines */}
          <div className="absolute top-12 right-0 w-80 h-80 text-brand-light/2 pointer-events-none select-none translate-x-1/4">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
              <path d="M0,30 Q25,15 50,40 T100,20" />
              <path d="M0,45 Q25,30 50,55 T100,35" />
              <path d="M0,60 Q25,45 50,70 T100,50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-white/20 pb-6 mb-16">
              <motion.h2
                {...fadeUp(0)}
                className="text-4xl lg:text-5xl tracking-tight text-brand-light font-light text-center md:text-left mb-4 md:mb-0"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Regional <span className="italic text-brand-gold">Outreach</span>
              </motion.h2>
              <motion.p {...fadeUp(0.05)} className="text-lg uppercase tracking-[0.3em] font-semibold text-white/50 text-center md:text-left">
                6 Provinces across Sri Lanka
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {regions.map((region, i) => (
                <motion.div
                  key={region}
                  {...fadeUp(i * 0.1)}
                  className="bg-white backdrop-blur-xs border border-neutral-200/70 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <MapPin className="h-5 w-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                  <span
                    className="text-lg font-medium text-neutral-900 text-center"
                    style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                  >
                    {region}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDING STORY ── */}
        <section className="relative bg-white py-16 lg:py-24 border-b border-neutral-100 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-10 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">02</span>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <motion.div {...fadeUp(0)} className="mb-16 max-w-7xl">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <span className="text-lg uppercase tracking-[0.3em] font-semibold text-neutral-500">Our Story</span>
                <div className="h-px w-12 bg-brand-secondary" />
              </div>
              <h2
                className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl text-center"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Protecting farmers,
                <br />
                <span className="italic text-brand-primary">building futures.</span>
              </h2>
              <p className="mt-8 text-lg leading-8 text-neutral-600 text-center max-w-3xl mx-auto">
                Today, producers are organized into geographical blocks dedicated to enriching soil structure and uplifting biodiversity. With half of our 24,400 acres already certified organic, we are ambitiously converting the remainder to ensure a 100% sustainable future.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="rounded-[40px] bg-brand-primary p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-14">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-brand-gold">MOPA's Promise</span>
                <div className="h-px w-12 bg-brand-gold" />
              </div>
              <h3
                className="max-w-7xl mx-auto text-3xl leading-tight text-brand-light lg:text-5xl text-center"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Sustainable farming. Fair livelihoods. Uncompromising quality.
              </h3>
            </motion.div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-16 lg:py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.div {...fadeUp(0)}>
                <span className="flex items-center justify-center lg:justify-start gap-3 text-lg uppercase tracking-[0.35em] font-semibold text-neutral-500 mb-6">
                  <span className="h-px w-10 bg-brand-secondary" />
                  Gallery
                  <span className="h-px w-10 bg-brand-secondary" />
                </span>
                <h2
                  className="text-4xl lg:text-5xl tracking-tight text-center lg:text-left"
                  style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                >
                  Life at the
                  <br />
                  Farm Gate.
                </h2>
              </motion.div>
              <motion.p {...fadeUp(0.1)} className="max-w-sm text-lg leading-7 text-neutral-600 text-center lg:text-left">
                A glimpse into the communities and landscapes that make MOPA one of Asia's most celebrated producer organisations.
              </motion.p>
            </div>

            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 md:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200">
              {mopaGallery.map((img, i) => (
                <div
                  key={img.src}
                  className="aspect-square overflow-hidden bg-white relative group cursor-zoom-in"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://placehold.co/400x400?text=MOPA"; }}
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-6 w-6 text-white drop-shadow" />
                  </div>
                </div>
              ))}
            </motion.div>

            {lightboxIndex !== null && (
              <Lightbox images={mopaGallery} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
            )}
          </div>
        </section>

      </div>
    </LazyMotion>
  );
}
