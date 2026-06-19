import React from 'react';
import { certifications } from '../../data/certifications';
import {
    ShieldCheck,
    Beaker,
    ClipboardCheck,
    Search,
    Microscope,
    Info,
    BadgeCheck,
    Shield,
    Award,
    FileCheck,
    Network
} from 'lucide-react';

function QualityCertificationsDetails() {
    const procedures = [
        { title: "Quality Control", icon: <Search className="w-4 h-4 stroke-[1.5]" />, desc: "Prevention, detection, and rejection at every manufacturing block." },
        { title: "Quality Assurance", icon: <ClipboardCheck className="w-4 h-4 stroke-[1.5]" />, desc: "Systematic compliance tracking to ensure processes match international marks." },
        { title: "Internal Control", icon: <ShieldCheck className="w-4 h-4 stroke-[1.5]" />, desc: "Rigorous ICS verification to defend organic crop and biodynamic status." },
        { title: "Research & Development", icon: <Beaker className="w-4 h-4 stroke-[1.5]" />, desc: "Innovative structural extraction methodologies to improve final yield matrices." },
    ];

    const qualitySystems = [
        { icon: BadgeCheck, title: "ISO Certified Operations" },
        { icon: Shield, title: "HACCP Food Safety Compliance" },
        { icon: Award, title: "GMP Manufacturing Standards" }
    ];

    const qaProcess = [
        { icon: Microscope, title: "Laboratory Testing", description: "Comprehensive structural chemical and biological extraction assay checks." },
        { icon: FileCheck, title: "Certification Verification", description: "Third-party validation audits executed over strict annual schedules." },
        { icon: Network, title: "Traceability Validation", description: "Complete digital tracking maps monitored from crop node through transit paths." }
    ];

    return (
        <div className="bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white font-sans">
            
            {/* ── 1. Structural Trust Anchor Node ── */}
            <div className="py-16 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-10">
                        Global Compliance Architecture
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 opacity-100">
                        <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/ICS_logos.avif" alt="ICS" className="h-10 lg:h-12 w-auto object-contain" />
                        <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Home/Foodsafety.avif" alt="Food Safety" className="h-10 lg:h-12 w-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* ── 2. The Four Pillars Strategic Matrix ── */}
            <section className="py-24 max-w-7xl mx-auto px-6 border-b border-neutral-100">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
                    <div className="lg:col-span-5 space-y-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block">OPERATIONAL STANDARD</span>
                        <h2 className="text-4xl lg:text-6xl font-black text-neutral-950 tracking-tighter uppercase leading-[0.85]">
                            Governed by<br />Precision
                        </h2>
                        <p className="text-neutral-500 text-sm font-medium leading-relaxed max-w-md">
                            Our operations are strictly managed by certified technical officers across four clear nodes. This protocol shields the supply structure using meticulous prevention, immediate detection, and batch exclusion methods.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/QualityCertifications/testing.avif" alt="Lab Testing" className="w-1/2 aspect-square object-cover rounded-xl border border-neutral-200/60" />
                            <img src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/QualityCertifications/testing2.avif" alt="Quality Check" className="w-1/2 aspect-square object-cover rounded-xl border border-neutral-200/60 mt-6" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12 pt-4">
                        {procedures.map((item) => (
                            <div key={item.title} className="space-y-4 pt-6 border-t border-neutral-100 group">
                                <div className="text-neutral-950 flex items-center justify-between">
                                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">[ SECURITY NODE ]</span>
                                    {item.icon}
                                </div>
                                <h3 className="font-black text-neutral-950 uppercase tracking-wider text-xs">{item.title}</h3>
                                <p className="text-xs text-neutral-400 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. Educational Context Canvas ── */}
            <section className="bg-neutral-950 py-24 text-white overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                        <Info className="text-white w-4 h-4 stroke-[1.5]" />
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">Framework Paradigm</h4>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter max-w-2xl leading-none">
                        What parameters constitute true biological verification?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/10 text-neutral-400 text-xs leading-relaxed font-medium">
                        <p>
                            To be logged as <span className="text-white font-bold">"Certified Organic"</span>, every micro-tier—extending cleanly from substrate enrichment schedules up through modern factory line outputs—must satisfy critical global validation matrices. It represents an intensive institutional and financial setup step.
                        </p>
                        <p>
                            Beyond structural cost figures, these international marks construct verified commercial trust. They establish a reliable visual blueprint for clean enterprise trade networks, serving as an unbroken pledge toward ecosystem equilibrium.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 4. Main Standard Compliance Index ── */}
            <section className="py-24 max-w-7xl mx-auto px-6 border-b border-neutral-100">
                <div className="mb-16">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-2">DIRECTORY RESOURCE</span>
                    <h3 className="text-2xl font-black text-neutral-950 uppercase tracking-tight">Standard Compliance Index</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-12 divide-y md:divide-y-0 border-b border-neutral-100 pb-16">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`group bg-white pt-8 md:pt-0 md:px-8 transition-colors duration-300 ${
                                index % 3 !== 0 ? 'lg:border-l lg:border-neutral-100' : ''
                            } ${
                                index % 2 !== 0 ? 'md:border-l md:border-neutral-100 lg:border-l-0 lg:border-neutral-100' : ''
                            }`}
                        >
                            <div className="h-40 bg-neutral-50/60 rounded-xl flex items-center justify-center p-6 border border-neutral-200/50 mb-6 overflow-hidden">
                                <img
                                    src={cert.img}
                                    alt={cert.name}
                                    className="max-h-full max-w-full object-contain opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="block font-mono text-[9px] text-neutral-400">CERTIFICATION REG_0{cert.id || index + 1}</span>
                                <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider leading-tight group-hover:text-neutral-600 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-xs text-neutral-400 leading-relaxed font-medium line-clamp-3">
                                    {cert.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 5. Quality & Safety Framework Rows ── */}
            <section className="w-full py-24 max-w-7xl mx-auto px-6 border-b border-neutral-100">
                <div className="grid lg:grid-cols-12 gap-8 items-baseline mb-12">
                    <div className="lg:col-span-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-neutral-950">CRITICAL ACCREDITATION</span>
                    </div>
                    <div className="lg:col-span-8">
                        <h2 className="text-xl lg:text-3xl font-black text-neutral-950 uppercase tracking-tight">
                            Quality & Safety Infrastructure
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-neutral-950 divide-y md:divide-y-0 md:divide-x divide-neutral-950">
                    {qualitySystems.map((system, index) => (
                        <div key={index} className="py-8 md:px-8 first:pl-0 last:pr-0 bg-white flex items-center gap-4 group">
                            <div className="text-neutral-950 shrink-0">
                                <system.icon className="w-4 h-4 stroke-2" />
                            </div>
                            <h3 className="text-xs font-mono font-black uppercase tracking-wider text-neutral-950 group-hover:translate-x-1 transition-transform">
                                {system.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 6. Industrial Quality Assurance Process ── */}
            <section className="w-full py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl font-black text-neutral-950 uppercase tracking-tighter">
                            Quality Assurance Process
                        </h2>
                    </div>
                    <div className="lg:col-span-8 flex items-end">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                            Each production payload passes through three explicit screening validation rows:
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {qaProcess.map((process, index) => (
                        <div key={index} className="space-y-3 pt-6 border-t-2 border-neutral-950 bg-white">
                            <div className="text-neutral-950 flex items-center justify-between mb-4">
                                <span className="font-mono text-[9px] text-neutral-400">PHASE ROUTE LAYER_0{index + 1}</span>
                                <process.icon className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider">{process.title}</h3>
                            <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-sm">{process.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default QualityCertificationsDetails;