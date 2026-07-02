import React from "react";
import { Sprout, ArrowRight, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function HomeEcoPlus() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] -mr-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-0">
          {/* Image Side */}
          <div className="relative h-72 sm:h-100 lg:h-full min-h-0 lg:min-h-125 group overflow-hidden rounded-3xl lg:rounded-none">
            <img
              src="/Home/eco_plus.avif"
              alt="Eco Planet Organic Fertilizer"
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Glassmorphism Badge on Image */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-white mb-2">
                <ShieldCheck className="text-brand-primary w-5 h-5" />
                <span className="text-[10px] md:text-xs font-black text-brand-primary uppercase tracking-widest">
                  Patented Technology
                </span>
              </div>
              <p className="text-brand-primary text-xs md:text-base leading-relaxed">
                Revolutionizing agriculture with nutrient-dense, 100% organic
                waste-to-soil solutions.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="py-4 lg:p-20 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
              Groundbreaking <br />
              <span className="text-brand-primary">Organic Fertility.</span>
            </h2>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              We don't just harvest from the earth; we give back.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="border-l-2 border-brand-primary/30 pl-4">
                <div className="text-xl md:text-2xl font-bold text-neutral-950 mb-1">
                  Circular
                </div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">
                  Economy
                </div>
              </div>
              <div className="border-l-2 border-brand-primary/30 pl-4">
                <div className="text-xl md:text-2xl font-bold text-neutral-950 mb-1">
                  100%
                </div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">
                  Bio-Degradable
                </div>
              </div>
            </div>

            <Link to="/eco-plus" className="inline-block w-full sm:w-auto">
              <button type="button" className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-brand-primary hover:bg-neutral-950 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-primary/20">
                LEARN MORE ABOUT ECO PLUS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Trust bar */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 opacity-40 grayscale pointer-events-none">
          <div className="flex items-center gap-2 text-neutral-950">
            <Globe size={18} />
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">
              Environmentally Neutral
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-950">
            <Sprout size={18} />
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">
              Soil Health First
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEcoPlus;
