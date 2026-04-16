import React from 'react';
import { Users, MapPin, Sprout, Heart, Award, ShieldCheck } from 'lucide-react';

function ProducersIntro() {
    const stats = [
        { label: "Farmer Families", value: "10,050+", icon: <Users /> },
        { label: "Total Outreach", value: "24,400 Acres", icon: <Sprout /> },
        { label: "Provinces", value: "06 Regions", icon: <MapPin /> },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Recognition Bar */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <div className="flex items-center gap-3 bg-brand-primary text-white px-6 py-3 rounded-full shadow-lg shadow-brand-primary/20">
                        <Award className="w-5 h-5" />
                        <span className="font-bold text-sm uppercase tracking-wider">Best Small Farmer Group in Asia - 2014</span>
                    </div>
                    <div className="flex items-center gap-3 bg-brand-secondary text-white px-6 py-3 rounded-full shadow-lg shadow-brand-secondary/20">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="font-bold text-sm uppercase tracking-wider">Largest Farmer Group in Asia</span>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
                            Empowering the <br />
                            <span className="text-brand-primary">Marginalized.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Established in 2010, **MOPA** (Marginalized Organic Producers Association) was founded to protect small-scale farmers from middleman exploitation. By educating and mobilizing these communities, Bio Foods has bridged the gap between rural producers and the sophisticated global consumer.
                            </p>
                            <p className="text-base">
                                Today, these producers are organized into geographical "blocks," dedicated to enriching soil structure and uplifting biodiversity. With half of our 24,400 acres already certified organic, we are ambitiously converting the remainder to ensure a 100% sustainable future.
                            </p>
                        </div>
                    </div>

                    {/* Impact Stats Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-brand-light p-8 rounded-[2.5rem] border border-brand-primary/5 hover:border-brand-primary/20 transition-colors">
                                <div className="text-brand-primary mb-4">
                                    {React.cloneElement(stat.icon, { size: 32 })}
                                </div>
                                <div className="text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                        <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-center">
                            <Heart className="text-brand-accent mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-1">Women's Empowerment</h4>
                            <p className="text-xs text-white/60">Actively encouraging rural women to join and lead within our farming blocks.</p>
                        </div>
                    </div>
                </div>

                {/* Regional Coverage */}
                <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px grow bg-gray-200"></div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Regional Outreach</h3>
                        <div className="h-px grow bg-gray-200"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-12">
                        {["Central", "Uva", "Wayamba", "Down-South", "North-East", "Western"].map((province) => (
                            <div key={province} className="flex items-center gap-2 group">
                                <MapPin className="w-5 h-5 text-brand-primary group-hover:scale-125 transition-transform" />
                                <span className="font-black text-gray-700 uppercase text-sm tracking-widest">{province}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Placeholder - To be replaced with your 10 images */}
                <div className="mt-24">
                    <div className="flex justify-between items-end mb-10">
                        <h3 className="text-3xl font-black text-gray-900 tracking-tight">Life at the Farm Gate</h3>
                        <p className="text-brand-primary font-bold text-sm">#FacesOfMOPA</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gray-100 rounded-3xl overflow-hidden group relative">
                                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <Users className="text-white" />
                                </div>
                                <img 
                                    src={`/Producers/mopa${i+1}.jpg`} 
                                    alt="Farmer Group" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=MOPA+Gallery'; }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProducersIntro;