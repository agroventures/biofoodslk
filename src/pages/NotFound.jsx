import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const links = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Quality Certifications", href: "/quality-certifications" },
  { label: "Contact", href: "/contact" },
];

function NotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-neutral-950 antialiased flex flex-col">
        <Navbar />

        <main className="relative flex-1 flex items-center overflow-hidden">

          {/* Watermark */}
          <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
            <span className="text-[320px] font-black leading-none text-black/3">404</span>
          </div>

          {/* Organic blob — top left */}
          <div className="absolute top-0 left-0 w-80 h-80 text-brand-primary/4 pointer-events-none -translate-x-1/4 -translate-y-1/4 select-none">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
              <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
            </svg>
          </div>

          {/* Botanical leaf — bottom right */}
          <div className="absolute bottom-0 right-1/4 w-72 h-72 text-brand-gold/5 pointer-events-none translate-y-1/4 select-none hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
              <path d="M50,100 Q45,60 10,40 Q40,40 50,0 Q60,40 90,40 Q55,60 50,100 Z" />
              <path d="M50,100 Q48,70 25,55" />
              <path d="M50,100 Q52,70 75,55" />
              <path d="M50,75 Q47,50 30,35" />
              <path d="M50,75 Q53,50 70,35" />
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 relative z-10 w-full">

            <motion.div {...fadeUp(0)} className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Page Not Found</span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-6xl leading-[0.95] tracking-tight text-neutral-950 sm:text-7xl lg:text-8xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Lost in the
              <br />
              <span className="italic text-brand-primary">harvest fields.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-8 max-w-lg text-lg leading-8 text-neutral-500">
              The page you're looking for has moved, or doesn't exist. Let us guide you back.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Back to Home
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold text-neutral-700 uppercase tracking-[0.15em] transition-all duration-300 hover:border-brand-primary hover:text-brand-primary"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Quick links */}
            <motion.div {...fadeUp(0.4)} className="mt-20 border-t border-neutral-200 pt-10">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-400">Explore</p>
              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-full border border-neutral-200 px-5 py-2 text-sm text-neutral-600 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

export default NotFound;
