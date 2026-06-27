import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import {
  Globe,
  Leaf,
  Users,
  Award,
} from "lucide-react";

export default function HomeIntro({section}) {
  return (
    <LazyMotion features={domAnimation}>
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-10 top-0 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                About Bio Foods Agro
              </span>
            </div>

            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Connecting Sri Lankan Farmers
              <br />
              with the World.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Sri Lanka's leading organic exporter - connecting thousands of
              local farmers with global markets through certified, sustainable,
              and ethically sourced products since 1993.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button type="button" className="group flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Learn More
              </button>

              {/* <button className="group flex items-center gap-3 rounded-full border border-neutral-300 px-8 py-4 font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:text-neutral-900">
                Download Profile
              </button> */}
            </div>
          </motion.div>

          {/* Right: Image + Stats overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/Home/farmer-male.webp"
                  alt="Farmers in Sri Lanka"
                  className="h-120 w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating second image - bottom right */}
              <div className="absolute -bottom-6 -right-6 h-44 w-44 overflow-hidden rounded-2xl ring-4 ring-white shadow-2xl">
                <img
                  src="/Home/farmer-female.webp"
                  alt="Lady Farmer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}