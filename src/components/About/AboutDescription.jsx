import React from 'react';
import { Award, Globe, Leaf, Users, TrendingUp, Heart, CheckCircle2, Sparkles } from 'lucide-react';

function AboutDescription() {
    const milestones = [
        { year: "1993", title: "Established", description: "Family-owned business founded in Kandy" },
        { year: "2014", title: "World Recognition", description: "First ever 'World's Fairest Fairtrader Award'" },
        { year: "2018", title: "25th Anniversary", description: "Leading exporters of organic products" },
        { year: "2024", title: "Global Leader", description: "Trusted worldwide for organic excellence" }
    ];

    const achievements = [
        {
            icon: Award,
            title: "World's Fairest Fairtrader",
            description: "Awarded to Dr. Sarath Ranaweera by FLO in 2014",
            color: "bg-brand-primary"
        },
        {
            icon: Users,
            title: "Best Small Organic Farmer Group",
            description: "MOPA recognized as best in Asia by FLO 2014",
            color: "bg-brand-secondary"
        },
        {
            icon: Globe,
            title: "Global Certifications",
            description: "Trusted across Europe, North America, Japan & Australia",
            color: "bg-brand-accent"
        }
    ];

    const values = [
        { icon: Leaf, text: "100% Organic & Biodynamic" },
        { icon: Heart, text: "Fair Trade Standards" },
        { icon: CheckCircle2, text: "Complete Traceability" },
        { icon: TrendingUp, text: "Sustainable Agriculture" }
    ];

    return (
        <section className="relative w-full py-20 lg:py-28 bg-brand-light overflow-hidden">
            {/* Background Decorations using brand colors */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-40 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl' />
                <div className='absolute bottom-40 left-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl' />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-brand-primary/20 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Our Story</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
                        About <br className="sm:hidden" />
                        <span className="text-brand-primary">Bio Foods</span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-brand-primary/10">
                            <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center mb-6">
                                <Leaf className="w-7 h-7 text-white" />
                            </div>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                Established in 1993, we are a company devoted to sustainable, organic and fair trade way of life. 
                                Starting out as a family owned business based in Kandy, this company has grown to be one of the 
                                world leaders in biodynamic, organic and fair-trade agriculture.
                            </p>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                We have always believed in clean, agrochemically uncontaminated produce the way nature makes it. 
                                Even our fertilizer is certified organic, so that we can leave behind clean air, water and soil 
                                for all living things, present and future.
                            </p>
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                                In addition, from its very inception, Bio Foods also ensured fair trade standards to take care 
                                of our farmers from fluctuating market prices and middle-man exploitation. This is what makes 
                                us leaders in modern sustainable agriculture.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl p-5 border border-brand-primary/10 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <value.icon className="w-6 h-6 text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm font-bold text-gray-900">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img 
                                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop" 
                                alt="Bio Foods Story" 
                                className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/80 to-transparent" />
                            
                            {/* Award Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 text-sm mb-1">World's Fairest Fairtrader</p>
                                        <p className="text-xs text-gray-600">Dr. Sarath Ranaweera - 2014</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-brand-primary/10">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h4>
                            <div className="space-y-6">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="flex gap-4 group">
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 bg-brand-light border-2 border-brand-primary/20 rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors">
                                                <span className="text-brand-primary group-hover:text-white font-black text-sm transition-colors">{milestone.year}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h5 className="font-bold text-gray-900 mb-1">{milestone.title}</h5>
                                            <p className="text-sm text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Recognition & Achievements</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-brand-primary/10"
                            >
                                <div className={`w-14 h-14 ${achievement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <achievement.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                                <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Content */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-primary/10 shadow-xl">
                    <h3 className="text-2xl lg:text-3xl font-black text-brand-primary mb-6">Our Operations Today</h3>
                    
                    <div className="space-y-6 text-base lg:text-lg text-gray-700 leading-relaxed">
                        <p>
                            As a longtime processor and exporter of high quality products, Bio Foods plays a major role in 
                            the organic post-harvested food industry in Sri Lanka. While fulfilling the ever-growing needs 
                            of the international market, we take all the necessary steps (and responsibility!) to assure the 
                            sustainability of all stakeholders of this essential supply chain; from producer to consumer.
                        </p>
                        
                        <p>
                            We provide a guaranteed minimum price at the farm-gate, transparent documentation for assured 
                            traceability and rigorously maintain local and international environmental regulations. While we 
                            were initially established as an exporter of organic and fair trade teas, Bio Foods soon expanded 
                            to be the worlds' first fairtrade registered processor & exporter for spices.
                        </p>
                        
                        <p>
                            We are now gearing up to introduce a large range of products marketed under our own brand, which 
                            was our chairman's initiative to give back to the people of the land that we harvest our wonderful 
                            produce from. These products range from teas, spices, herbs, fruits, vegetables, coconut products, 
                            to whole grains, and should soon be accessible to the a discerning international audience as well, 
                            because we believe that the #organicway is for everyone, no matter where they are from.
                        </p>
                        
                        <p>
                            We have organised our many certified organic farmers into farmer groups, and we process our harvest 
                            in our own processing units, scattered all over Sri Lanka. We also package the final goods, which 
                            is why we can take responsibility (and pride!) in the transparency of our entire production line.
                        </p>
                        
                        <p>
                            We currently can export the final products in bulk form or in consumer packing all over the world, 
                            from Europe, North America, Japan, Australia and many other developed countries, under many different 
                            certifications. The farmer associations founded by Bio Foods have set both local and international 
                            standards, with our Marginalized organic Producers Association (MOPA) being awarded "Best Small 
                            Organic Farmer Group in Asia" in 2014 by the Fairtrade Labelling Organization (FLO).
                        </p>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-brand-primary/10">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-black text-brand-primary mb-2">30+</div>
                            <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-black text-brand-primary mb-2">1000+</div>
                            <div className="text-sm text-gray-600 font-semibold">Farmer Families</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-black text-brand-primary mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-semibold">Organic Certified</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-black text-brand-primary mb-2">Global</div>
                            <div className="text-sm text-gray-600 font-semibold">Export Reach</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutDescription;