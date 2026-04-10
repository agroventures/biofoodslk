import React from 'react';

function ContactHero() {
    return (
        <section className='relative w-full h-[45vh] md:h-[55vh] overflow-hidden bg-gray-900'>
            <img 
                src="/Contact/hero.avif" 
                alt="Contact BioFoods" 
                className='absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2]' 
            />

            <div className='absolute inset-0 bg-black/45' />

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10'>
                <div className='bg-white/5 backdrop-blur-md px-10 py-6 rounded-[2.5rem] border border-white/10 shadow-2xl'>
                    <span className="text-sm font-bold uppercase tracking-[0.3em] mb-2 block text-brand-accent">
                        Get In Touch
                    </span>
                    <h1 className='text-5xl md:text-8xl font-black text-brand-light tracking-normal'>
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-[100px] z-0" />
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-accent/50 to-transparent" />
        </section>
    );
}

export default ContactHero;