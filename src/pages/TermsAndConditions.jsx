import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import {
  Sparkles,
  FileText,
  Scale,
  EyeOff,
  Globe,
  Lock,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import useSEO from "../hooks/useSEO";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const commitments = [
  {
    icon: FileText,
    label: "01",
    title: "General Agreement",
    text: "Accessing this website confirms acceptance of these terms and establishes your agreement with Bio Foods' operational framework.",
  },
  {
    icon: Scale,
    label: "02",
    title: "Intellectual Property",
    text: "Website content, branding, designs, and digital assets remain protected under applicable intellectual property regulations.",
  },
];

const sections = [
  {
    icon: Globe,
    label: "03",
    title: "User Content",
    text: "Any content submitted through this platform may be used for communication, operational, and service improvement purposes.",
  },
  {
    icon: Lock,
    label: "04",
    title: "Third Party Services",
    text: "Bio Foods is not responsible for external platforms, websites, or third-party services accessed through external links.",
  },
];

const prohibited = [
  "Unauthorized reproduction of website assets",
  "Commercial use of protected materials",
  "Data mining or extraction activities",
  "Attempts to disrupt platform operations",
  "Violation of applicable regulations",
  "Unauthorized promotional usage",
];

function TermsAndConditions() {
  const url = window.location.href;
  useSEO({ url, image_alt: "Terms and Conditions" });

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-neutral-950 antialiased">
        <Navbar />

        {/* HERO */}
        <header className="relative overflow-hidden bg-brand-light py-28 lg:py-40">
          <div className="pointer-events-none absolute right-10 top-10 hidden select-none xl:block">
            <span className="text-[280px] font-black leading-none text-black/3">T&C</span>
          </div>

          {/* Organic blob — top left */}
          <div className="absolute top-0 left-0 w-72 h-72 lg:w-96 lg:h-96 text-brand-primary/[0.04] pointer-events-none -translate-x-16 -translate-y-16 select-none">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_120s_linear_infinite]">
              <path d="M45.3,-62.9C57.4,-53.8,65.1,-38.7,71.2,-22.4C77.4,-6.2,81.9,11.2,77.3,26.7C72.7,42.2,58.9,55.8,43.2,64.8C27.4,73.8,9.7,78.2,-7.9,76.5C-25.5,74.9,-43,67.2,-56,54.8C-69,42.4,-77.4,25.4,-79.1,7.5C-80.8,-10.4,-75.7,-29.2,-64.8,-42.6C-53.8,-56,-37,-64,-20.9,-69.1C-4.8,-74.2,10.6,-76.4,26.5,-74.6C42.4,-72.8,45.3,-62.9,45.3,-62.9Z" transform="translate(100, 100)" />
            </svg>
          </div>

          {/* Botanical leaf — bottom center */}
          <div className="absolute bottom-0 left-1/3 w-80 h-80 text-brand-gold/[0.05] pointer-events-none translate-y-1/4 select-none hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
              <path d="M50,100 Q45,60 10,40 Q40,40 50,0 Q60,40 90,40 Q55,60 50,100 Z" />
              <path d="M50,100 Q48,70 25,55" />
              <path d="M50,100 Q52,70 75,55" />
              <path d="M50,75 Q47,50 30,35" />
              <path d="M50,75 Q53,50 70,35" />
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Legal &amp; Governance
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Terms &amp;
              <br />
              <span className="italic text-brand-primary">Conditions.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.15)} className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Understanding the guidelines, responsibilities, and framework governing your interaction
              with Bio Foods digital platforms.
            </motion.p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 relative overflow-hidden">

          {/* Topography lines — right edge */}
          <div className="absolute top-32 right-0 w-72 h-72 text-brand-primary/[0.04] pointer-events-none select-none translate-x-1/4 hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
              <path d="M0,30 Q25,15 50,40 T100,20" />
              <path d="M0,45 Q25,30 50,55 T100,35" />
              <path d="M0,60 Q25,45 50,70 T100,50" />
              <path d="M0,75 Q25,60 50,85 T100,65" />
            </svg>
          </div>

          {/* Second blob — lower left */}
          <div className="absolute bottom-1/3 left-0 w-64 h-64 text-brand-secondary/[0.04] pointer-events-none -translate-x-1/3 select-none hidden lg:block">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full animate-[spin_160s_linear_infinite_reverse]">
              <path d="M38.9,-56.5C50.3,-46.4,59.2,-34.2,64.8,-20C70.4,-5.8,72.8,10.4,68.2,24.2C63.6,38,51.9,49.4,38.4,57.2C24.9,65,9.6,69.2,-5.8,67.7C-21.3,66.2,-36.8,59,-48.4,48C-60,37,-67.8,22.2,-69.4,6.6C-71,-9,-66.4,-25.4,-57.2,-37.6C-48,-49.8,-34.2,-57.8,-20.2,-62C-6.2,-66.2,8,-66.6,20.4,-63C32.8,-59.4,27.5,-66.6,38.9,-56.5Z" transform="translate(100, 100)" />
            </svg>
          </div>

          {/* INTRO GRID */}
          <section className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24 mb-24">
            {/* Left */}
            <motion.div {...fadeUp(0)} className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Agreement Framework
              </span>

              <h2
                className="mt-6 text-4xl leading-tight tracking-tight lg:text-5xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Built on clarity,
                <br />
                <span className="italic text-brand-primary">responsibility, and trust.</span>
              </h2>

              <div className="relative mt-10 overflow-hidden rounded-4xl bg-brand-light p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-10">
                <div className="absolute left-0 top-0 h-full w-1 bg-brand-secondary" />
                <p className="text-xl font-light leading-snug text-neutral-900 lg:text-2xl">
                  Please review these Terms and Conditions carefully before using the Bio Foods website.
                </p>
              </div>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                By accessing this platform, you acknowledge and agree to comply with the policies,
                responsibilities, and conditions outlined below.
              </p>
            </motion.div>

            {/* Right – commitment cards */}
            <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-5">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Key Policies
              </span>

              {commitments.map((card, i) => (
                <motion.div
                  key={card.label}
                  {...fadeUp(i * 0.1)}
                  className="group rounded-4xl bg-brand-light p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex gap-5">
                    <div className="h-fit rounded-2xl bg-brand-primary p-4 text-brand-light transition-colors duration-300 shrink-0">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <h4
                          className="text-xl tracking-tight text-neutral-950"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {card.title}
                        </h4>
                      </div>
                      <p className="leading-7 text-neutral-600">{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PROHIBITED ACTIONS — dark CTA panel */}
          <motion.section
            {...fadeUp(0.1)}
            className="overflow-hidden rounded-[40px] bg-brand-primary p-10 text-white lg:p-14 mb-24"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">Restrictions</span>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="h-fit rounded-2xl bg-white/10 p-4 text-brand-gold shrink-0">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3
                className="text-3xl lg:text-4xl tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Prohibited Actions
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 border-t border-white/10">
              {prohibited.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeUp(index * 0.06)}
                  className="flex gap-4 py-5 px-2 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                >
                  <span
                    className="shrink-0 text-2xl text-brand-gold/70 tabular-nums"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-7 text-white/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* EDITORIAL SECTIONS LIST */}
          <section className="divide-y divide-neutral-200 border-t border-neutral-200 mb-24">
            {sections.map((block, index) => (
              <motion.div
                key={block.label}
                {...fadeUp(index * 0.1)}
                className="group grid gap-6 py-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 lg:contents">
                  <div className="lg:col-span-1">
                    <div className="rounded-2xl bg-brand-primary p-4 shadow-sm w-fit text-brand-light transition-colors duration-300">
                      <block.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3
                    className="text-2xl lg:text-3xl tracking-tight text-neutral-950"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {block.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="max-w-xl text-lg leading-8 text-neutral-600">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* CONTACT PANEL */}
          <motion.section
            {...fadeUp(0.1)}
            className="overflow-hidden rounded-[40px] bg-brand-primary p-10 text-white lg:p-14"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">Get in Touch</span>
            </div>

            <h3
              className="max-w-4xl text-3xl leading-tight lg:text-5xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Legal enquiries welcomed.
            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              For any questions regarding these terms, please reach out to our team directly.
            </p>

            <a
              href="mailto:info@biofoodsagro.com"
              className="mt-10 inline-flex items-center gap-3 text-brand-gold hover:text-white transition-colors duration-200 group"
            >
              <span className="text-lg underline underline-offset-8">info@biofoodsagro.com</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.section>

        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

export default TermsAndConditions;
