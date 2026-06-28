import {
  LazyMotion,
  domAnimation,
  m as motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { certifications as certData } from "../../data/certifications";

const duplicatedCerts = [...certData, ...certData, ...certData];

const slides = [
  {
    img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/hero.webp",
    label: "MOPA Partnership",
    heading: (
      <>
        10,000+ Farmers,
        <br />
        <span className="text-brand-secondary">One Ethical Alliance</span>
        <br />
        Empowering Sri Lanka.
      </>
    ),
    desc: "The only Sri Lankan company with an exclusive agreement with MOPA (Marginalized Organic Producers Association). Together, we bring certified organic and fair-trade excellence to global markets.",
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
    img: "/Awards/german_sustainability.WebP",
    label: "Award Winning",
    heading: (
      <>
        Globally Recognised
        <br />
        <span className="text-brand-secondary">Award Winning</span>
        <br />
        Excellence.
      </>
    ),
    desc: "Recipients of the German Sustainability Award, Presidential Export Excellence Awards, and the Fairest Fair Trader of the World - honouring over three decades of responsible trade.",
  },
  {
    img: "/Home/hero-4.webp",
    label: "Our People",
    heading: (
      <>
        Crafted by
        <br />
        <span className="text-brand-secondary">Skilled Hands,</span>
        <br />
        Rooted in Care.
      </>
    ),
    desc: "Behind every certified product are generations of dedicated Sri Lankan farmers and workers - the heart of our commitment to quality, fairness, and sustainable livelihoods.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 1000], [0, -60]);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-between">
        {/* Inject Keyframe for Marquee inside the file to guarantee it works without editing tailwind.config.js */}
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 8s;
          }
        }
      `}</style>

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
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/50 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_60%)] z-0" />

        {/* Main Centered Content */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto flex flex-1 max-w-5xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
        >
          {/* Slide Label */}
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 justify-center"
          >
            <span className="h-px w-8 bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/90">
              {slides[current].label}
            </span>
            <span className="h-px w-8 bg-brand-secondary" />
          </motion.div>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl xl:text-7xl"
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
              className="mt-6 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg md:leading-8"
            >
              {slides[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/products"
              className="group flex items-center justify-center gap-3 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Our Team
              <Phone size={18} className="transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Slide Indicator Dots */}
          <div className="mt-10 flex gap-2 justify-center">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-brand-secondary" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Infinite Slider Bottom Bar */}
        <div className="relative z-10 w-full backdrop-blur-sm border-t border-white/10 py-8 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 mb-4">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.4em] text-white/50">
              Certified &amp; Trusted By
            </p>
          </div>

          {/* Marquee Wrapper Track */}
          <div className="relative w-full flex overflow-x-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full py-2">
              {duplicatedCerts.map((cert, idx) => (
                <Link
                  key={`${cert.id}-${idx}`}
                  to="/quality-certifications"
                  title={cert.name}
                  className="flex flex-col items-center justify-center gap-3 w-32 shrink-0 transition-all duration-300 hover:scale-110 drop-shadow-[0_8px_16px_rgba(0,0,0,0.65)]"
                >
                  <div className="w-full flex items-center justify-center h-16">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="h-16 w-full object-contain filter brightness-100"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-center text-[10px] font-bold tracking-wider text-white/80 leading-tight uppercase w-full truncate px-1">
                    {cert.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
