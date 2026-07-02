import React from "react";
import { Globe, Heart, Target, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Globe,
    number: "01",
    title: "Expanding International Reach",
    description:
      "Growing our presence across global markets while preserving the authenticity and values that define our origins.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Scaling with Purpose",
    description:
      "Expanding operations thoughtfully while maintaining the craftsmanship, care, and quality our customers trust.",
  },
  {
    icon: Target,
    number: "03",
    title: "Strengthening Global Positioning",
    description:
      "Enhancing our reputation as a premium organic brand through innovation, sustainability, and consistency.",
  },
];

const AwardsLegacy = () => (
  <section className="w-full bg-white border-t border-neutral-100">
    {/* DARK SPLIT BAND */}
    <div className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-6 text-center lg:text-left">
            Legacy & Growth
          </p>
          <h2
            className="text-5xl lg:text-7xl tracking-tight leading-none text-center lg:text-left"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            A legacy preserved,
            <br />a future strengthened.
          </h2>
        </div>
        <p className="text-white/70 text-lg leading-8 lg:max-w-md lg:ml-auto text-center lg:text-left">
          For decades, Bio Foods has been built on a foundation of integrity,
          sustainability, and respect for nature. Through its integration with
          Agro Ventures, these values continue to guide the business while
          creating new opportunities for growth and global impact.
        </p>
      </div>
    </div>

    {/* PRINCIPLES - numbered row */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200">
        {principles.map(({ icon: Icon, number, title, description }) => (
          <div key={number} className="p-10 lg:p-12 flex flex-col gap-6">
            <div className="flex items-start justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-brand-light font-bold text-lg">
                <Icon className="w-5 h-5 text-brand-light mt-1" />
              </div>
            </div>
            <div>
              <h4 className="text-xl text-neutral-950 text-center mb-3">
                {title}
              </h4>
              <p className="text-neutral-600 leading-7 text-center text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* FEATURE BAND */}
    {/* <div className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-brand-primary mb-6 text-center">
            Preserving What Matters
          </p>
          <h3
            className="text-4xl lg:text-5xl tracking-tight text-neutral-950 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Tradition and progress, working together.
          </h3>
        </div>
        <p className="text-neutral-600 leading-8 text-center">
          Agro Ventures recognizes the unique heritage and values that have
          shaped Bio Foods over the years. Rather than changing that identity,
          the partnership strengthens it through investment, expertise, and
          expanded opportunities. This balance between tradition and innovation
          allows the business to grow confidently while maintaining the trust,
          quality, and authenticity that customers expect.
        </p>
      </div>
    </div> */}

    {/* CLOSING CTA */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-12 border-t border-neutral-100">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-brand-primary mb-6 text-center">
          Looking Ahead
        </p>
        <h2
          className="text-5xl lg:text-6xl tracking-tight text-neutral-950 text-center"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Growing responsibly,
          <br />
          preserving our values.
        </h2>
      </div>
      <div className="lg:max-w-7xl mx-auto">
        <p className="text-lg leading-8 text-neutral-600 mb-8 text-center">
          Together, Bio Foods and Agro Ventures continue to build a future where
          sustainable growth, premium quality, and environmental responsibility
          remain at the heart of every decision.
        </p>
        <div className="flex justify-center">
          <a
            href="/about"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition"
          >
            Our Story <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AwardsLegacy;
