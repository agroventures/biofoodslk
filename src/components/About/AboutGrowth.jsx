import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, PackageCheck, Handshake } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const metrics = [
  { value: "30+", label: "Years of Growth" },
  { value: "100%", label: "Organic Output" },
  { value: "30+", label: "Export Markets" },
  { value: "1000s", label: "Farming Partners" },
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Steady Expansion",
    description:
      "From a single farming initiative to an internationally recognised organic brand, growth has been intentional and values-driven.",
  },
  {
    icon: PackageCheck,
    title: "Production Scale",
    description:
      "Collaboration with Agroventures Group strengthened processing capacity without compromising product purity or ethical standards.",
  },
  {
    icon: Handshake,
    title: "Enduring Partnerships",
    description:
      "Long-term relationships with farmers, buyers and certifying bodies remain the foundation of every milestone we reach.",
  },
];

export default function AboutGrowth() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ── FULL-BLEED IMAGE + HEADLINE ── */}
      <div className="relative h-[60vh] min-h-105">
        <img
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/name_board.webp?v=2"
          alt="Growth"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-neutral-950/30 to-transparent" />

        {/* badge */}
        <motion.span
          {...fadeUp(0.1)}
          className="absolute top-10 left-8 lg:left-16 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/70"
        >
          <span className="h-px w-10 bg-brand-secondary" />
          Growth &amp; Evolution
        </motion.span>

        {/* headline pinned to bottom-left */}
        <motion.div
          {...fadeUp(0.2)}
          className="absolute bottom-10 left-8 lg:left-16 max-w-2xl"
        >
          <h2
            className="text-5xl lg:text-7xl leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            From local roots
            <br />
            <span className="text-brand-secondary">to global reach.</span>
          </h2>
        </motion.div>

        {/* corner label */}
        <div className="absolute bottom-10 right-8 lg:right-16 hidden lg:flex items-center gap-2 text-white/50">
          <span className="text-sm uppercase tracking-[0.3em]">Since 1993</span>
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>

      {/* ── METRICS BAND ── */}
      {/* <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="py-10 px-6 text-center"
            >
              <p
                className="text-4xl lg:text-5xl font-semibold text-white"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {m.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/60">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* ── STORY + PILLARS ── */}
      <div className="py-28 lg:py-40 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-16 mb-20 pb-20 border-b border-neutral-100">
            <motion.p
              {...fadeUp(0)}
              className="text-2xl lg:text-3xl leading-snug text-neutral-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "A small farming initiative in Sri Lanka, grown into a trusted organic producer trusted by partners around the world."
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="flex flex-col justify-end gap-5">
              <p className="text-md leading-7 text-neutral-600">
                Our collaboration with Agroventures Group strengthened production capacity while keeping core values unchanged - respect for nature, fairness for farmers, and purity in food.
              </p>
            </motion.div>
          </div>

          {/* pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-brand-primary transition-colors duration-300"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-brand-light group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="mt-6 text-xl font-medium text-center"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {title}
                </h3>
                <p className="mt-3 text-md text-center text-neutral-600 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
