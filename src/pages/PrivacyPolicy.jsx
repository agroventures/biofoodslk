import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ShieldCheck, Gavel, AlertCircle, Mail, Cookie, Landmark } from 'lucide-react';
import useSEO from '../hooks/useSEO';

function PrivacyPolicy() {
    const url = window.location.href;

    useSEO({
        url,
        image_alt: "Privacy Policy",
    });

    return (
        <div className="min-h-screen bg-white text-neutral-950 antialiased selection:bg-neutral-900 selection:text-white">
            <Navbar />

            {/* ── Editorial Header ── */}
            <header className="border-b border-neutral-950 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-neutral-950 mb-6">
                        <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Privacy & Governance</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none mb-6">
                        Privacy <br />
                        <span className="text-neutral-400 italic font-normal normal-case tracking-tight">Policy</span>
                    </h1>
                    <p className="text-base text-neutral-600 font-medium max-w-2xl leading-relaxed">
                        This policy blueprints our commitment to protecting localized data clusters and details the structural boundaries governing your use of the platform.
                    </p>
                </div>
            </header>

            {/* ── Content Section ── */}
            <main className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
                
                {/* Disclaimer Block */}
                <section className="group border border-neutral-200 p-8 flex flex-col md:flex-row gap-6 items-start bg-white mb-16 hover:border-neutral-950 transition-colors duration-300">
                    <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-950 shrink-0">
                        <AlertCircle className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-black uppercase tracking-tight text-neutral-950 m-0">No Warranties Baseline</h2>
                        </div>
                        <p className="text-sm text-neutral-600 font-medium leading-relaxed m-0">
                            This platform is deployed strictly "as is," with all integrated faults. Agroventures Group delivers zero warranties or corporate representations of any kind relative to this digital matrix or the parameters hosted inside.
                        </p>
                    </div>
                </section>

                {/* Liability & Indemnification Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-neutral-100 pb-16 mb-16">
                    <section className="group space-y-4">
                        <div className="flex items-center gap-3">
                            <Gavel className="text-neutral-400 w-4 h-4 stroke-[1.5]" />
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-sm font-mono font-black uppercase tracking-wider text-neutral-900 m-0">Liability Bounds</h3>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600 font-medium leading-relaxed pl-7">
                            In no sequential timeline shall Agroventures or its operational directors be held accountable for system friction arising from your deployment of this interface. We claim zero liability for indirect, consequence-driven losses.
                        </p>
                    </section>

                    <section className="group space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-neutral-400 w-4 h-4 stroke-[1.5]" />
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-sm font-mono font-black uppercase tracking-wider text-neutral-900 m-0">Indemnification</h3>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600 font-medium leading-relaxed pl-7">
                            You hereby indemnify the organization to the maximum legal threshold from all liability matrix points, data tracking expenditures, or legal demands originating from your direct breach of these provisions.
                        </p>
                    </section>
                </div>

                {/* Governance Sections */}
                <div className="space-y-16 mb-24">
                    <section className="group">
                        <div className="flex items-baseline gap-2 mb-4">
                            <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950">Severability & Continuous Variation</h3>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-12">
                            If any separate line item is deemed void under statutory laws, it shall be deleted smoothly without disrupting the validation sequence of the surrounding text framework. Agroventures maintains absolute privileges to alter these terms over any given milestone.
                        </p>
                    </section>

                    {/* Jurisdiction Box */}
                    <section className="group border border-neutral-200 p-8 bg-white hover:border-neutral-950 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <Landmark className="text-neutral-950 w-5 h-5 stroke-[1.5]" />
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-lg font-black uppercase tracking-tight text-neutral-950 m-0">Governing Law Matrix</h3>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed pl-0 sm:pl-8">
                            These architecture policies are interpreted explicitly in agreement with the <strong className="text-neutral-950 font-bold">laws of Sri Lanka</strong>. You submit entirely to the non-exclusive jurisdiction of the state courts located in Sri Lanka to resolve all protocol anomalies.
                        </p>
                    </section>

                    {/* Cookie System Block */}
                    <section className="bg-neutral-950 text-white p-8 lg:p-12 border border-neutral-950 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <Cookie className="absolute -right-6 -bottom-6 w-32 h-32 text-neutral-900 pointer-events-none stroke-1" />
                        <div className="space-y-3 relative z-10 max-w-xl">
                            <div className="flex items-center gap-2">
                                <h3 className="font-mono text-xs font-black uppercase tracking-tight text-white">Cookie Performance Ecosystem</h3>
                            </div>
                            <p className="text-sm text-neutral-300 font-medium leading-relaxed">
                                We utilize cookies to stabilize tracking data, balance server processing speeds, and optimize analytical endpoints. Prolonged interface activity confirms your compliance with this matrix.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Contact Protocol Terminal */}
                <div className="flex flex-col items-center text-center p-12 border border-neutral-200 bg-white hover:border-neutral-950 transition-colors duration-300">
                    <div className="p-3 bg-neutral-950 text-white mb-6">
                        <Mail className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-950 mb-2">Compliance Interface</h3>
                    <p className="text-sm text-neutral-500 font-medium max-w-sm mb-6">
                        Route all parameters requiring legal clarification directly to our data governance console.
                    </p>
                    <a
                        href="mailto:info@biofoodsagro.com"
                        className="text-neutral-950 font-black text-xl border-b-2 border-neutral-950 pb-1 hover:text-neutral-400 hover:border-neutral-200 transition-colors"
                    >
                        info@biofoodsagro.com
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;