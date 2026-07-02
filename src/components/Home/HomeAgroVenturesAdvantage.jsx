import React from "react";
import {
  GitMerge,
  Factory,
  Globe,
  TrendingUp,
} from "lucide-react";

const advantages = [
  {
    icon: GitMerge,
    title: "Integrated Supply Chain",
    description:
      "A connected ecosystem ensuring consistency, transparency, and reliability from origin to global delivery.",
  },
  {
    icon: Factory,
    title: "Advanced Processing",
    description:
      "State-of-the-art facilities preserving quality, purity, and the natural integrity of every product.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Trusted international distribution networks serving customers across diverse world markets.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description:
      "Long-term expansion guided by environmental responsibility and strategic innovation.",
  },
];

function HomeAgroVenturesAdvantage({ section }) {

  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-28">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute left-0 top-10 hidden select-none xl:block">
        <span className="text-[280px] font-black leading-none text-black/3">
          {section}
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-8">
          <div>
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <span className="text-base uppercase tracking-[0.3em] font-semibold text-neutral-500">
                  Why Choose Us
                </span>
              </div>
              <div className="h-px w-12 bg-brand-secondary" />
            </div>

            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
            >
              The Strength Behind
              <br />
              Every Harvest.
            </h2>
          </div>

          <div>
            <p className="max-w-7xl text-lg leading-8 text-neutral-600">
              Backed by the Agroventures ecosystem - combining agricultural expertise with global market access.
            </p>
          </div>
        </div>

        {/* Facility Image */}
        <div className="mb-12 overflow-hidden rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <img
            src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/ProcessingFacility/coconut/1.webp"
            alt="Bio Foods processing facility"
            className="h-72 w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Advantage Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="
                group
                rounded-4xl
                bg-white
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <div className="mb-10 flex items-center justify-center">
                <div className="rounded-2xl bg-brand-primary p-4 text-brand-light">
                  <advantage.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-center tracking-tight text-neutral-950">
                {advantage.title}
              </h3>

              <p className="leading-7 text-center text-neutral-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Statement */}
        <div className="mt-16 overflow-hidden rounded-[40px] bg-brand-primary p-10 text-white lg:p-14">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-gold" />

            <span className="text-base uppercase tracking-[0.3em] text-brand-gold">
              System Advantage
            </span>
          </div>

          <h3
            className="max-w-7xl text-3xl leading-tight lg:text-5xl text-center"
            style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
          >
            A modern agricultural ecosystem built for scale, consistency, and sustainability.
          </h3>

          <p className="mt-8 max-w-7xl text-lg leading-8 text-white/80 text-center">
            Authentic cultivation meets industrial-grade infrastructure - trusted by customers around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeAgroVenturesAdvantage;