import React from "react";
import { Users, Package, ShieldCheck, Trophy, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { certifications } from "../../data/certifications";

const segments = [
  {
    icon: Users,
    title: "Producers",
    description:
      "Connect with our network of trusted organic farmers across Sri Lanka.",
    link: "/producers",
    img: "/Producers/hero.webp",
  },
  {
    icon: Package,
    title: "Products",
    description:
      "Explore our premium range of 100% organic spices and agricultural products.",
    link: "/products",
    img: "/Products/CoconutProducts/coconut.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Discover our internationally certified quality standards and rigorous testing processes.",
    link: "/quality-certifications",
    img: '/Home/certified.webp',
  },
  {
    icon: Trophy,
    title: "Awards",
    description:
      "Celebrating excellence through national and international awards for quality and sustainability.",
    link: "/awards",
    img: "/Awards/german_sustainability.WebP",
  },
];

function HomeSegments({section}) {
  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-28">
      {/* Decorative Number */}
      <div className="pointer-events-none absolute left-0 top-0 hidden select-none xl:block">
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
                  Discover Our Journey
                </span>
              </div>
            </div>
            <h2
              className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Experience
              <br />
              BioFoods.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="max-w-md text-lg leading-8 text-neutral-600">
              Explore our network of farmers, products, certifications, and
              awards dedicated to uncompromising organic quality.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment, index) => (
            <Link
              key={index}
              to={segment.link}
              className="group rounded-4xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Image */}
              {segment.img && (
                <div className="mb-6 h-40 overflow-hidden rounded-2xl">
                  <img
                    src={segment.img}
                    alt={segment.title}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Icon */}
              {/* <div className="mb-6 flex items-center justify-center">
                <div className="rounded-2xl bg-brand-muted p-4 text-brand-primary">
                  <segment.icon className="h-5 w-5" />
                </div>
              </div> */}

              {/* Title */}
              <h3
                className="mb-4 text-center text-2xl tracking-tight text-neutral-950"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-center leading-7 text-neutral-600">
                {segment.description}
              </p>

              {/* Button */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-5 py-2 text-sm font-medium text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  Explore {segment.title}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSegments;
