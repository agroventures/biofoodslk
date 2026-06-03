import React from 'react';
import { ShieldAlert, Target, Cpu, Users, ArrowUpRight, ExternalLink } from 'lucide-react';

function ProducersWebNotice() {
    return (
        <section className="py-16 bg-slate-50 rounded-[3rem] my-20 overflow-hidden border border-slate-100">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                
                {/* Partnership Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-8 border-b border-slate-200">
                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                        <ShieldAlert className="text-amber-500 w-6 h-6" />
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Initiative</p>
                            <h4 className="font-bold text-slate-900 leading-tight">COVID-19 Fair Trade Emergency</h4>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* You would place the GIZ / BMZ / Fairtrade logos here */}
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">In Partnership with: GIZ • BMZ • Fairtrade International</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Content & Context */}
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                            Assisting Farmer Communities <br /> 
                            <span className="text-brand-primary font-medium italic">Post-Pandemic Resilience</span>
                        </h3>
                        
                        <div className="prose prose-slate text-slate-600 space-y-4">
                            <p>
                                Bio Foods (Pvt) Ltd is implementing a strategic project to assist our network of smallholder farmers in navigating the challenges posed by the COVID-19 pandemic. 
                            </p>
                            <p>
                                This initiative, implemented by **GIZ** on behalf of the **German Federal Ministry for Economic Cooperation and Development (BMZ)**, aims to provide rapid assistance to stabilize fair trade supply chains and empower rural producers, particularly women.
                            </p>
                        </div>

                        {/* Objectives List */}
                        <div className="mt-10 space-y-4">
                            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                                    <Target size={20} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-sm">Waste Reduction Training</h5>
                                    <p className="text-xs text-slate-500 mt-1">Series of training sessions for spice farmers to enhance productivity during harvest.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-sm">Technological Integration</h5>
                                    <p className="text-xs text-slate-500 mt-1">Installation of color-separation machinery to boost processing efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image & Stats */}
                    <div className="relative">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
                            <img 
                                src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/web copy_edited.png" 
                                alt="Field training session" 
                                className="rounded-4xl w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Impact Stats */}
                        <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <Users className="text-brand-accent w-5 h-5" />
                                    <ArrowUpRight className="text-white/30 w-4 h-4" />
                                </div>
                                <div className="text-3xl font-black">1,100</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Beneficiary Farmers</div>
                            </div>
                            
                            <div className="bg-brand-primary text-white p-6 rounded-3xl shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <Cpu className="text-white w-5 h-5" />
                                    <ArrowUpRight className="text-white/30 w-4 h-4" />
                                </div>
                                <div className="text-3xl font-black">+40%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Production Output</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                        Fair Trade Emergency Initiative • Project Disclosure
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProducersWebNotice;