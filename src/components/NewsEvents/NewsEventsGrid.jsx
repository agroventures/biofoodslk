import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn } from "lucide-react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import newsEventsData from "../../data/events_news";

const tagColors = {
  Award: "bg-brand-gold/20 text-brand-secondary",
  Exhibition: "bg-emerald-50 text-emerald-700",
  Sustainability: "bg-green-50 text-green-700",
  Conference: "bg-blue-50 text-blue-700",
  Certification: "bg-purple-50 text-purple-700",
  Expansion: "bg-orange-50 text-orange-700",
  default: "bg-neutral-100 text-neutral-500",
};

function NewsEventsGrid() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white border-t border-neutral-100">
        {/* LIST */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {newsEventsData.map(
              (
                { id, icon: Icon, date, title, summary, tag, type, images },
                i,
              ) => (
                <Link
                  to={`/news-and-events/${id}`}
                  key={id}
                  className="relative block hover:bg-neutral-50"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-12 items-start group"
                  >
                    {/* Thumbnail */}
                    {images?.[0] && (
                      <div className="lg:col-span-4 relative group">
                        <img
                          src={images[0]}
                          alt={title}
                          className="w-full aspect-4/3 object-cover"
                          loading="eager"
                        />
                      </div>
                    )}

                    {/* Date + Title + Summary + CTA */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                      <p className="text-lg uppercase tracking-[0.2em] text-neutral-400">
                        {date} · {type}
                      </p>
                      <h3
                        className="text-3xl lg:text-4xl tracking-tight text-neutral-950 leading-tight"
                        style={{
                          fontFamily:
                            "Calibri, Gill Sans, Trebuchet MS, sans-serif",
                        }}
                      >
                        {title}
                      </h3>
                      <p className="text-neutral-600 leading-8">{summary}</p>
                      <Link
                        to={`/news-and-events/${id}`}
                        className="self-start inline-flex items-center gap-2 text-lg uppercase tracking-[0.2em] text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default NewsEventsGrid;
