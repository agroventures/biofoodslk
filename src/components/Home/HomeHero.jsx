import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-light" style={{ backgroundImage: "url('/Home/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-linear-to-r from-white/30 via-white/10 to-transparent z-0" />
      {/* Decorative line */}
      <div className="absolute left-10 top-0 hidden h-full w-px bg-neutral-300 lg:block" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-8 py-16 lg:grid-cols-12 lg:gap-20 lg:px-16 xl:px-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <span className="mb-6 inline-flex items-center gap-3 uppercase tracking-[0.35em] text-xs text-neutral-500">
            <span className="h-px w-12 bg-brand-secondary" />
            BIOFOODSLK
          </span>

          <h1
            className="font-serif text-5xl leading-[1.05] tracking-tight text-neutral-900 md:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Crafted by
            <br />
            Nature.
            <br />
            <span className="text-brand-primary">Refined for the World.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
            Every product begins with carefully selected natural ingredients
            and is thoughtfully crafted to deliver exceptional quality with a
            timeless touch.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="group flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Explore Collection
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-neutral-300 px-8 py-4 transition hover:border-neutral-900 hover:bg-white">
              Our Story
            </button>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-16 top-1/2 z-20 -translate-y-1/2 rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-xl hidden lg:block"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Since</p>
          <h3 className="mt-2 text-3xl font-semibold text-neutral-900">1993</h3>
          <p className="mt-2 text-sm text-neutral-500">Organic Products</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex"
      >
        <span className="mb-3 text-xs uppercase tracking-[0.4em] text-neutral-500">
          Scroll
        </span>

        <div className="h-16 w-px bg-neutral-400" />
      </motion.div>
    </section>
  );
}