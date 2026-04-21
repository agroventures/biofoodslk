import React from 'react';
import { Sprout, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeEcoPlus() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-white/40 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] -mr-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] -ml-32 -mb-32" />

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* Image Side */}
                        <div className="relative h-100 lg:h-full min-h-125 group overflow-hidden">
                            <img
                                src="/Home/eco_plus.avif"
                                alt="Eco Planet Organic Fertilizer"
                                className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glassmorphism Badge on Image */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 text-white mb-2">
                                    <ShieldCheck className="text-brand-primary w-5 h-5" />
                                    <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Patented Technology</span>
                                </div>
                                <p className="text-brand-primary text-sm leading-relaxed">
                                    Revolutionizing agriculture with nutrient-dense, 100% organic waste-to-soil solutions.
                                </p>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-10 lg:p-20 relative z-10">
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                                Groundbreaking <br />
                                <span className="text-brand-primary">Organic Fertility.</span>
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
                                We don't just harvest from the earth; we give back.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="border-l-2 border-brand-primary/30 pl-4">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">Circular</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-black">Economy</div>
                                </div>
                                <div className="border-l-2 border-brand-primary/30 pl-4">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-black">Bio-Degradable</div>
                                </div>
                            </div>

                            <Link to='/eco-plus'>
                                <button className="group flex items-center gap-3 bg-brand-primary hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-full font-black transition-all duration-300 transform hover:-translate-y-1">
                                    LEARN MORE ABOUT ECO PLUS
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust bar */}
                <div className="mt-12 flex flex-wrap justify-center gap-12 opacity-30 grayscale pointer-events-none">
                    <div className="flex items-center gap-2 text-slate-900">
                        <Globe size={20} />
                        <span className="font-bold uppercase tracking-widest text-xs">Environmentally Neutral</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-900">
                        <Sprout size={20} />
                        <span className="font-bold uppercase tracking-widest text-xs">Soil Health First</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeEcoPlus;