import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function HomeSegments() {
  const segments = [
    // {
    //     id: 1,
    //     title: "Producers",
    //     description: "Meet our trusted organic farmers across the island.",
    //     img: '/Home/producers.avif',
    //     link: '/producers',
    //     code: "SRC_01"
    // },
    {
      id: 2,
      title: "Process",
      description: "Advanced sustainable processing techniques.",
      img: "/Home/process.avif",
      link: "/processing-facilities",
      code: "PRC_02",
    },
    {
      id: 3,
      title: "Products",
      description: "100% organic, fresh, and certified exports.",
      img: "/Home/products.avif",
      link: "/products",
      code: "PROD_03",
    },
    {
      id: 4,
      title: "Quality",
      description: "Certified excellence in every single batch.",
      img: "/Home/quality.avif",
      link: "/quality-certifications",
      code: "QLTY_04",
    },
    {
      id: 5,
      title: "Management",
      description: "Supporting sustainable farming practices.",
      img: "/Home/management.jpg",
      link: "/about#management",
      code: "MGMT_05",
    },
  ];

  return (
    <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-b border-neutral-100 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Editorial Section Header ── */}
        <div className="border-b border-neutral-950 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-neutral-950">
              <Sparkles className="w-4 h-4 stroke-[1.5]" />
              <span className="font-mono text-sm uppercase tracking-[0.3em] text-neutral-500">
                Discover Our Journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
              Experience BioFoods
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base text-neutral-600 font-medium leading-relaxed">
              Explore every sequential operational framework dedicated to
              delivering uncompromising agricultural transparency from origin
              matrices to global trade hubs.
            </p>
          </div>
        </div>

        {/* ── Corporate Grid Assembly ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((segment) => (
            <Link
              key={segment.id}
              to={segment.link}
              className="group relative block bg-neutral-950 border border-neutral-200 overflow-hidden h-80 md:h-112.5 lg:h-130 transition-all duration-300 hover:border-neutral-950"
            >
              {/* Image Layer with Contrast Mapping */}
              <div className="absolute inset-0 z-0 h-full w-full">
                <img
                  src={segment.img}
                  alt={segment.title}
                  className="h-full w-full object-cover opacity-80 filter contrast-110 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              </div>

              {/* Core Layout Layer */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between h-full">
                {/* Top Tray Meta-Information */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-white border border-neutral-200 text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-0">
                    <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                {/* Bottom Frame Context Payload */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">
                      {segment.title}
                    </h3>
                  </div>

                  {/* Description block that gains sharp prominence */}
                  <p className="text-sm text-neutral-300 font-medium leading-relaxed line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {segment.description}
                  </p>

                  {/* Action Anchor Underline */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white border-b border-white pb-1 group-hover:border-neutral-400 transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSegments;
