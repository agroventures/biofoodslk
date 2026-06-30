import React from "react";
import { certifications } from "../../data/certifications";
import {
  ShieldCheck, Beaker, ClipboardCheck, Search,
  Microscope, BadgeCheck, Shield, Award,
  FileCheck, Network, TrendingUp, Globe, ArrowUpRight,
} from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const STATS = [
  { value: "20+",    label: "Global Certifications",  icon: Award },
  { value: "100%",   label: "Traceable Supply Chain", icon: Shield },
  { value: "ISO",    label: "Certified Systems",       icon: BadgeCheck },
  { value: "Global", label: "Export Standards",        icon: Globe },
];

const procedures = [
  { icon: Search,        title: "Quality Control",          desc: "Prevention, detection and monitoring procedures implemented throughout every production stage." },
  { icon: ClipboardCheck,title: "Quality Assurance",        desc: "Continuous verification systems ensure compliance with international quality requirements." },
  { icon: ShieldCheck,   title: "Internal Control System",  desc: "Comprehensive monitoring framework supporting organic and biodynamic integrity." },
  { icon: Beaker,        title: "Research & Development",   desc: "Innovation-driven product development focused on quality, efficiency and sustainability." },
];

const qaItems = [
  { icon: Microscope, title: "Laboratory Testing",       description: "Comprehensive physical, chemical and microbiological testing procedures." },
  { icon: BadgeCheck, title: "ISO Certified Operations", description: "International systems management across every processing facility." },
  { icon: Shield,     title: "HACCP Food Safety",        description: "Critical control point monitoring at every stage of production." },
  { icon: FileCheck,  title: "Certification Verification", description: "Regular audits and third-party validation against international standards." },
  { icon: Network,    title: "Traceability Validation",  description: "Complete product traceability from cultivation through export distribution." },
  { icon: Award,      title: "GMP Manufacturing",        description: "Good Manufacturing Practice standards upheld across all facilities." },
];

function QualityCertificationsDetails() {
  return (
    <LazyMotion features={domAnimation}>
    <section className="w-full bg-white text-neutral-950">

      {/* INTRO */}
      <div className="relative py-24 lg:py-36 border-b border-neutral-100 overflow-hidden">
        {/* Organic blob — top right */}
        <div className="absolute top-0 right-0 w-80 h-80 text-brand-primary/4 pointer-events-none translate-x-1/4 -translate-y-1/4 select-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
            <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-sm uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Quality & Certifications
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight leading-[1.05]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Certified excellence,
              <br />
              <span className="text-brand-primary">trusted worldwide.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-lg leading-8 text-neutral-600">
              Internationally recognised certifications, rigorous quality systems, and complete traceability - ensuring consistency, safety, and sustainability throughout the value chain.
            </motion.p>
          </div>

        </div>
      </div>

      {/* STATS BAND */}
      <div className="relative bg-brand-primary overflow-hidden">
        {/* Topography lines */}
        <div className="absolute top-0 right-0 w-72 h-full text-white/4 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
            <path d="M0,30 Q25,15 50,40 T100,20" />
            <path d="M0,45 Q25,30 50,55 T100,35" />
            <path d="M0,60 Q25,45 50,70 T100,50" />
            <path d="M0,75 Q25,60 50,85 T100,65" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="py-10 px-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-4xl lg:text-5xl text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/50">{label}</p>
              </div>
              <Icon className="h-4 w-4 text-white/20 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRUST LOGOS */}
      <div className="border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            {...fadeUp(0)}
            className="grid gap-px bg-neutral-200 border border-neutral-200"
            style={{ gridTemplateColumns: "repeat(9, minmax(0, 1fr))" }}
          >
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white flex items-center justify-center py-6 px-4">
                <img src={cert.img} alt={cert.name} className="h-10 w-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* QUALITY FRAMEWORK - numbered rows */}
      <div className="relative py-24 lg:py-32 border-b border-neutral-100 overflow-hidden">
        {/* Botanical leaf — bottom left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 text-brand-gold/5 pointer-events-none -translate-x-1/4 translate-y-1/4 select-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
            <path d="M50,100 Q45,60 10,40 Q40,40 50,0 Q60,40 90,40 Q55,60 50,100 Z" />
            <path d="M50,100 Q48,70 25,55" />
            <path d="M50,100 Q52,70 75,55" />
            <path d="M50,75 Q47,50 30,35" />
            <path d="M50,75 Q53,50 70,35" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* sticky label */}
            <motion.div {...fadeUp(0)} className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Quality Framework
              </span>
              <h3
                className="text-4xl lg:text-5xl tracking-tight leading-snug"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Built on rigorous
                systems and continuous
                improvement.
              </h3>
            </motion.div>

            {/* rows */}
            <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {procedures.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.08)}
                  className="group flex gap-6 py-8 hover:bg-brand-light px-4 -mx-4 transition-colors duration-300"
                >
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 bg-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 text-brand-light transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-lg text-neutral-900"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{desc}</p>
                    <div className="mt-4 h-px w-0 group-hover:w-10 bg-brand-secondary transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* PULL-QUOTE */}
      <div className="relative py-24 lg:py-32 bg-brand-light border-b border-neutral-200 overflow-hidden">
        {/* Counter-rotating blob — right */}
        <div className="absolute top-1/2 right-0 w-64 h-64 text-brand-secondary/5 pointer-events-none translate-x-1/3 -translate-y-1/2 select-none hidden lg:block">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_160s_linear_infinite_reverse]">
            <path d="M38.9,-56.5C50.3,-46.4,59.2,-34.2,64.8,-20C70.4,-5.8,72.8,10.4,68.2,24.2C63.6,38,51.9,49.4,38.4,57.2C24.9,65,9.6,69.2,-5.8,67.7C-21.3,66.2,-36.8,59,-48.4,48C-60,37,-67.8,22.2,-69.4,6.6C-71,-9,-66.4,-25.4,-57.2,-37.6C-48,-49.8,-34.2,-57.8,-20.2,-62C-6.2,-66.2,8,-66.6,20.4,-63C32.8,-59.4,27.5,-66.6,38.9,-56.5Z" transform="translate(100, 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-8">
              <span className="h-px w-10 bg-brand-secondary" />
              Organic Certification
            </span>
            <p
              className="text-3xl lg:text-4xl tracking-tight leading-snug text-neutral-900"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "What makes certified
              organic production
              fundamentally different?"
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="space-y-5">
            <p className="text-sm leading-8 text-neutral-600">
              Strict compliance across cultivation, harvesting, processing, and distribution - every stage monitored for environmental responsibility and product integrity.
            </p>
            <p className="text-sm leading-8 text-neutral-600">
              Transparency, consumer confidence, and global market access - supporting sustainable farming and long-term ecosystem health.
            </p>
          </motion.div>

        </div>
      </div>

      {/* CERTIFICATIONS GRID */}
      <div className="relative py-24 lg:py-32 border-b border-neutral-100 overflow-hidden">
        {/* Topography lines — left edge */}
        <div className="absolute top-1/4 left-0 w-64 h-64 text-brand-primary/4 pointer-events-none -translate-x-1/4 select-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
            <path d="M0,30 Q25,15 50,40 T100,20" />
            <path d="M0,45 Q25,30 50,55 T100,35" />
            <path d="M0,60 Q25,45 50,70 T100,50" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Global Certifications
              </span>
              <h3
                className="text-4xl lg:text-5xl tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                International standards
                <br />
                recognised worldwide.
              </h3>
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="max-w-sm text-sm leading-7 text-neutral-500">
              {certifications.length} active certifications spanning organic farming,
              food safety, fair trade, and international market access.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                {...fadeUp(i * 0.05)}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 h-14 flex items-center">
                  <img src={cert.img} alt={cert.name} className="max-h-12 max-w-36 object-contain" />
                </div>
                <h4
                  className="mb-3 text-xl tracking-tight text-neutral-950"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {cert.name}
                </h4>
                <p className="text-sm leading-7 text-neutral-500 flex-1">{cert.desc}</p>
                <div className="mt-6 h-px w-0 group-hover:w-10 bg-brand-secondary transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* QA SYSTEMS - 3-col grid */}
      <div className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Quality Assurance
              </span>
              <h3
                className="text-4xl lg:text-5xl tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Every product undergoes
                <br />
                comprehensive verification.
              </h3>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200">
            {qaItems.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.08)}
                className="group p-8 hover:bg-brand-light transition-colors duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 bg-brand-primary transition-colors duration-300 mb-5">
                  <Icon className="h-4 w-4 text-brand-light transition-colors duration-300" />
                </div>
                <h4
                  className="text-lg text-neutral-900 mb-3"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {title}
                </h4>
                <p className="text-sm leading-7 text-neutral-600">{description}</p>
                <div className="mt-5 h-px w-0 group-hover:w-8 bg-brand-secondary transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* CLOSING BANNER */}
      <div className="relative bg-brand-primary py-24 lg:py-32 overflow-hidden">
        {/* Botanical leaf — top right */}
        <div className="absolute top-0 right-0 w-80 h-80 text-white/4 pointer-events-none translate-x-1/4 -translate-y-1/4 select-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
            <path d="M50,100 Q45,60 10,40 Q40,40 50,0 Q60,40 90,40 Q55,60 50,100 Z" />
            <path d="M50,100 Q48,70 25,55" />
            <path d="M50,100 Q52,70 75,55" />
            <path d="M50,75 Q47,50 30,35" />
            <path d="M50,75 Q53,50 70,35" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50 mb-8">
                <span className="h-px w-8 bg-brand-secondary" />
                Quality Commitment
              </span>
              <h2
                className="text-4xl lg:text-6xl tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Certified quality,
                <br />
                from farm to export.
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col justify-end gap-8">
              <p className="text-base leading-8 text-white/60">
                Rigorous testing, traceability systems, and internationally recognised standards - every product meets the expectations of customers worldwide.
              </p>
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-sm text-white uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
    </LazyMotion>
  );
}

export default QualityCertificationsDetails;
