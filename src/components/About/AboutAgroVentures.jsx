import React from "react";
import { Building2, Factory, Ship, Network, TrendingUp, Globe, ArrowUpRight } from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { companies } from "../../data/companies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const expertise = [
  { icon: Building2, title: "Plantation Development", description: "Development and management of sustainable agricultural estates." },
  { icon: Factory,   title: "Advanced Processing",   description: "Modern food processing and value-added manufacturing." },
  { icon: Ship,      title: "Global Trade",          description: "Export logistics and international market access." },
];

const advantages = [
  { icon: Network,   title: "Large-Scale Infrastructure", description: "Access to operational infrastructure across the value chain." },
  { icon: TrendingUp,title: "Investment-Backed Growth",   description: "Strategic resources supporting long-term expansion." },
  { icon: Globe,     title: "Global Reach",               description: "Established distribution channels in international markets." },
];

export default function AboutAgroVentures() {
  return (
    <LazyMotion features={domAnimation}>
    <section className="w-full bg-white text-neutral-950 border-y border-neutral-100">

      {/* INTRO */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.span
            {...fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-10 text-base font-semibold uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Parent Group
            <span className="h-px w-10 bg-brand-secondary" />
          </motion.span>

          <div className="flex flex-col items-center text-center gap-8">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl tracking-tight leading-[1.05]"
              style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
            >
              Agro Ventures
              <br />
              <span className="text-brand-primary">Group</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-lg leading-8 text-neutral-600 max-w-2xl">
              Bio Foods operates as part of Agro Ventures Group - a diversified agribusiness connecting farming, processing, and international trade across Sri Lanka and beyond.
            </motion.p>
          </div>

        </div>
      </div>

      {/* DARK BAND */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {[
            { value: "8+",   label: "Group Companies" },
            { value: "5+",  label: "Years in Agribusiness" },
            { value: "Global", label: "Market Presence" },
          ].map((s) => (
            <motion.div key={s.label} {...fadeUp()} className="py-10 px-8 flex items-center justify-center gap-4">
              <div>
                <p className="text-4xl lg:text-5xl text-white text-center" style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}>
                  {s.value}
                </p>
                <p className="mt-1 text-base uppercase tracking-[0.25em] text-white/50">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EXPERTISE + ADVANTAGES */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* EXPERTISE */}
          <div>
            <motion.p {...fadeUp(0)} className="text-base uppercase tracking-[0.35em] text-brand-primary mb-8 text-center lg:text-left">
              Areas of Expertise
            </motion.p>
            <div className="space-y-0 divide-y divide-neutral-200 border-y border-neutral-200">
              {expertise.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.1)}
                  className="group flex gap-5 py-7 hover:bg-brand-light px-4 -mx-4 transition-colors duration-300"
                >
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 bg-brand-primary group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 text-brand-light group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
                    <p className="mt-1 text-md leading-7 text-neutral-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ADVANTAGES */}
          <div>
            <motion.p {...fadeUp(0)} className="text-base uppercase tracking-[0.35em] text-brand-primary mb-8 text-center lg:text-left">
              Strategic Advantages
            </motion.p>
            <div className="space-y-0 divide-y divide-neutral-200 border-y border-neutral-200">
              {advantages.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.1)}
                  className="group flex gap-5 py-7 hover:bg-brand-light px-4 -mx-4 transition-colors duration-300"
                >
                  <div className="shrink-0 flex items-center justify-center h-10 w-10 bg-brand-primary group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="h-4 w-4 text-brand-light group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
                    <p className="mt-1 text-md leading-7 text-neutral-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* GROUP COMPANIES */}
      <div className="border-t border-neutral-100 py-24 lg:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div {...fadeUp(0)}>
              <span className="flex items-center justify-center font-semibold gap-3 text-base uppercase tracking-[0.35em] text-neutral-500 mb-6">
                <span className="h-px w-10 bg-brand-secondary" />
                Group Companies
                <span className="h-px w-10 bg-brand-secondary" />
              </span>
              <h3
                className="text-4xl lg:text-5xl tracking-tight text-center lg:text-left"
                style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
              >
                Working together
                <br />
                across the value chain.
              </h3>
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="max-w-sm text-md leading-7 text-neutral-600 text-center lg:text-left">
              Eight companies under one group - each contributing to a connected, resilient agribusiness ecosystem.
            </motion.p>
          </div>

          {/* Desktop grid */}
          <motion.div
            {...fadeUp(0.15)}
            className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-px bg-neutral-200 border border-neutral-200"
          >
            {companies.map((item) => (
              <div
                key={item.id}
                className="group h-24 bg-white flex items-center justify-center p-4 hover:bg-brand-primary transition-colors duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView={2}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{ 480: { slidesPerView: 3 } }}
            >
              {companies.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-20 bg-white border border-neutral-200 flex items-center justify-center p-4">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

    </section>
    </LazyMotion>
  );
}
