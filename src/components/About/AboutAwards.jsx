import React from 'react';
import { Award, Star, Trophy, ShieldCheck, Globe, Beaker } from 'lucide-react';
import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

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
        <LazyMotion features={domAnimation}>
        <section className="relative py-20 lg:py-32 bg-brand-light overflow-hidden">
            {/* Decorative number */}
            <div className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block">
                <span className="text-[280px] font-black leading-none text-black/3">04</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

                {/* Header */}
                <motion.div {...fadeUp(0)} className="mb-24 max-w-4xl">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="h-px w-12 bg-brand-secondary" />
                        <div className="flex items-center gap-2">
                            <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Accolades</span>
                        </div>
                    </div>
                    <h2
                        className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        A legacy of
                        <br />
                        <span className="italic text-brand-primary">excellence.</span>
                    </h2>
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                        Recognized on national and global stages for fair trade, organic innovation, and sustainable leadership.
                    </p>
                </motion.div>

                {/* Top Tier Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredAwards.map((award, i) => (
                        <motion.div
                            key={award.title}
                            {...fadeUp(i * 0.08)}
                            className="group rounded-4xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 rounded-2xl bg-brand-light group-hover:bg-brand-primary transition-colors duration-500 text-brand-primary group-hover:text-white">
                                    {React.cloneElement(award.icon, { size: 24, className: "transition-colors" })}
                                </div>
                                <span
                                    className="text-3xl tracking-tight text-neutral-200 group-hover:text-brand-secondary/30 transition-colors"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {award.year}
                                </span>
                            </div>

                            <h3
                                className="text-2xl tracking-tight text-neutral-950 mb-3 leading-tight group-hover:text-brand-primary transition-colors"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {award.title}
                            </h3>
                            <p className="text-neutral-600 text-sm leading-7 mb-6">
                                {award.desc}
                            </p>

                            <div className="mt-auto flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${award.type === 'Global' ? 'bg-brand-accent' : 'bg-brand-secondary'}`} />
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                                    {award.type} Recognition
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Historical Timeline — dark CTA panel style */}
                <motion.div {...fadeUp(0.2)} className="mt-20 overflow-hidden rounded-[40px] bg-brand-primary p-10 text-white lg:p-14">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="h-px w-12 bg-brand-gold" />
                        <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">Historical Milestones</span>
                    </div>
                    <h3
                        className="max-w-xl text-3xl leading-tight lg:text-4xl mb-12"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Three decades of recognition — 1999 to 2019.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 border-t border-white/10">
                        {historicalAwards.map((item, i) => (
                            <motion.div
                                key={item.t}
                                {...fadeUp(i * 0.06)}
                                className="group flex gap-6 items-start py-6 px-2 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                            >
                                <span
                                    className="shrink-0 text-2xl text-brand-gold/70 tabular-nums"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {item.year}
                                </span>
                                <div>
                                    <h5 className="text-sm uppercase tracking-wide text-white font-medium mb-1">
                                        {item.t}
                                    </h5>
                                    <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
        </LazyMotion>
    );
}

export default AboutAwards;