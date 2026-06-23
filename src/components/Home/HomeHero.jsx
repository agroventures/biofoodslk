import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-light">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full opacity-75 object-cover"
        src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/eco-plus.mp4"
      />
      {/* Background overlay gradient for premium readable text separation */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-primary/60 via-brand-primary/30 to-transparent z-0" />
      
      {/* Decorative vertical line */}
      {/* <div className="absolute left-10 top-0 hidden h-full w-px bg-neutral-300 lg:block" /> */}

      {/* Grid container with explicit responsive vertical alignments */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center lg:items-center gap-10 px-8 pt-24 pb-32 lg:grid-cols-12 lg:gap-16 lg:px-16 xl:px-24">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-white">
            <span className="h-px w-12 bg-brand-secondary" />
            BIOFOODSLK
          </span>

          <h1
            className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-neutral-900 md:text-6xl xl:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Crafted by
            <br />
            Nature.
            <br />
            <span className="text-brand-primary">Refined for the World.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-white md:text-lg">
            Every product begins with carefully selected natural ingredients and
            is thoughtfully crafted to deliver exceptional quality with a
            timeless touch.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 text-white font-medium shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-brand-primary/95">
              Explore Collection
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-neutral-300 bg-white/50 backdrop-blur-xs px-8 py-4 font-medium text-neutral-800 transition duration-300 hover:border-neutral-900 hover:bg-white">
              Our Story
            </button>
          </div>
        </motion.div>

        {/* Stats Column — right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:flex flex-col justify-center gap-4"
        >
          {[
            { value: "30+", label: "Years of Experience", desc: "Trusted by families since 1993", accent: "bg-brand-primary" },
            { value: "100%", label: "Organic Ingredients", desc: "No additives, no compromise", accent: "bg-brand-secondary" },
            { value: "20+", label: "Countries Served", desc: "Taking Sri Lanka's best to the world", accent: "bg-neutral-700" },
          ].map(({ value, label, desc, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="group flex items-stretch gap-0 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm overflow-hidden border border-white/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-1.5 shrink-0 ${accent}`} />
              <div className="flex items-center gap-6 px-6 py-5 w-full">
                <p
                  className="text-5xl font-bold leading-none text-neutral-900 shrink-0"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {value}
                </p>
                <div className="border-l border-neutral-200 pl-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">{label}</p>
                  <p className="mt-1 text-sm text-neutral-700 leading-snug">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden flex-col items-center lg:flex z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
            Scroll
          </span>
          <div className="h-10 w-px bg-neutral-300" />
        </motion.div>
      </div>
    </section>
  );
}