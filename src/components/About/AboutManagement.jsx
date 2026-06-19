import React from 'react';
import { Award } from 'lucide-react';
import { management } from '../../data/management';

function AboutManagement() {
    return (
        // <section id='management' className="py-16 md:py-24 bg-white">
        //     <div className="max-w-7xl mx-auto px-6">

        //         {/* Header Section */}
        //         <div className="max-w-3xl mb-16">
        //             <div className="flex items-center gap-2 text-brand-primary mb-4">
        //                 <Award className="w-6 h-6" />
        //                 <span className="font-black uppercase tracking-[0.2em] text-xs">Our Leadership</span>
        //             </div>
        //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
        //                 The Fairest <br />
        //                 <span className="text-brand-primary">Fair-trader of the World.</span>
        //             </h2>
        //         </div>

        //         <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        //             {/* Founder Image Card - Sticky on Desktop */}
        //             <div className="lg:col-span-5 lg:sticky lg:top-24">
        //                 <div className="relative group">
        //                     <div className="absolute inset-0 bg-brand-primary rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        //                     <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
        //                         <img 
        //                             src="/About/Dr.Sarath-Ranaweera.avif" 
        //                             alt="Dr. Sarath Ranaweera" 
        //                             className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
        //                         />
        //                         <div className="bg-slate-900 p-8 text-white">
        //                             <h3 className="text-2xl font-black mb-1">Dr. Sarath Ranaweera (Ph.D)</h3>
        //                             <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">Chairman & Founder</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Content Side */}
        //             <div className="lg:col-span-7 space-y-8">
        //                 <div className="prose prose-lg prose-slate max-w-none">
        //                     <p className="text-xl leading-relaxed text-slate-700 font-medium italic border-l-4 border-brand-primary pl-6 py-2">
        //                         In 2014, our chairman and founder, Dr. Sarath Ranaweera, received the “Fairest Fair-trader of the World” award at the first ever Fair Trade Awards (organized by FLO) held in Bonn, Germany.
        //                     </p>

        //                     <p className="text-slate-600 leading-relaxed">
        //                         Selected from over 80 individuals, this award recognized special efforts or innovations by outstanding individuals within the global fair-trade system. In addition, the Marginalized Organic Producers’ Association (MOPA) that functions under the overall management of Bio Foods (and also founded by the chairman) was recognized as the best small Producer organization of the year 2014 in Asia at the ceremony.
        //                     </p>

        //                     <div className="pt-8">
        //                         <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
        //                             <span className="w-12 h-[2px] bg-brand-primary"></span>
        //                             So how did he get here?
        //                         </h4>

        //                         <div className="space-y-6 text-slate-600">
        //                             <p>
        //                                 By training a mathematician (and notorious sportsman), he was the unfortunate victim of some aggressive food poisoning during his time in university. This prompted him to wonder what actually goes in our food. 
        //                             </p>

        //                             <p>
        //                                 A consequent switch in field to food technology and statistics (because he couldn’t just shed the numbers!) led him to develop his own tea manufacturing processes. He produced his first batch of tea with a rented factory, rented out a small square space at a trade fair, found a buyer that was so impressed with the quality of his tea that he ordered everything that could be produced, and that is how Bio Foods got its start.
        //                             </p>

        //                             <div className="bg-brand-light p-8 rounded-2xl relative my-10">
        //                                 <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-primary/10" />
        //                                 <p className="relative z-10 font-bold text-slate-800">
        //                                     "From the outset, he wanted to make sure that farmers were treated fairly, because none of the second generation farmers he met wanted to continue the work of their fathers because their livelihood was so risky."
        //                                 </p>
        //                             </div>

        //                             <p>
        //                                 Everything from fluctuating market prices to the weather could compromise their income, so to provide the farmers with some job security, Dr. Ranaweera set a minimum price that was above their cost of production. As such, no matter what the market price was, they could be assured of an income. 
        //                             </p>

        //                             <p>
        //                                 If the market price were to rise above that threshold, that price was matched, and farmers were given a buying guarantee. So right from the beginning, before FLO was even born, Bio Foods was practicing the fair trade and organic way. In fact, Dr. Ranaweera was involved in an advisory capacity when FLO was setting down their fair trade regulations.
        //                             </p>

        //                             <p className="font-semibold text-slate-800">
        //                                 This is the enduring vision of our visionary founder that we commit ourselves to maintaining every day. A steadfastly supportive wife both at work and at home, two wonderful daughters, a doctorate in bio-statistics, and over two decades later, he remains a "Sri Lankan farmer" as he calls himself, recognized on the international platform as the fairest of them all.
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </section>

        <section className="w-full bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white border-t border-neutral-100 py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* ── 1. The Executive Management Matrix ── */}
                <div className="space-y-32 md:space-y-40">
                    {management.map((member, index) => (
                        <div
                            key={member.id}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                                index % 2 !== 0 ? 'lg:direction-rtl' : ''
                            }`}
                        >
                            {/* Graphic Frame Asset */}
                            <div className="lg:col-span-5">
                                <div className="relative aspect-4/5 bg-neutral-50 overflow-hidden border border-neutral-200">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Typographic Core Payload */}
                            <div className="lg:col-span-7 space-y-6 lg:pt-4">
                                <div className="space-y-2 border-b border-neutral-950 pb-4">
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-neutral-950 leading-none">
                                        {member.name} <br/>
                                        <span className="text-base md:text-lg font-medium tracking-tight text-neutral-500">{member.role}</span>
                                    </h3>
                                </div>

                                <div className="relative pt-2">
                                    <p className="text-base md:text-lg font-medium text-neutral-500 leading-relaxed max-w-2xl">
                                        "{member.message || "Commitment to excellence and organic integrity is at the heart of everything we do at Bio Foods."}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── 2. The Institutional Founder Canvas ── */}
                <div className="border-t-2 border-neutral-950 mt-32 md:mt-40 pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Founder Visual Metadata Card */}
                        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
                            <div className="aspect-4/5 bg-neutral-50 overflow-hidden border border-neutral-200">
                                <img
                                    src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/Dr.Sarath-Ranaweera.avif"
                                    alt="Dr. Sarath Ranaweera"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                            <div className="space-y-1">
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block">
                                    CONSULTANT
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-neutral-950 leading-tight">
                                    Dr. Sarath Ranaweera <span className="font-light text-neutral-500">(Ph.D)</span>
                                </h3>
                            </div>
                        </div>

                        {/* Narrative Editorial Spreadsheet */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-950 leading-snug border-b border-neutral-100 pb-8">
                                    Dr. Sarath Ranaweera is the architect of Bio Foods. In 2014, he received the premier “Fairest Fair-trader of the World” award at the global Fair Trade Awards in Bonn, Germany.
                                </p>

                                <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                                    Selected from over 80 global contenders, this title highlighted pioneering process innovations within the international fair-trade network. Concurrently, the Marginalized Organic Producers’ Association (MOPA)—operating under the corporate framework of Bio Foods and established by the chairman—was documented as the premier Small Producer Organization of the Year in Asia.
                                </p>
                            </div>

                            {/* Chronology Step Breakout */}
                            <div className="space-y-8 pt-8 border-t border-neutral-100">
                                <div className="space-y-2">
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">[ HISTORICAL PROFILE TIMELINE ]</span>
                                    <h4 className="text-lg font-black uppercase tracking-tight text-neutral-950">
                                        Operational Genesis & Methodology
                                    </h4>
                                </div>

                                <div className="space-y-6 text-xs text-neutral-500 font-medium leading-relaxed">
                                    <p>
                                        By original discipline a mathematician, an encounter with industrial food poisoning during his university tenure sparked a structural investigation into standard commercial crop chemical compositions.
                                    </p>

                                    <p>
                                        This technical shift toward food technology and statistical analysis led him to refine custom agricultural processing models. Manufacturing his primary tea payload utilizing a leased regional factory, he secured a minimal exhibition stall at an international trade exposition. The immediate structural quality verification prompted buyers to place orders exhausting his maximum production capacity, establishing the commercial launchpad for Bio Foods.
                                    </p>

                                    {/* Inline Manifesto Statement Block */}
                                    <div className="bg-neutral-50 border-l-2 border-neutral-950 p-6 my-6 space-y-2">
                                        <span className="font-mono text-[9px] text-neutral-400 block uppercase tracking-widest">STRATEGIC CHARTER INTENT</span>
                                        <p className="font-mono text-xs italic text-neutral-900 leading-relaxed">
                                            "From the outset, the mission required that regional farmers receive protected equitable pricing structures, avoiding the volatile generational dropouts threatening agricultural stability."
                                        </p>
                                    </div>

                                    <p>
                                        To insulate individual agricultural nodes against shifting market thresholds and climate impacts, Dr. Ranaweera configured a minimum baseline price set clearly above localized cost matrices. This mechanism guaranteed programmatic income safety records.
                                    </p>

                                    <p>
                                        When global asset lines moved above this calculated threshold, baseline payout metrics scaled dynamically to match, complemented by binding purchase guarantees. Long before standard FLO regulations were formalized, Bio Foods maintained functional fair-trade frameworks natively. Dr. Ranaweera subsequently served in an advisory capacity as FLO charted out initial fair-trade mandates.
                                    </p>

                                    <p className="font-bold text-neutral-950 border-t border-neutral-100 pt-6">
                                        This remains the continuous blueprint to which we map our daily processing workflows. Armed with a doctorate in bio-statistics and spanning over two decades of processing infrastructure growth, he retains his foundational identity as a "Sri Lankan farmer"—structurally verified across the global ecosystem as the fairest of them all.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutManagement;