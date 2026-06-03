import React from 'react';
import { certifications } from '../../data/certifications';
import {
    ShieldCheck,
    Beaker,
    ClipboardCheck,
    Search,
    Microscope,
    Info,
    CheckCircle,
    BadgeCheck,
    Shield,
    Award,
    FileCheck,
    Network,
    CheckCircle2
} from 'lucide-react';

function QualityCertificationsDetails() {
    const procedures = [
        { title: "Quality Control", icon: <Search className="w-6 h-6" />, desc: "Prevention, detection, and rejection at every production stage." },
        { title: "Quality Assurance", icon: <ClipboardCheck className="w-6 h-6" />, desc: "Systematic monitoring to ensure all processes meet global benchmarks." },
        { title: "Internal Control", icon: <ShieldCheck className="w-6 h-6" />, desc: "Rigorous ICS to maintain biodynamic and organic integrity." },
        { title: "Research & Development", icon: <Beaker className="w-6 h-6" />, desc: "Innovative processing methods to enhance nutritional value." },
    ];

    const qualitySystems = [
        { icon: BadgeCheck, title: "ISO Certified Operations", color: "brand-primary" },
        { icon: Shield, title: "HACCP Food Safety Compliance", color: "brand-secondary" },
        { icon: Award, title: "GMP Manufacturing Standards", color: "brand-primary" }
    ];

    const qaProcess = [
        { icon: Microscope, title: "Laboratory Testing", description: "Comprehensive chemical and biological analysis" },
        { icon: FileCheck, title: "Certification Verification", description: "Third-party validation of compliance" },
        { icon: Network, title: "Traceability Validation", description: "Complete supply chain transparency" }
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
                        <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/ICS_logos.avif" alt="ICS" className="h-12 lg:h-16 w-auto object-contain" />
                        <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/Foodsafety.avif" alt="Food Safety" className="h-12 lg:h-16 w-auto object-contain" />
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
                            <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/QualityCertifications/testing.avif" alt="Lab Testing" className="w-1/2 rounded-3xl shadow-xl" />
                            <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/QualityCertifications/testing2.avif" alt="Quality Check" className="w-1/2 rounded-3xl shadow-xl mt-8" />
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
                            To be <span className="text-white font-bold">"Certified Organic"</span>, every single stage - from soil preparation to distribution - must comply
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl overflow-hidden hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-brand-light/30 flex items-center justify-center p-6 border-b border-brand-light">
                                <img
                                    src={cert.img}
                                    alt={cert.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-brand-dark/70 leading-relaxed line-clamp-4">
                                    {cert.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full py-20 lg:py-24 bg-brand-light/30 border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                                Quality & Safety Systems
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {qualitySystems.map((system, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                                        <system.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-dark">{system.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* QA Process */}
            <section className="w-full py-20 lg:py-24 bg-white border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                                Quality Assurance Process
                            </h2>
                            <p className="text-lg text-brand-dark/70">Each product undergoes:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {qaProcess.map((process, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-brand-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6">
                                        <process.icon className="w-7 h-7 text-brand-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">{process.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">{process.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QualityCertificationsDetails;