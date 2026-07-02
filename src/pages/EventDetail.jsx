import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import newsEventsData from '../data/events_news';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Lightbox from '../components/shared/Lightbox';
import useSEO from '../hooks/useSEO';

const tagColors = {
    Award: "bg-brand-gold/20 text-brand-secondary",
    Exhibition: "bg-emerald-50 text-emerald-700",
    Sustainability: "bg-green-50 text-green-700",
    Conference: "bg-blue-50 text-blue-700",
    Certification: "bg-purple-50 text-purple-700",
    default: "bg-neutral-100 text-neutral-500",
};

function EventDetail() {
    const { id } = useParams();
    const item = newsEventsData.find((e) => e.id === Number(id));
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useSEO({ url: window.location.href, image_alt: item?.title ?? "Event Detail" });

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-neutral-500">Entry not found.</p>
                </div>
                <Footer />
            </div>
        );
    }

    const { icon: Icon, type, date, title, summary, tag, content, images } = item;
    const paragraphs = content.split('\n\n');

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 lg:px-8 py-16 lg:py-24">

                <Link
                    to="/news-and-events"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-primary mb-12 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to News & Events
                </Link>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {date} · {type}
                    </span>
                </div>

                {/* Title */}
                <h1
                    className="text-5xl lg:text-7xl tracking-tight text-neutral-950 leading-tight mb-8"
                    style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
                >
                    {title}
                </h1>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-neutral-200" />
                    <Icon className="w-4 h-4 text-brand-primary shrink-0" />
                    <div className="h-px flex-1 bg-neutral-200" />
                </div>

                {/* Summary */}
                <p className="text-xl leading-9 text-neutral-700 mb-10 font-medium">
                    {summary}
                </p>

                {/* Body */}
                <div className="space-y-6">
                    {paragraphs.map((para) => (
                        <p key={para.slice(0, 40)} className="text-neutral-600 leading-8 text-lg">
                            {para}
                        </p>
                    ))}
                </div>

                {/* Gallery */}
                {images?.length > 0 && (
                    <div className="mt-16">
                        <div className="h-px bg-neutral-200 mb-10" />
                        <div className="columns-2 md:columns-3 gap-3 space-y-3">
                            {images.map((src, i) => (
                                <div key={src} className="relative group cursor-zoom-in break-inside-avoid" onClick={() => setLightboxIndex(i)}>
                                    <img
                                        src={src}
                                        alt={`${title} ${i + 1}`}
                                        className="w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white drop-shadow" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {lightboxIndex !== null && (
                            <Lightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
                        )}
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}

export default EventDetail;
