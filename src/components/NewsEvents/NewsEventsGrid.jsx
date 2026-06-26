import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import newsEventsData from '../../data/newsEvents';

const FILTERS = ["All", "News", "Event"];

const tagColors = {
    Award: "bg-brand-gold/20 text-brand-secondary",
    Exhibition: "bg-emerald-50 text-emerald-700",
    Sustainability: "bg-green-50 text-green-700",
    Conference: "bg-blue-50 text-blue-700",
    Certification: "bg-purple-50 text-purple-700",
    default: "bg-neutral-100 text-neutral-500",
};

function NewsEventsGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = newsEventsData.filter(
        (item) => activeFilter === "All" || item.type === activeFilter
    );

    return (
        <section className="w-full bg-white border-t border-neutral-100">

            {/* DARK HEADER BAND */}
            <div className="bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-6">
                            News & Events
                        </p>
                        <h2
                            className="text-5xl lg:text-7xl tracking-tight leading-none"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Milestones &
                            <br />
                            stories unfolding.
                        </h2>
                    </div>
                    <p className="text-white/70 text-lg leading-8 lg:max-w-md lg:ml-auto">
                        From international exhibitions to landmark achievements, explore
                        the moments that define Bio Foods' commitment to organic
                        excellence and sustainable growth.
                    </p>
                </div>
            </div>

            {/* FILTER BAR */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-4">
                <div className="flex items-center gap-3">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`text-xs uppercase tracking-[0.2em] px-5 py-2 border transition-colors ${
                                activeFilter === f
                                    ? "bg-brand-primary text-white border-brand-primary"
                                    : "border-neutral-300 text-neutral-500 hover:border-brand-primary hover:text-brand-primary"
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
                <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                    {filtered.map(({ id, icon: Icon, number, date, title, summary, tag, type }, i) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="grid lg:grid-cols-12 gap-6 lg:gap-16 py-12 items-start group"
                        >
                            {/* Index + Icon */}
                            <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                                <span
                                    className="text-4xl text-neutral-200 leading-none select-none"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <Icon className="w-4 h-4 text-brand-primary" />
                            </div>

                            {/* Date + Title */}
                            <div className="lg:col-span-5">
                                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                                    {date} · {type}
                                </p>
                                <h3
                                    className="text-3xl lg:text-4xl tracking-tight text-neutral-950 leading-tight"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {title}
                                </h3>
                                <span className={`mt-4 inline-block text-xs uppercase tracking-[0.15em] px-3 py-1 rounded-full ${tagColors[tag] ?? tagColors.default}`}>
                                    {tag}
                                </span>
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-6 lg:pt-1 flex flex-col gap-6">
                                <p className="text-neutral-600 leading-8">{summary}</p>
                                <Link
                                    to={`/news-and-events/${id}`}
                                    className="self-start inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default NewsEventsGrid;
