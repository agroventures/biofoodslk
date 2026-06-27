import React from "react";
import {
  GitMerge,
  Factory,
  Globe,
  TrendingUp,
  Sparkles,
} from "lucide-react";

function HomeAgroVenturesAdvantage({ section }) {
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
        <div className="mb-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Why Choose Us
                </span>
              </div>
            </div>

            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Strength Behind
              <br />
              Every Harvest.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-5">
            <p className="max-w-md text-lg leading-8 text-neutral-600">
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
          {advantages.map((advantage, index) => (
            <div
              key={index}
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
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-gold" />

            <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">
              System Advantage
            </span>
          </div>

          <h3
            className="max-w-4xl text-3xl leading-tight lg:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            A modern agricultural ecosystem built for scale, consistency, and sustainability.
          </h3>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">
            Authentic cultivation meets industrial-grade infrastructure - trusted by customers around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeAgroVenturesAdvantage;