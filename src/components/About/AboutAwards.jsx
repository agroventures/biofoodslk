import React from 'react';
import { Award, Star, Trophy, ShieldCheck, Globe, Beaker } from 'lucide-react';

const featuredAwards = [
        {
            year: "2024",
            title: "Global CEO Leadership Excellence Awards",
            desc: "CEO - Bio Foods Pvt. Ltd. Recognized for visionary leadership in organic agriculture.",
            icon: <Trophy />,
            type: "Global"
        },
        {
            year: "2020",
            title: "German Sustainability Awards",
            desc: "Winner: Best Global Corporate Partnerships. Europe's most prestigious award in sustainable development.",
            icon: <Globe />,
            type: "Global"
        },
        {
            year: "2019",
            title: "Sustainability Food Award",
            desc: "Finalist at the Fair Trade General Assembly in Bonn, Germany.",
            icon: <Award />,
            type: "Global"
        },
        {
            year: "2015 - 2020",
            title: "Presidential Export Excellence Awards",
            desc: "The highest value-added exporter in the organic products sector in Sri Lanka.",
            icon: <Star />,
            type: "National"
        },
        {
            year: "2014",
            title: "Fairest Fairtrader of the World",
            desc: "Dr. Sarath Ranaweera (Chairman). Awarded at the Fair Trade General Assembly, Germany.",
            icon: <Trophy />,
            type: "Global"
        },
        {
            year: "2014",
            title: "Best Small Farmer Organization in Asia",
            desc: "Awarded to MOPA by FLO for exceptional organic standards.",
            icon: <ShieldCheck />,
            type: "Global"
        }
    ];

// Historical and Technical Awards
const historicalAwards = [
        { year: "2019", t: "Presidential Awards", d: "Discovery of special enzyme in activator for green tea processing – 2nd place in Food Tech." },
        { year: "2017", t: "International Pepper Council Award", d: "Excellence in exporter of value added products." },
        { year: "2016", t: "Sri Lanka Tea Board Awards", d: "Highest FOB achiever for bulk tea & 2nd place in specialty tea." },
        { year: "2010", t: "Madarata Abhimana", d: "Chief Ministerial Award: Bronze medal Sri Lankan entrepreneur (Central Province)." },
        { year: "2006-08", t: "Sri Lanka Tea Board", d: "Two star rated / Systems certified for Jamesvalley tea factory (QCQ/CQC)." },
        { year: "2001", t: "Cafedirect", d: "Award for successful partnership creating quality fair trade products." },
        { year: "1999", t: "Ministry of Industries", d: "Star awards: Large scale manufacturing sector." },
        { year: "1999", t: "NCE Exporters Award", d: "National Chamber of Commerce recognition." }
    ];

function AboutAwards() {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-5 py-2.5 rounded-full mb-6">
                        <Trophy className="w-5 h-5" />
                        <span className="font-bold tracking-[0.2em] uppercase text-sm">Accolades</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-neutral-950 tracking-tighter mb-4">
                        A Legacy of <br />
                        <span className="text-brand-primary italic">Excellence</span>
                    </h2>
                    <p className="text-neutral-500 font-medium max-w-xl mx-auto">
                        Recognized on national and global stages for fair trade, organic innovation, and sustainable leadership.
                    </p>
                </div>

                {/* Top Tier Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredAwards.map((award) => (
                        <div key={award.title} className="group relative bg-brand-light p-8 rounded-[2.5rem] border border-neutral-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 text-neutral-700">
                                    {React.cloneElement(award.icon, { size: 32, className: "transition-colors" })}
                                </div>
                                <span className="text-2xl font-black text-neutral-300 group-hover:text-brand-secondary/20 transition-colors">
                                    {award.year}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-950 mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                                {award.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed font-medium mb-6">
                                {award.desc}
                            </p>

                            <div className="mt-auto flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${award.type === 'Global' ? 'bg-brand-accent' : 'bg-brand-secondary'}`} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                                    {award.type} Recognition
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Historical Timeline List */}
                <div className="mt-32 pt-16 border-t border-neutral-100">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-neutral-400">Historical Milestones</h4>
                        <div className="h-px grow bg-neutral-100 mx-8 hidden md:block"></div>
                        <span className="text-sm font-bold text-brand-primary bg-brand-primary/5 px-4 py-1.5 rounded-full">1999 - 2019 Accolades</span>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {historicalAwards.map((item) => (
                            <div key={item.t} className="group flex gap-6 items-start p-4 rounded-2xl transition-colors hover:bg-brand-muted/50">
                                <div className="shrink-0 w-16 text-brand-primary font-black text-lg border-r border-neutral-100 pr-4">
                                    {item.year}
                                </div>
                                <div>
                                    <h5 className="font-bold text-neutral-950 text-sm uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                                        {item.t}
                                    </h5>
                                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAwards;