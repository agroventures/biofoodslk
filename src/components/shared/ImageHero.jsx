import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const ImageHero = ({
  badge,
  title,
  subtitle,
  description,
  icon: Icon,
  img,
  alt = "Hero image",
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-[75vh] lg:min-h-[calc(100vh-6rem)] overflow-hidden bg-zinc-950">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src={img}
            alt={alt}
            className="h-full w-full object-cover object-center"
          />

          {/* Dynamic Overlay: Subtle dark tint overall + heavy dark gradient at the bottom */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[75vh] lg:min-h-[calc(100vh-6rem)] max-w-7xl items-end px-8 pb-16 lg:px-16 lg:pb-24">
          <div className="max-w-4xl drop-shadow-sm">
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-4"
              >
                <div className="h-px w-12 bg-brand-gold" />
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4 text-brand-gold" />}
                  <span className="text-sm uppercase tracking-[0.35em] text-white/90 font-medium">
                    {badge}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl font-light"
              style={{ fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif" }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            {(subtitle || description) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-6 max-w-2xl"
              >
                {subtitle && (
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brand-gold font-semibold">
                    {subtitle}
                  </p>
                )}

                {description && (
                  <p className="text-base sm:text-lg leading-relaxed text-zinc-200 antialiased">
                    {description}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center">
          <span className="mb-3 text-sm uppercase tracking-[0.35em] text-white/70">
            Scroll
          </span>
          <div className="h-16 w-px bg-white/40" />
        </div>
      </section>
    </LazyMotion>
  );
};

export default ImageHero;