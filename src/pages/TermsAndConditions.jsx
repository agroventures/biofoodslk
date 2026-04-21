import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ShieldCheck, FileText, Lock, EyeOff, Scale, Globe } from 'lucide-react';
import useSEO from '../hooks/useSEO';

function TermsAndConditions() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Terms and Conditions",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className="min-h-screen bg-white selection:bg-brand-primary/20">
            <Navbar />

            {/* Hero Header */}
            <header className="bg-slate-50 border-b border-slate-100 py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full mb-6">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Legal & Governance</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
                        Terms & <span className="text-brand-primary">Conditions</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Last Updated: October 2023</p>
                </div>
            </header>

            {/* Content Section */}
            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-slate lg:prose-lg max-w-none">

                    {/* Introduction */}
                    <div className="bg-brand-light/30 border-l-4 border-brand-primary p-8 rounded-r-3xl mb-12">
                        <p className="text-slate-700 leading-relaxed m-0 italic font-medium">
                            Please read these Terms and Conditions carefully before using the biofoodslk.com website.
                            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                        </p>
                    </div>

                    {/* Section: Overview */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                <FileText size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 m-0">General Agreement</h2>
                        </div>
                        <p className="text-slate-600">
                            By using this Website, you agree to accept all terms and conditions written herein.
                            You must not use this Website if you disagree with any of these Standard Terms and Conditions.
                            Any new features or tools added to the current store shall also be subject to the Terms of Service.
                        </p>
                    </section>

                    {/* Section: IP */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                <Scale size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 m-0">Intellectual Property Rights</h2>
                        </div>
                        <p className="text-slate-600">
                            Other than the content you own, under these Terms, <strong>Bio Foods and/or its licensors</strong> own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for the purposes of viewing the material contained on this Website.
                        </p>
                    </section>

                    {/* Section: Restrictions */}
                    <section className="mb-16 bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white">
                                <EyeOff size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 m-0">Prohibited Restrictions</h2>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "Publishing Website material in any other media",
                                "Commercializing any Website material",
                                "Data mining or extraction activities",
                                "Using Website in a way that is damaging",
                                "Contrary to applicable laws and regulations",
                                "Engaging in unauthorized advertising"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section: Content */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                <Globe size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 m-0">User Content</h2>
                        </div>
                        <p className="text-slate-600">
                            "Content" shall mean any audio, video, text, images, or other material you choose to display on this Website.
                            By displaying Content, you grant Bio Foods a non-exclusive, worldwide irrevocable license to use, reproduce, adapt, publish, and distribute it in any and all media.
                        </p>
                    </section>

                    {/* Section: Third Party */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                <Lock size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 m-0">Third-Party Links</h2>
                        </div>
                        <p className="text-slate-600">
                            Bio Foods has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge that Bio Foods shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with use of such content.
                        </p>
                    </section>
                </div>

                {/* Footer Notice */}
                <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                    <p className="text-slate-400 text-sm">
                        If you have any questions regarding these terms, please contact our legal team at <br />
                        <a href="mailto:info@biofoodslk.com" className="text-brand-primary font-bold hover:underline">info@biofoodslk.com</a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default TermsAndConditions;