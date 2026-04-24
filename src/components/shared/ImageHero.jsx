import React from 'react';

const ImageHero = ({ 
  variant = 'image',
  badge, 
  title, 
  subtitle, 
  description, 
  icon: Icon,
  img, 
  alt = "Hero background" 
}) => {
  if (variant === 'image') {
    return (
      <section className='relative w-full h-[45vh] md:h-[55vh] overflow-hidden bg-gray-900'>
        <img 
          src={img} 
          alt={alt}
          className='absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2]' 
        />
        <div className='absolute inset-0 bg-black/45' />

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10'>
          <div className='bg-white/5 backdrop-blur-md px-10 py-6 rounded-[2.5rem] border border-white/10 shadow-2xl'>
            {badge && (
              <span className="text-sm font-bold uppercase tracking-[0.3em] mb-2 block text-brand-accent">
                {badge}
              </span>
            )}
            <h1 className='text-5xl md:text-8xl font-black text-brand-light tracking-normal'>
              {title}
            </h1>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-accent/50 to-transparent" />
      </section>
    );
  }

  // Styles for the Clean/Gradient Variant (Second Example)
  return (
    <section className="w-full py-20 lg:py-28 bg-linear-to-br from-white via-brand-light/30 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/10">
              {Icon && <Icon className="w-5 h-5" />}
              <span className="font-bold tracking-[0.15em] uppercase text-xs">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-dark tracking-tight mb-6">
            {title}
          </h1>

          {(subtitle || description) && (
            <div className="max-w-3xl mx-auto">
              {subtitle && (
                <p className="text-xl lg:text-2xl font-bold text-brand-dark/90 mb-4">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-lg lg:text-xl text-brand-dark/70 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageHero;