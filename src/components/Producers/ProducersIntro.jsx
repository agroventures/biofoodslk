import { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import {
  Users,
  MapPin,
  Sprout,
  Heart,
  Award,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";
import Lightbox from "../shared/Lightbox";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const stats = [
  { value: "10,050+", label: "Farmer Families", icon: Users },
  { value: "24,400", label: "Acres Outreach", icon: Sprout },
  { value: "06", label: "Provinces", icon: MapPin },
];

const regions = [
  "Central",
  "Uva",
  "Wayamba",
  "Down-South",
  "North-East",
  "Western",
];

const mopaGallery = [
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/1.webp",
    alt: "MOPA 1",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/2.webp",
    alt: "MOPA 2",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/3.webp",
    alt: "MOPA 3",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/4.webp",
    alt: "MOPA 4",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/5.webp",
    alt: "MOPA 5",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/6.webp",
    alt: "MOPA 6",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/7.webp",
    alt: "MOPA 7",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/8.webp",
    alt: "MOPA 8",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/9.webp",
    alt: "MOPA 9",
  },
  {
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/10.webp",
    alt: "MOPA 10",
  },
];

export default function ProducersIntro() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  return (
    <LazyMotion features={domAnimation}>
    <div className="w-full bg-white text-neutral-950 overflow-hidden">
      {/* EDITORIAL INTRO */}
      <section className="py-28 lg:py-40 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-sm uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Marginalized Organic Producers&apos; Association (MOPA)
          </motion.span>

          {/* Recognition badges */}
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-3 mb-12">
            <div className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2 hover:border-brand-primary transition-colors duration-300">
              <Award className="h-4 w-4 text-brand-primary shrink-0" />
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Best Small Farmer Group in Asia - 2014
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2 hover:border-brand-primary transition-colors duration-300">
              <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Largest Farmer Group in Asia
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Empowering the
              <br />
              <span className="text-brand-primary">Marginalized.</span>
            </motion.h2>

            <motion.div
              {...fadeUp(0.2)}
              className="space-y-5 text-neutral-600 text-base leading-8"
            >
              <p>
                Established in 2010, MOPA was founded to protect small-scale
                farmers from middleman exploitation. By educating and mobilizing
                these communities, Bio Foods has bridged the gap between rural
                producers and the sophisticated global consumer.
              </p>
              <p>
                Today, producers are organized into geographical blocks
                dedicated to enriching soil structure and uplifting
                biodiversity. With half of our 24,400 acres already certified
                organic, we are ambitiously converting the remainder to ensure a
                100% sustainable future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-brand-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.1)}
              className={`
                py-12 px-6 flex items-center justify-between gap-3 
                border-white/20 border-b lg:border-b-0
                ${i % 2 === 0 ? "border-r lg:border-r" : "lg:border-r"} 
                ${i === stats.length - 1 ? "lg:border-r-0" : ""}`}
            >
              <div>
                <p
                  className="text-4xl lg:text-5xl text-white"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/50">
                  {label}
                </p>
              </div>
              <Icon className="h-4 w-4 text-white/20 shrink-0" />
            </motion.div>
          ))}
          <motion.div
            {...fadeUp(0.3)}
            className="py-12 px-6 flex items-center gap-4"
          >
            <Heart className="h-4 w-4 text-white/40 shrink-0" />
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 leading-6">
              Women&apos;s
              <br />
              Empowerment
            </p>
          </motion.div>
        </div>
      </section>

      {/* REGIONAL COVERAGE */}
      <section className="py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl lg:text-6xl mb-16"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Regional Outreach
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-neutral-200 border border-neutral-200">
            {regions.map((region, i) => (
              <motion.div
                key={region}
                {...fadeUp(i * 0.08)}
                className="group flex flex-col items-center justify-center gap-2 py-10 px-6 border-b md:border-b-0 hover:bg-white transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-700">
                  {region}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <motion.h2
              {...fadeUp(0)}
              className="text-4xl lg:text-6xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Life at the Farm Gate
            </motion.h2>
            <motion.span
              {...fadeUp(0.1)}
              className="text-sm uppercase tracking-[0.35em] text-neutral-400"
            >
              #FacesOfMOPA
            </motion.span>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="grid grid-cols-2 md:grid-cols-5 gap-2"
          >
            {mopaGallery.map((img, i) => (
              <div
                key={img.src}
                className="aspect-square overflow-hidden bg-neutral-100 relative group cursor-zoom-in"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400?text=MOPA";
                  }}
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>
            ))}
          </motion.div>
          {lightboxIndex !== null && (
            <Lightbox
              images={mopaGallery}
              startIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </div>
      </section>
    </div>
    </LazyMotion>
  );
}
