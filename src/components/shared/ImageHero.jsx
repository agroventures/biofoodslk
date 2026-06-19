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
    <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] flex items-end overflow-hidden bg-neutral-950 text-white">
      
      {/* ── Background Imagery Frame ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out selection:bg-transparent"
        />
        {/* Precise Cinematic Vignette and Linear Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden lg:block" />
      </div>

      {/* ── Subdued Blueprint Matrix Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] z-1">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #FFF 1px, transparent 1px),
                              linear-gradient(to bottom, #FFF 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Main Layout Wrapper ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 lg:pb-24 lg:pt-40">
        
        {/* Structural Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-12 lg:pb-16">
          
          {/* Left Column: Heading Layout */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {badge && (
              <div className="flex items-center gap-2.5 mb-6 bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-md">
                {Icon && <Icon className="w-3.5 h-3.5 text-neutral-300 stroke-[1.5]" />}
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-300">
                  {badge}
                </span>
              </div>
            )}

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase font-sans text-white">
              {title}
            </h1>
          </div>

          {/* Right Column: Subtitle & Context Description */}
          {(subtitle || description) && (
            <div className="lg:col-span-4 flex flex-col items-start gap-4 lg:pl-4">
              {subtitle && (
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-neutral-200">
                  {subtitle}
                </h2>
              )}
              {description && (
                <p className="text-sm sm:text-base text-neutral-400 font-medium leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

        </div>

        {/* Technical Footer Metabar */}
        {/* <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 opacity-40">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            <span>SYS-REF // HERO-01</span>
            <span>·</span>
            <span>Scale Controlled</span>
          </div>
          <div className="w-12 h-px bg-white hidden sm:block" />
        </div> */}

      </div>
    </section>
  );
};

export default ImageHero;