import { motion } from "framer-motion";
import {
  Globe,
  Leaf,
  Users,
  Award,
} from "lucide-react";

export default function HomeIntro() {
  const highlights = [
    {
      icon: <Award size={22} />,
      value: "30+",
      label: "Years of Excellence",
    },
    {
      icon: <Users size={22} />,
      value: "15,000+",
      label: "Partner Farmers",
    },
    {
      icon: <Globe size={22} />,
      value: "50+",
      label: "Global Markets",
    },
    {
      icon: <Leaf size={22} />,
      value: "100%",
      label: "Sustainable Commitment",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-40">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_45%)]" />

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
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
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
              <button className="group flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Learn More
              </button>

              <button className="group flex items-center gap-3 rounded-full border border-neutral-300 px-8 py-4 font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:text-neutral-900">
                Download Profile
              </button>
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
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/hero.webp"
                alt="Sri Lankan organic farm"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
            </div>
            {/* Stat pills over image */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3">
                  <div className="text-white">{item.icon}</div>
                  <div>
                    <p className="text-lg font-bold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>{item.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/70">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}