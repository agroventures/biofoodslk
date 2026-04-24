import React from 'react';

const ImageHero = ({
  badge,
  title,
  subtitle,
  description,
  icon: Icon,
  img,
  alt = "Hero background"
}) => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Layer */}
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">

        {/* Title Card (Glassmorphism Effect) */}
        <div className="bg-white/10 backdrop-blur-md px-8 py-10 md:px-16 md:py-12 rounded-[2.5rem] border border-white/20 shadow-2xl mb-8">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-4 text-brand-accent">
              {Icon && <Icon className="w-5 h-5" />}
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
        </div>

        {/* Subtitle & Description Area */}
        {(subtitle || description) && (
          <div className="max-w-3xl animate-fade-in">
            {subtitle && (
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-accent to-transparent opacity-50" />
    </section>
  );
};

export default ImageHero;