import React from "react";
import { certifications } from "../../data/certifications";
import {
  ShieldCheck, Beaker, ClipboardCheck, Search,
  Microscope, BadgeCheck, Shield, Award,
  FileCheck, Network, TrendingUp, Globe, ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="w-full bg-white text-neutral-950">

      {/* INTRO */}
      <div className="py-24 lg:py-36 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-xs uppercase tracking-[0.35em] text-neutral-500"
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
              Every product is supported by internationally recognised
              certifications, rigorous quality systems, and complete traceability
              processes that ensure consistency, safety, and sustainability
              throughout the value chain.
            </motion.p>
          </div>

        </div>
      </div>

      {/* STATS BAND */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="py-10 px-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-4xl lg:text-5xl text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">{label}</p>
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
            className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200"
          >
            {[
              { src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/ICS_logos.avif", alt: "ICS" },
              { src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/Foodsafety.avif", alt: "Food Safety" },
            ].map((logo) => (
              <div key={logo.alt} className="bg-white flex items-center justify-center py-10 px-8">
                <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* QUALITY FRAMEWORK — numbered rows */}
      <div className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* sticky label */}
            <motion.div {...fadeUp(0)} className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
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
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className="group flex gap-6 py-8 hover:bg-brand-light px-4 -mx-4 transition-colors duration-300"
                >
                  <span className="hidden sm:block shrink-0 text-xs text-neutral-300 tracking-[0.3em] uppercase pt-1 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 bg-brand-light group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
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
      <div className="py-24 lg:py-32 bg-brand-light border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500 mb-8">
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

          <motion.div {...fadeUp(0.15)} className="space-y-6">
            <p className="text-sm leading-8 text-neutral-600">
              Organic certification requires strict compliance across cultivation,
              harvesting, processing and distribution. Every stage is monitored
              to ensure environmental responsibility and product integrity.
            </p>
            <p className="text-sm leading-8 text-neutral-600">
              These certifications provide transparency, consumer confidence and
              global market access while supporting sustainable farming practices
              and long-term ecosystem health.
            </p>
          </motion.div>

        </div>
      </div>

      {/* CERTIFICATIONS GRID */}
      <div className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
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

          <motion.div
            {...fadeUp(0.1)}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                {...fadeUp(i * 0.04)}
                className="group bg-white p-6 hover:bg-brand-light transition-colors duration-300 flex flex-col"
              >
                {/* logo */}
                <div className="h-20 flex items-center justify-start mb-5">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="max-h-16 max-w-[120px] object-contain"
                  />
                </div>

                {/* name */}
                <h4
                  className="text-base text-neutral-900 mb-3 leading-snug"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {cert.name}
                </h4>

                {/* desc — clipped */}
                <p className="text-xs leading-6 text-neutral-500 line-clamp-3 flex-1">
                  {cert.desc}
                </p>

                <div className="mt-4 h-px w-0 group-hover:w-8 bg-brand-secondary transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* QA SYSTEMS — 3-col grid */}
      <div className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
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
                key={i}
                {...fadeUp(i * 0.08)}
                className="group p-8 hover:bg-brand-light transition-colors duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 bg-brand-light group-hover:bg-brand-primary transition-colors duration-300 mb-5">
                  <Icon className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
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
      <div className="bg-brand-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50 mb-8">
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
                Our commitment to quality extends beyond certification. Through
                rigorous testing, traceability systems and internationally
                recognised standards, we ensure every product meets the
                expectations of customers worldwide.
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
  );
}

export default QualityCertificationsDetails;
