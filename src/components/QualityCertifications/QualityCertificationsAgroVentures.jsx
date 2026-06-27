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
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-sm uppercase tracking-[0.35em] text-white/50"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Agro Ventures Integration
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
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
      <div className="py-24 lg:py-32 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* sticky label col */}
            <motion.div {...fadeUp(0)} className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Strategic Alignment
              </span>

              <h3
                className="text-4xl lg:text-5xl tracking-tight leading-snug"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Driving long-term
                operational excellence.
              </h3>

              <p className="mt-6 text-sm leading-8 text-neutral-600">
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
                    className="hidden sm:block shrink-0 text-sm text-neutral-300 tracking-[0.3em] uppercase pt-1 w-6"
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
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">
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
      <div className="py-24 lg:py-32 bg-brand-light border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-neutral-500 mb-8">
                <span className="h-px w-10 bg-brand-secondary" />
                Enhanced Capabilities
              </span>

              <p
                className="text-3xl lg:text-4xl tracking-tight leading-snug text-neutral-900"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "From compliance
                to continuous
                improvement - quality
                is built into every step."
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="space-y-6">
              <p className="text-sm leading-8 text-neutral-600">
                Our quality systems are designed to go beyond meeting standards.
                Through structured monitoring, advanced technologies, and
                integrated traceability, we create greater transparency and
                reliability throughout the production journey.
              </p>
              <p className="text-sm leading-8 text-neutral-600">
                The result is a resilient operational framework capable of
                consistently delivering premium products that meet the
                expectations of customers and international markets worldwide.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      {/* CLOSING BANNER */}
      <div className="bg-brand-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50 mb-8">
                <span className="h-px w-8 bg-brand-secondary" />
                Sustainable Growth
              </span>

              <h2
                className="text-4xl lg:text-6xl tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
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

export default QualityCertificationsAgroVentures;
