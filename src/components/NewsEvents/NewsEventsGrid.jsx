import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import newsEventsData from '../../data/events_news';
import Lightbox from '../shared/Lightbox';

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
    const [lightbox, setLightbox] = useState(null);
    return (
        <LazyMotion features={domAnimation}>
        <section className="w-full bg-white border-t border-neutral-100">
            {/* LIST */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
                <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                    {newsEventsData.map(({ id, icon: Icon, date, title, summary, tag, type, images }, i) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="grid lg:grid-cols-12 gap-6 lg:gap-16 py-12 items-start group"
                        >
                            {/* Date + Title */}
                            <div className="lg:col-span-4">
                                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
                                    {date} · {type}
                                </p>
                                <h3
                                    className="text-3xl lg:text-4xl tracking-tight text-neutral-950 leading-tight"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {title}
                                </h3>
                            </div>

                            {/* Summary + CTA */}
                            <div className="lg:col-span-4 lg:pt-1 flex flex-col gap-6">
                                <p className="text-neutral-600 leading-8">{summary}</p>
                                <Link
                                    to={`/news-and-events/${id}`}
                                    className="self-start inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Thumbnail */}
                            {images?.[0] && (
                                <div className="lg:col-span-3 relative group cursor-zoom-in" onClick={() => setLightbox({ images, index: 0 })}>
                                    <img
                                        src={images[0]}
                                        alt={title}
                                        className="w-full aspect-[4/3] object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white drop-shadow" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
            {lightbox && <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
        </section>
        </LazyMotion>
    );
}

export default NewsEventsGrid;
