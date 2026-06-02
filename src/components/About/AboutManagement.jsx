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

        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="space-y-24 md:space-y-32">
                    {management.map((member, index) => (
                        <div
                            key={member.id}
                            className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    {/* Decorative Accent Background */}
                                    <div className={`absolute -inset-4 rounded-[2.5rem] opacity-10 transition-transform duration-500 group-hover:scale-105 ${index % 2 === 0 ? 'bg-brand-primary rotate-3' : 'bg-slate-900 -rotate-3'
                                        }`} />

                                    <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">
                                        {member.role}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                        {member.name}
                                    </h3>
                                </div>

                                <div className="relative">
                                    {/* Decorative Quote Mark */}
                                    <span className="absolute -top-6 -left-4 text-8xl text-brand-primary/10 font-serif pointer-events-none">“</span>

                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic relative z-10">
                                        {member.message || "Commitment to excellence and organic integrity is at the heart of everything we do at Bio Foods."}
                                    </p>
                                </div>

                                <div className={`h-1.5 w-20 rounded-full ${index % 2 === 0 ? 'bg-brand-primary' : 'bg-slate-900'
                                    }`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:items-start gap-12 lg:gap-20 lg:flex-row max-w-7xl mx-auto px-6 mt-24 md:mt-32">

                {/* Founder Image Card */}
                <div className="w-full lg:w-2/5">
                    <div className="relative group">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-primary opacity-10 rotate-3 transition-transform duration-500 group-hover:scale-105" />
                        <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 overflow-hidden rounded-4xl shadow-2xl">
                            <img
                                src="/About/Dr.Sarath-Ranaweera.avif"
                                alt="Dr. Sarath Ranaweera"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="space-y-2">
                            <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">
                                Consultant
                            </span>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                Dr. Sarath Ranaweera (Ph.D)
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-3/5 space-y-8">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl leading-relaxed text-slate-600 italic">
                            Dr. Sarath Ranaweera is the founder of Bio Foods and currently serves as a consultant to the company. In 2014, he received the “Fairest Fair-trader of the World” award at the first ever Fair Trade Awards (organized by FLO) held in Bonn, Germany.
                        </p>

                        <p className="text-slate-600">
                            Selected from over 80 individuals, this award recognized special efforts or innovations by outstanding individuals within the global fair-trade system. In addition, the Marginalized Organic Producers’ Association (MOPA) that functions under the overall management of Bio Foods (and also founded by the chairman) was recognized as the best small Producer organization of the year 2014 in Asia at the ceremony.
                        </p>

                        <div className="pt-4">
                            <div className="h-1.5 w-20 rounded-full bg-brand-primary mb-6" />
                            <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                                So how did he get here?
                            </h4>

                            <div className="space-y-4 text-slate-600">
                                <p>
                                    By training a mathematician (and notorious sportsman), he was the unfortunate victim of some aggressive food poisoning during his time in university. This prompted him to wonder what actually goes in our food.
                                </p>

                                <p>
                                    A consequent switch in field to food technology and statistics (because he couldn’t just shed the numbers!) led him to develop his own tea manufacturing processes. He produced his first batch of tea with a rented factory, rented out a small square space at a trade fair, found a buyer that was so impressed with the quality of his tea that he ordered everything that could be produced, and that is how Bio Foods got its start.
                                </p>

                                <div className="relative my-6">
                                    <span className="absolute -top-6 -left-4 text-8xl text-brand-primary/10 font-serif pointer-events-none">"</span>
                                    <p className="relative z-10 text-lg italic text-slate-700">
                                        "From the outset, he wanted to make sure that farmers were treated fairly, because none of the second generation farmers he met wanted to continue the work of their fathers because their livelihood was so risky."
                                    </p>
                                </div>

                                <p>
                                    Everything from fluctuating market prices to the weather could compromise their income, so to provide the farmers with some job security, Dr. Ranaweera set a minimum price that was above their cost of production. As such, no matter what the market price was, they could be assured of an income.
                                </p>

                                <p>
                                    If the market price were to rise above that threshold, that price was matched, and farmers were given a buying guarantee. So right from the beginning, before FLO was even born, Bio Foods was practicing the fair trade and organic way. In fact, Dr. Ranaweera was involved in an advisory capacity when FLO was setting down their fair trade regulations.
                                </p>

                                <p className="font-semibold text-slate-800">
                                    This is the enduring vision of our visionary founder that we commit ourselves to maintaining every day. A steadfastly supportive wife both at work and at home, two wonderful daughters, a doctorate in bio-statistics, and over two decades later, he remains a "Sri Lankan farmer" as he calls himself, recognized on the international platform as the fairest of them all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutManagement;