import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Products/OrganicSpices/organi-spices.webp",
    label: "Organic Spices",
    heading: (
      <>
        World's Finest
        <br />
        <span className="text-brand-secondary">Organic Spices</span>
        <br />
        from Sri Lanka.
      </>
    ),
    desc: "The world's first fair-trade certified spice exporter - cinnamon, pepper, cardamom and more, sourced responsibly since 1993.",
  },
  {
    img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Products/CoconutProducts/coconut.jpg",
    label: "Coconut Products",
    heading: (
      <>
        Nature's Gift,
        <br />
        <span className="text-brand-secondary">Coconut Excellence</span>
        <br />
        Delivered Pure.
      </>
    ),
    desc: "Sri Lanka's tree of life - certified organic desiccated coconut, coconut chips and specialty coconut products for health-conscious global markets.",
  },
  {
    img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Products/OrganicSpices/spices-whole/cinnamon_quills.webp",
    label: "True Cinnamon",
    heading: (
      <>
        Authentic Ceylon
        <br />
        <span className="text-brand-secondary">True Cinnamon</span>
        <br />
        for the World.
      </>
    ),
    desc: "Ceylon cinnamon - the real kind - grown in the lush lowlands of Sri Lanka, certified organic and biodynamic for discerning buyers worldwide.",
  },
  {
    img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Products/OrganicSpices/spices-whole/vanilla_beans.webp",
    label: "Vanilla Beans",
    heading: (
      <>
        Pure Organic
        <br />
        <span className="text-brand-secondary">Vanilla Beans</span>
        <br />
        Crafted with Care.
      </>
    ),
    desc: "Hand-harvested, sun-cured vanilla beans carrying the rich aroma of Sri Lanka's fertile highlands - certified organic and fair trade.",
  },
];

const stats = [
  { value: "33+", label: "Years of Excellence", desc: "Organic exports since 1993", accent: "bg-brand-primary" },
  { value: "15K+", label: "Partner Farmers", desc: "Supporting sustainable communities", accent: "bg-brand-secondary" },
  { value: "50+", label: "Export Markets", desc: "Trusted by global buyers", accent: "bg-emerald-600" },
  { value: "20+", label: "Certifications", desc: "Global quality standards", accent: "bg-amber-500" },
];

const certifications = ["USDA Organic", "EU Organic", "Fair Trade", "Demeter", "ISO 22000"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 1000], [0, -60]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sliding Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_50%)] z-0" />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12 xl:px-20"
      >
        {/* Left Side */}
        <div className="lg:col-span-7">
          {/* Slide Label */}
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-12 bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              {slides[current].label}
            </span>
          </motion.div>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {slides[current].heading}
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-neutral-200"
            >
              {slides[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* Certification Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
              >
                {cert}
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Products
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/catalogue"
              className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Download Catalogue
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Slide Dots */}
          <div className="mt-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-brand-secondary" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
              className="group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl"
            >
              <div className="flex items-center gap-6 p-7">
                <div className={`h-16 w-1 rounded-full ${item.accent}`} />
                <div className="min-w-[100px]">
                  <h3 className="text-5xl font-bold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {item.value}
                  </h3>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-200">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 lg:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">Scroll</span>
          <div className="h-12 w-px bg-white/40" />
        </motion.div>
      </button>
    </section>
  );
}
