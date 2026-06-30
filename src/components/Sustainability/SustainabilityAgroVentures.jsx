import { Award, Droplet, FileCheck, Globe, Heart, Leaf, Shield, Sparkles, Sprout, TrendingUp, Users } from 'lucide-react'
import { LazyMotion, domAnimation, m as motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const environmentalStrategies = [
  { icon: Sprout,     title: 'Regenerative Agriculture',          description: 'Long-term soil health and ecosystem vitality.' },
  { icon: Droplet,    title: 'Water Resource Management',         description: 'Efficient irrigation and conservation practices.' },
  { icon: Leaf,       title: 'Biodiversity Preservation',         description: 'Protecting diverse farming ecosystems.' },
  { icon: TrendingUp, title: 'Environmental Footprint Reduction', description: 'Optimized processes minimizing impact.' },
]

const socialResponsibility = [
  { icon: Users,  title: 'Farmer Support Programs', description: 'Formalized assistance and development initiatives.' },
  { icon: Globe,  title: 'Community Development',   description: 'Infrastructure and social program investments.' },
  { icon: Award,  title: 'Capacity Building',       description: 'Knowledge transfer and skills development.' },
  { icon: Heart,  title: 'Economic Participation',  description: 'Inclusive opportunities across rural networks.' },
]

const governance = [
  { icon: FileCheck,  title: 'Standardized Operational Policies', description: 'Consistent frameworks across all operations.' },
  { icon: Shield,     title: 'International Compliance',          description: 'Alignment with global standards and regulations.' },
  { icon: TrendingUp, title: 'Monitoring & Reporting',            description: 'Continuous performance tracking systems.' },
  { icon: Award,      title: 'Sustainability Benchmarking',       description: 'Long-term goals and progress measurement.' },
]

function SustainabilityAgroVentures() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white text-neutral-950 border-t border-neutral-100">

        {/* ── PAGE TOPIC HEADER ── */}
        <section className="relative border-b border-neutral-100 py-16 lg:py-24 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">04</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.div {...fadeUp(0)} className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Structured Excellence</span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight text-neutral-950 max-w-4xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Agroventures
              <br />
              <span className="italic text-brand-primary">ESG Framework</span>
            </motion.h1>

            <motion.div {...fadeUp(0.15)} className="mt-8 grid lg:grid-cols-2 gap-12 max-w-5xl">
              <p className="text-lg leading-8 text-neutral-600">
                Sustainability within Bio Foods is deeply rooted in its origins - elevated through Agroventures Group into a <span className="font-semibold text-neutral-900">structured, measurable, and future-focused ESG</span> framework.
              </p>
              <p className="text-lg leading-8 text-neutral-600">
                This ensures sustainability is not a standalone initiative, but an integrated system embedded across all operations - environmental, social, and governance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ── */}

        {/* ── ENVIRONMENTAL STEWARDSHIP ── */}
        <div className="border-b border-neutral-100 py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <motion.div {...fadeUp(0)} className="mb-16">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-secondary" />
                  <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Environmental</span>
                </div>
              </div>
              <h3
                className="text-4xl lg:text-5xl tracking-tight text-neutral-950"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Environmental <span className="italic text-brand-primary">Stewardship</span>
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Editorial list */}
              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {environmentalStrategies.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp(i * 0.1)}
                    className="group grid grid-cols-12 gap-4 py-8 transition-all duration-500"
                  >
                    <div className="col-span-2">
                      <div className="rounded-2xl bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <h4
                        className="text-2xl tracking-tight text-neutral-950 mb-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-base leading-7 text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <motion.div {...fadeUp(0.2)} className="sticky top-24 space-y-2">
                <img
                  src="/ProcessingFacility/milling-and-drying.webp"
                  alt="Sustainable processing"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* ── SOCIAL RESPONSIBILITY ── */}
        <div className="border-b border-neutral-100 py-16 lg:py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <motion.div {...fadeUp(0)} className="mb-16">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-secondary" />
                  <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Social</span>
                </div>
              </div>
              <h3
                className="text-4xl lg:text-5xl tracking-tight text-neutral-950"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Social <span className="italic text-brand-primary">Responsibility</span>
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Image */}
              <motion.div {...fadeUp(0.1)} className="sticky top-24 space-y-2 order-last lg:order-first">
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Sustainability/csr.webp"
                  alt="Farmer community"
                  className="w-full h-150 object-cover rounded-2xl"
                />
              </motion.div>

              {/* Editorial list */}
              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {socialResponsibility.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp(i * 0.1 + 0.1)}
                    className="group grid grid-cols-12 gap-4 py-8 transition-all duration-500"
                  >
                    <div className="col-span-2">
                      <div className="rounded-2xl bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <h4
                        className="text-2xl tracking-tight text-neutral-950 mb-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-base leading-7 text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* ── GOVERNANCE & ACCOUNTABILITY ── */}
        <div className="border-b border-neutral-100 py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <motion.div {...fadeUp(0)} className="mb-16">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-secondary" />
                  <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Governance</span>
                </div>
              </div>
              <h3
                className="text-4xl lg:text-5xl tracking-tight text-neutral-950"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Governance &amp; <span className="italic text-brand-primary">Accountability</span>
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Editorial list */}
              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {governance.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp(i * 0.1)}
                    className="group grid grid-cols-12 gap-4 py-8 transition-all duration-500"
                  >
                    <div className="col-span-2">
                      <div className="rounded-2xl bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <h4
                        className="text-2xl tracking-tight text-neutral-950 mb-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-base leading-7 text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <motion.div {...fadeUp(0.2)} className="sticky top-24 space-y-2">
                <img
                  src="/ProcessingFacility/frozen-herbs.webp"
                  alt="Quality controlled facility"
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/ProcessingFacility/coconut/1.webp"
                    alt="Coconut processing"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <img
                    src="/ProcessingFacility/coconut/2.webp"
                    alt="Processing standards"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* ── CLOSING CTA BAND ── */}
        <div className="overflow-hidden">
          <motion.div {...fadeUp(0)} className="bg-brand-primary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">ESG Philosophy</span>
              </div>
              <h3
                className="max-w-7xl text-3xl leading-tight lg:text-5xl text-white items-center text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "Through this structured ESG approach, sustainability is not only upheld - it is continuously improved, measured, and aligned with global expectations."
              </h3>
              <p className="mt-8 max-w-7xl text-lg leading-8 text-white/80 items-center text-center">
                Environmental stewardship, social responsibility, and transparent governance - working together as one unified framework.
              </p>
            </div>
          </motion.div>
        </div>

      </section>
    </LazyMotion>
  )
}

export default SustainabilityAgroVentures
