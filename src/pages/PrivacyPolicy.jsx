import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ShieldCheck, Gavel, AlertCircle, RefreshCw, Mail, Cookie, Landmark } from 'lucide-react';

function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <header className="bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full mb-6">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Privacy & Governance</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
                        Privacy <span className="text-brand-primary">Policy</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-2xl">
                        This policy outlines our commitment to protecting your data and the legal boundaries governing your use of the Bio Foods platform.
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-slate max-w-none">
                    
                    {/* Disclaimer Section */}
                    <section className="mb-16 flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="bg-white p-4 rounded-2xl shadow-sm">
                            <AlertCircle className="text-brand-primary" size={32} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 m-0 mb-2">No Warranties</h2>
                            <p className="text-slate-600 text-sm leading-relaxed m-0">
                                This Website is provided "as is," with all faults. Bio Foods expresses no representations or 
                                warranties of any kind related to this Website or the materials contained herein. 
                                Nothing on this Website shall be interpreted as advising you.
                            </p>
                        </div>
                    </section>

                    {/* Liability & Indemnification */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <section className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Gavel className="text-slate-400" size={20} />
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight m-0">Limitation of Liability</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                In no event shall Bio Foods, its officers, or directors be held liable for anything arising out of your 
                                use of this Website. We are not liable for any indirect, consequential, or special liabilities.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-slate-400" size={20} />
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight m-0">Indemnification</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                You hereby indemnify Bio Foods to the fullest extent from any liabilities, costs, or demands 
                                arising from your breach of any provisions within these terms.
                            </p>
                        </section>
                    </div>

                    <hr className="border-slate-100 mb-16" />

                    {/* Governance Sections */}
                    <div className="space-y-12 mb-20">
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Severability & Variation</h3>
                            <p className="text-slate-600">
                                If any provision is found invalid under applicable law, it shall be deleted without affecting 
                                the remaining provisions. Bio Foods reserves the right to revise these Terms at any time; 
                                users are expected to review these terms regularly.
                            </p>
                        </section>

                        <section className="p-8 border border-slate-200 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="text-brand-primary" size={24} />
                                <h3 className="text-xl font-bold text-slate-900 m-0">Governing Law & Jurisdiction</h3>
                            </div>
                            <p className="text-slate-600 m-0">
                                These Terms will be governed by and interpreted in accordance with the 
                                <span className="text-slate-900 font-bold"> laws of Sri Lanka</span>. 
                                You submit to the non-exclusive jurisdiction of the state and federal courts located in 
                                Sri Lanka for the resolution of any disputes.
                            </p>
                        </section>

                        {/* Cookie Policy Callout */}
                        <section className="bg-brand-primary text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-brand-primary/20 relative overflow-hidden">
                            <Cookie className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
                            <h3 className="text-2xl font-black mb-4">Cookie Policy</h3>
                            <p className="text-white/80 mb-6 leading-relaxed">
                                We use cookies to enhance website performance, learn about your interests, and provide social media features. 
                                By continuing to browse, you consent to our use of cookies.
                            </p>
                            <button className="bg-white text-brand-primary font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
                                Manage Preferences
                            </button>
                        </section>
                    </div>

                    {/* Contact Footer */}
                    <div className="flex flex-col items-center text-center p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary mb-6">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">Questions?</h3>
                        <p className="text-slate-500 mb-6">Reach out to our legal and data protection team.</p>
                        <a 
                            href="mailto:info@biofoodslk.com" 
                            className="text-brand-primary font-black text-lg hover:underline underline-offset-8"
                        >
                            info@biofoodslk.com
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;