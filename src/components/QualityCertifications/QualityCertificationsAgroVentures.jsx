import React from "react";
import { Award, Network, Shield, TrendingUp, ArrowUpRight } from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const enhancements = [
  {
    icon: Shield,
    title: "Enhanced Quality Assurance Protocols",
    description:
      "Rigorous verification procedures implemented across every stage of production to ensure consistency, safety, and compliance.",
  },
  {
    icon: Network,
    title: "Integrated Traceability Systems",
    description:
      "Digital tracking systems provide complete visibility from cultivation and sourcing through export and delivery.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement Framework",
    description:
      "Performance-driven methodologies focused on innovation, efficiency, and sustainable operational excellence.",
  },
  {
    icon: Award,
    title: "Advanced Processing Technologies",
    description:
      "Modern facilities and technologies designed to preserve product quality while maximising value creation.",
  },
];

function QualityCertificationsAgroVentures() {
  return (
    <LazyMotion features={domAnimation}>
    <section className="w-full bg-white text-neutral-950 border-t border-neutral-100">

      {/* INTRO - dark split */}
      <div className="relative bg-brand-primary overflow-hidden">
        {/* Topography lines */}
        <div className="absolute top-0 right-0 w-80 h-full text-white/4 pointer-events-none select-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
            <path d="M0,30 Q25,15 50,40 T100,20" />
            <path d="M0,45 Q25,30 50,55 T100,35" />
            <path d="M0,60 Q25,45 50,70 T100,50" />
            <path d="M0,75 Q25,60 50,85 T100,65" />
          </svg>
        </div>
        {/* Organic blob — bottom left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 text-white/3 pointer-events-none -translate-x-1/4 translate-y-1/4 select-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_140s_linear_infinite_reverse]">
            <path d="M38.9,-56.5C50.3,-46.4,59.2,-34.2,64.8,-20C70.4,-5.8,72.8,10.4,68.2,24.2C63.6,38,51.9,49.4,38.4,57.2C24.9,65,9.6,69.2,-5.8,67.7C-21.3,66.2,-36.8,59,-48.4,48C-60,37,-67.8,22.2,-69.4,6.6C-71,-9,-66.4,-25.4,-57.2,-37.6C-48,-49.8,-34.2,-57.8,-20.2,-62C-6.2,-66.2,8,-66.6,20.4,-63C32.8,-59.4,27.5,-66.6,38.9,-56.5Z" transform="translate(100, 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-base uppercase tracking-[0.35em] text-white/50"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Agro Ventures Integration
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white"
              style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
            >
              Strengthened by
              <br />
              <span className="text-brand-secondary">Agro Ventures.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-base leading-8 text-white/60">
              The integration with Agro Ventures represents an important step
              forward in our commitment to quality, innovation, and operational
              excellence. By combining expertise, technology, and governance,
              we continue to strengthen every aspect of our value chain.
            </motion.p>
          </div>

        </div>
      </div>

      {/* ENHANCEMENTS - numbered rows */}
      <div className="relative py-24 lg:py-32 border-b border-neutral-100 overflow-hidden">
        {/* Botanical leaf — top right */}
        <div className="absolute top-0 right-0 w-72 h-72 text-brand-gold/5 pointer-events-none translate-x-1/4 -translate-y-1/4 select-none hidden lg:block">
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

            {/* sticky label col */}
            <motion.div {...fadeUp(0)} className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 text-base uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Strategic Alignment
              </span>

              <h3
                className="text-4xl lg:text-5xl tracking-tight leading-snug"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Driving long-term
                operational excellence.
              </h3>

              <p className="mt-6 text-base leading-8 text-neutral-600">
                Through this integration, Bio Foods benefits from enhanced
                governance structures, improved operational efficiencies, and
                stronger quality management systems - supporting sustainable
                growth at every level.
              </p>
            </motion.div>

            {/* rows col */}
            <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {enhancements.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.08)}
                  className="group flex gap-6 py-8 hover:bg-brand-light px-4 -mx-4 transition-colors duration-300"
                >
                  {/* index */}
                  <span
                    className="hidden sm:block shrink-0 text-base text-neutral-300 tracking-[0.3em] uppercase pt-1 w-6"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* icon box */}
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 bg-brand-light group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <h4
                      className="text-lg text-neutral-900"
                      style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                    >
                      {title}
                    </h4>
                    <p className="mt-2 text-base leading-7 text-neutral-600">
                      {description}
                    </p>
                    <div className="mt-4 h-px w-0 group-hover:w-10 bg-brand-secondary transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* PULL-QUOTE SECTION */}
      <div className="relative py-24 lg:py-32 bg-brand-light border-b border-neutral-200 overflow-hidden">
        {/* Organic blob — bottom right */}
        <div className="absolute bottom-0 right-0 w-72 h-72 text-brand-primary/4 pointer-events-none translate-x-1/4 translate-y-1/4 select-none hidden lg:block">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
            <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-base uppercase tracking-[0.35em] text-neutral-500 mb-8">
                <span className="h-px w-10 bg-brand-secondary" />
                Enhanced Capabilities
              </span>

              <p
                className="text-3xl lg:text-4xl tracking-tight leading-snug text-neutral-900"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                "From compliance
                to continuous
                improvement - quality
                is built into every step."
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="space-y-6">
              <p className="text-base leading-8 text-neutral-600">
                Our quality systems are designed to go beyond meeting standards.
                Through structured monitoring, advanced technologies, and
                integrated traceability, we create greater transparency and
                reliability throughout the production journey.
              </p>
              <p className="text-base leading-8 text-neutral-600">
                The result is a resilient operational framework capable of
                consistently delivering premium products that meet the
                expectations of customers and international markets worldwide.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      {/* CLOSING BANNER */}
      <div className="relative bg-brand-primary py-24 lg:py-32 overflow-hidden">
        {/* Topography lines — left */}
        <div className="absolute top-0 left-0 w-72 h-full text-white/4 pointer-events-none select-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
            <path d="M0,30 Q25,15 50,40 T100,20" />
            <path d="M0,45 Q25,30 50,55 T100,35" />
            <path d="M0,60 Q25,45 50,70 T100,50" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-base uppercase tracking-[0.35em] text-white/50 mb-8">
                <span className="h-px w-8 bg-brand-secondary" />
                Sustainable Growth
              </span>

              <h2
                className="text-4xl lg:text-6xl tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Building stronger
                foundations for
                the future.
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col justify-end gap-8">
              <p className="text-base leading-8 text-white/60">
                By combining operational expertise, modern technology, and
                internationally recognised quality frameworks, we continue to
                elevate our standards and deliver exceptional value to customers
                around the world.
              </p>

              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-base text-white uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-colors duration-300"
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

export default QualityCertificationsAgroVentures;
