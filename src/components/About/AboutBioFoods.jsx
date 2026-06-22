import { motion } from "framer-motion";
import { Award, Globe, Leaf, Users, TrendingUp, Heart, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const milestones = [
  { year: "1993", title: "Founded in Kandy", description: "A family beginning rooted in organic farming traditions." },
  { year: "2014", title: "Global Recognition", description: "Awarded for leadership in fair trade agriculture." },
  { year: "2018", title: "Growing Reach", description: "Expanded as a leading certified organic exporter." },
  { year: "2024", title: "Today", description: "Trusted by partners across more than 30 countries." },
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

const achievements = [
  { icon: Award, title: "Fair Trade Recognition", description: "International acknowledgment for ethical sourcing and transparent supply chains." },
  { icon: Users, title: "Farmer Communities", description: "Long-term partnerships supporting smallholder farmers across Sri Lanka." },
  { icon: Globe, title: "Global Trust", description: "Certified and distributed across major organic markets worldwide." },
];

export default function AboutBioFoods() {
  return (
    <div className="w-full bg-white text-neutral-950 overflow-hidden">

      {/* ── EDITORIAL INTRO ── */}
      <section className="relative py-28 lg:py-40 border-b border-neutral-100">
        {/* vertical rule */}
        <div className="absolute left-10 top-0 hidden h-full w-px bg-neutral-200 lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-xs uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            About Bio Foods
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Rooted in nature,
              <br />
              <span className="text-brand-primary">grown with care.</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)}>
              <p className="text-lg leading-8 text-neutral-600">
                Since 1993, Bio Foods has worked closely with farming communities
                across Sri Lanka to produce organic food with deep respect for
                people and the environment — from field to table.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {values.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 border border-neutral-200 px-4 py-3 hover:border-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 shrink-0 text-brand-primary" />
                    <span className="text-sm text-neutral-700">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="py-12 px-6 text-center"
            >
              <p className="text-4xl lg:text-5xl font-semibold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl lg:text-6xl mb-20"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Journey
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="relative border-l-2 border-brand-primary pl-6 pb-12 md:pb-0 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6 md:pr-8"
              >
                {/* dot */}
                <span className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-brand-primary md:-left-0 md:-top-[5px] md:left-0" />
                <p className="text-sm font-semibold text-brand-secondary tracking-widest">{m.year}</p>
                <h3 className="mt-2 text-lg font-medium text-neutral-900">{m.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.h2
              {...fadeUp(0)}
              className="text-4xl lg:text-6xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Recognition
              <br />& Trust
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="max-w-md text-neutral-500 text-sm leading-7">
              Over three decades of commitment to ethical agriculture have earned Bio Foods recognition from leading international certifying bodies and trade partners.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group border border-neutral-200 p-8 hover:border-brand-primary transition-colors duration-300"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-brand-light group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-6 text-xl font-medium" style={{ fontFamily: "Cormorant Garamond, serif" }}>{title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <section className="bg-brand-muted border-t border-neutral-200 py-20">
        <motion.div
          {...fadeUp(0)}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
            <span className="h-px w-8 bg-brand-secondary inline-block align-middle mr-3" />
            Est. 1993 · Kandy, Sri Lanka
            <span className="h-px w-8 bg-brand-secondary inline-block align-middle ml-3" />
          </p>
          <h2
            className="text-4xl lg:text-6xl text-neutral-900 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            "From the soil of Sri Lanka<br />to tables around the world."
          </h2>
        </motion.div>
      </section>

    </div>
  );
}
