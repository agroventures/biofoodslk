import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m as motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);

  const prev = () => { setIndex(i => (i - 1 + images.length) % images.length); setScale(1); };
  const next = () => { setIndex(i => (i + 1) % images.length); setScale(1); };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length]);

  const src = typeof images[index] === "string" ? images[index] : images[index].src;
  const alt = typeof images[index] === "string" ? `Image ${index + 1}` : images[index].alt;

  return (
    <LazyMotion features={domAnimation}>
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Controls */}
        <div className="absolute top-4 right-4 flex gap-2" onClick={e => e.stopPropagation()}>
          <button type="button" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded" onClick={() => setScale(s => Math.min(s + 0.5, 3))}><ZoomIn className="h-5 w-5" /></button>
          <button type="button" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded" onClick={() => setScale(s => Math.max(s - 0.5, 1))}><ZoomOut className="h-5 w-5" /></button>
          <button type="button" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded" onClick={onClose}><X className="h-5 w-5" /></button>
        </div>

        {/* Arrow nav */}
        {images.length > 1 && <>
          <button type="button" className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded" onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft className="h-6 w-6" /></button>
          <button type="button" className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded" onClick={e => { e.stopPropagation(); next(); }}><ChevronRight className="h-6 w-6" /></button>
        </>}

        {/* Image */}
        <motion.img
          key={index}
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-in select-none"
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={e => { e.stopPropagation(); setScale(s => s < 3 ? s + 0.5 : 1); }}
        />

        {/* Counter */}
        {images.length > 1 && (
          <p className="absolute bottom-4 text-white/50 text-base tracking-widest">
            {index + 1} / {images.length}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
    </LazyMotion>
  );
}
