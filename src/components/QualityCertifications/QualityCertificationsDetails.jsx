import React from 'react';
import { certifications } from '../../data/certifications';
import { 
    ShieldCheck, 
    Beaker, 
    ClipboardCheck, 
    Search, 
    Microscope, 
    Info, 
    CheckCircle 
} from 'lucide-react';

function QualityCertificationsDetails() {
    const procedures = [
        { title: "Quality Control", icon: <Search className="w-6 h-6" />, desc: "Prevention, detection, and rejection at every production stage." },
        { title: "Quality Assurance", icon: <ClipboardCheck className="w-6 h-6" />, desc: "Systematic monitoring to ensure all processes meet global benchmarks." },
        { title: "Internal Control", icon: <ShieldCheck className="w-6 h-6" />, desc: "Rigorous ICS to maintain biodynamic and organic integrity." },
        { title: "Research & Development", icon: <Beaker className="w-6 h-6" />, desc: "Innovative processing methods to enhance nutritional value." },
    ];

    return (
        <div className="bg-white">
            {/* 1. Top Logo Bar - Social Proof */}
            <div className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">
                        Our Global Compliance Standards
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
                        <img src="/Home/ICS_logos.avif" alt="ICS" className="h-12 lg:h-16 w-auto object-contain" />
                        <img src="/Home/Foodsafety.avif" alt="Food Safety" className="h-12 lg:h-16 w-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* 2. The Four Procedures Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                            Overlooked by <br />
                            <span className="text-brand-primary">Precision.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Our processes are managed by a dedicated team of qualified professionals across four critical steps. 
                            This systematic approach ensures we maintain the highest possible quality standards through rigorous 
                            prevention, detection, and rejection procedures.
                        </p>
                        <div className="flex gap-4">
                            <img src="/QualityCertifications/testing.avif" alt="Lab Testing" className="w-1/2 rounded-3xl shadow-xl" />
                            <img src="/QualityCertifications/testing2.avif" alt="Quality Check" className="w-1/2 rounded-3xl shadow-xl mt-8" />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {procedures.map((item) => (
                            <div key={item.title} className="p-8 bg-brand-light rounded-4xl border border-brand-primary/5 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Educational Context (The "Why") */}
            <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
                <Microscope className="absolute -right-20 -top-20 w-96 h-96 text-white/5 rotate-12" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <Info className="text-brand-primary" />
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary">Consumer Education</h4>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight">
                        What does it mean to be <br /> Truly Certified?
                    </h3>
                    <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                        <p>
                            To be <span className="text-white font-bold">"Certified Organic"</span>, every single stage—from soil preparation to distribution—must comply 
                            with stringent global regulations. It is a massive financial and operational commitment.
                        </p>
                        <p>
                            Beyond the costs, these logos establish <span className="text-brand-primary">trust</span>. They are a visual identity for the organic 
                            farming sector, ensuring that when you see a logo, you are seeing a promise of health, sustainability, and ethics.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Detailed Certifications List (Your existing logic) */}
            <section className="py-24 max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-black text-brand-primary uppercase tracking-[0.4em] mb-4">The Directory</h2>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tight">Standard Compliance Index</h3>
                </div>
                
                <div className="space-y-32">
                    {certifications.map((cert, index) => (
                        <div 
                            key={cert.id} 
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Logo Side */}
                            <div className="w-full lg:w-1/3 flex justify-center">
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-colors" />
                                    <img 
                                        src={cert.img} 
                                        alt={cert.name} 
                                        className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=Certification'; }}
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-2/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-px w-12 bg-brand-primary" />
                                    <span className="text-brand-primary font-black uppercase text-xs tracking-widest">
                                        Standard {cert.id < 10 ? `0${cert.id}` : cert.id}
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                                    {cert.name}
                                </h2>
                                <div className="prose prose-slate lg:prose-lg max-w-none">
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                        {cert.desc}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-slate-400">
                                    <CheckCircle size={16} className="text-brand-primary" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Third-Party Verified & Audited</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default QualityCertificationsDetails;