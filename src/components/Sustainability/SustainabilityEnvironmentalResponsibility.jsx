import { Globe, Heart, Leaf, Shield, Sprout, Users } from 'lucide-react'
import { LazyMotion, domAnimation, m as motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const environmental = [
  { icon: Sprout, title: 'Soil Regeneration',         description: 'Rebuilding soil health through natural processes that restore long-term fertility.' },
  { icon: Leaf,   title: 'Biodiversity Conservation', description: 'Protecting and enhancing natural ecosystems across every farming landscape.' },
  { icon: Shield, title: 'Chemical-Free Farming',     description: '100% organic practices without synthetic inputs - pure by design.' },
]

const social = [
  { icon: Heart, title: 'Fair Trade Partnerships', description: 'Ethical sourcing and equitable value distribution across the supply chain.' },
  { icon: Users, title: 'Farmer Empowerment',      description: 'Training, resources, and sustainable livelihoods for farming communities.' },
  { icon: Globe, title: 'Community Development',   description: 'Supporting local communities, infrastructure, and long-term social wellbeing.' },
]

function SustainabilityEnvironmentalResponsibility() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full bg-white text-neutral-950">

        {/* ── PAGE TOPIC HEADER ── */}
        <section className="relative border-b border-neutral-100 py-16 lg:py-24 overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">01</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.div {...fadeUp(0)} className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-neutral-500">Environmental &amp; Social</span>
              </div>
              <div className="h-px w-12 bg-brand-secondary" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight text-neutral-950 max-w-4xl mx-auto text-center"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Rooted in the land,
              <br />
              <span className="italic text-brand-primary">responsible by nature.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.15)} className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 mx-auto text-center">
              Every commitment we make - to the soil, to farmers, and to the communities we serve - stems from a belief that doing right by nature means doing right by people.
            </motion.p>
          </div>
        </section>

        {/* ── ENVIRONMENTAL RESPONSIBILITY ── */}
        <section className="relative border-b border-neutral-100 py-16 lg:py-24 overflow-hidden">
          {/* Decorative number */}
          <div className="pointer-events-none absolute left-0 top-0 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">02</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

            {/* Header */}
            <motion.div {...fadeUp(0)} className="mb-16 max-w-4xl mx-auto">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <div className="flex items-center gap-2">
                  <span className="text-sm uppercase tracking-[0.3em] font-semibold text-neutral-500">Environmental</span>
                </div>
                <div className="h-px w-12 bg-brand-secondary" />
              </div>
              <h2
                className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl mx-auto text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Farming that
                <br />
                <span className="italic text-brand-primary">restores the earth.</span>
              </h2>
            </motion.div>

            {/* Side-by-side: image left, editorial list right */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Image column */}
              <motion.div
                {...fadeUp(0.15)}
                className="overflow-hidden rounded-2xl border border-neutral-200 p-2 bg-neutral-50 shadow-inner sticky top-24"
              >
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/hero.webp"
                  alt="Organic farming fields"
                  className="w-full h-150 object-cover rounded-xl"
                />
              </motion.div>

              {/* Editorial list column */}
              <div>
                <motion.p {...fadeUp(0.1)} className="text-lg leading-8 text-neutral-600 mb-10">
                  Every practice is designed to give back to the land - protecting soil, preserving biodiversity, and eliminating harmful inputs entirely.
                </motion.p>

                <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                  {environmental.map((item, index) => (
                    <motion.div
                      key={item.title}
                      {...fadeUp(index * 0.1 + 0.2)}
                      className="group grid gap-4 py-8 transition-all duration-500 grid-cols-12"
                    >
                      <div className="col-span-2">
                        <div className="rounded-2xl bg-brand-primary p-4 shadow-sm w-fit text-brand-light group-hover:scale-105 transition-transform duration-300">
                          <item.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="col-span-10">
                        <h3
                          className="text-2xl tracking-tight text-neutral-950 mb-2"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-neutral-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── SOCIAL RESPONSIBILITY ── */}
        <section className="relative bg-brand-light py-16 lg:py-24 overflow-hidden">
          {/* Decorative number */}
          <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">03</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

            {/* Header */}
            <motion.div {...fadeUp(0)} className="mb-16 max-w-7xl">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-secondary" />
                <div className="flex items-center gap-2">
                  <span className="text-sm uppercase tracking-[0.3em] font-semibold text-neutral-500">Social Impact</span>
                </div>
                <div className="h-px w-12 bg-brand-secondary" />
              </div>
              <h2
                className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl mx-auto text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                People at the
                <br />
                <span className="italic text-brand-primary">heart of every harvest.</span>
              </h2>
            </motion.div>

            {/* Side-by-side: editorial list left, image right */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Cards column */}
              <div className="space-y-6">
                <motion.p {...fadeUp(0.05)} className="text-lg leading-8 text-neutral-600 mb-10">
                  Fair trade is not just a certification - it is a commitment to the people who grow our food and the communities that depend on agriculture.
                </motion.p>

                {social.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeUp(i * 0.08 + 0.1)}
                    className="group rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-start gap-6"
                  >
                    <div className="p-4 rounded-2xl bg-brand-primary text-white shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h3
                        className="text-2xl tracking-tight text-neutral-950 mb-2 leading-tight group-hover:text-brand-primary transition-colors"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-7">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image column */}
              <motion.div {...fadeUp(0.2)} className="sticky top-24 space-y-2">
                <img
                  src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/farmer-male.webp"
                  alt="Farmer community"
                  className="w-full h-150 object-cover rounded-2xl"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* ── CLOSING CTA BAND ── */}
        <section className="overflow-hidden">
          <motion.div {...fadeUp(0)} className="bg-brand-primary py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-brand-gold">Our Commitment</span>
                <div className="h-px w-12 bg-brand-gold" />
              </div>
              <h3
                className="max-w-7xl text-3xl leading-tight lg:text-5xl text-white text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "Sustainability is not what we do on the side - it is the foundation everything is built upon."
              </h3>
              <p className="mt-8 max-w-7xl text-lg leading-8 text-white/80 text-center">
                From seed to shipment - every decision reflects a responsibility to nature and the people who depend on it.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </LazyMotion>
  )
}

export default SustainabilityEnvironmentalResponsibility