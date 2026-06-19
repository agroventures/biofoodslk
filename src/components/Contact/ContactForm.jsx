import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitStatus('success');
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-20 px-6 font-sans">
            
            {/* ── Submission Feedback Node ── */}
            {isSubmitted && (
                <div className="mb-8 p-5 bg-neutral-950 text-white border border-white/10 rounded-xl flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="text-sm font-mono uppercase tracking-wider font-bold">Transmission Successful</span>
                            <span className="text-xs text-neutral-400">Our operational desk will review your submission shortly.</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                        aria-label="Dismiss alert"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* ── Main Interface Split Matrix ── */}
            <div className="flex flex-col md:flex-row border border-neutral-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">

                {/* Left Panel: Corporate Core Node */}
                <div className="md:w-[35%] bg-neutral-950 p-8 lg:p-12 text-white flex flex-col justify-between relative border-r border-neutral-900">
                    
                    {/* Subtle Internal Grid Accent */}
                    <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="relative z-10 space-y-12">
                        <div>
                            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">Contact</span>
                            <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-white">Get in<br />touch</h2>
                            <p className="mt-4 text-sm text-neutral-400 font-medium leading-relaxed">
                                Our team welcomes inquiries related to partnerships, product sourcing, and global distribution logistics.
                            </p>
                        </div>

                        {/* Communication Streams */}
                        <div className="space-y-6 pt-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-4 h-4 text-neutral-500 mt-1 shrink-0 stroke-[1.5]" />
                                <div>
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">HQ Location</span>
                                    <address className="not-italic text-sm text-neutral-300 font-semibold leading-relaxed">
                                        52/1/D, New Kandy Road,<br />Kothalawala, Kaduwela, Sri Lanka.
                                    </address>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-4 h-4 text-neutral-500 mt-1 shrink-0 stroke-[1.5]" />
                                <div>
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Direct Line</span>
                                    <a href="tel:+94117487100" className="text-sm text-neutral-300 font-mono font-bold hover:text-white transition-colors">
                                        +94 11 7487100
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-4 h-4 text-neutral-500 mt-1 shrink-0 stroke-[1.5]" />
                                <div>
                                    <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Inquiries</span>
                                    <a href="mailto:info@biofoodsagro.com" className="text-sm text-neutral-300 font-semibold hover:text-white transition-colors">
                                        info@biofoodsagro.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Directory */}
                    <div className="mt-16 pt-6 border-t border-white/5 relative z-10 flex items-center gap-3">
                        {[
                            { icon: <FaFacebookF size={12} />, href: "https://www.facebook.com/Biofoofdslk/", label: "Facebook" },
                            { icon: <FaXTwitter size={12} />, href: "https://x.com/biofoodslk", label: "X" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Clean Interactive Form */}
                <div className="md:w-[65%] p-8 lg:p-12 bg-white flex flex-col justify-center">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8" onSubmit={handleSubmit}>
                        
                        <div className="group relative border-b border-neutral-200 focus-within:border-neutral-950 transition-colors duration-300 pb-2">
                            <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-950 transition-colors">
                                Full Identity
                            </label>
                            <input
                                id="name"
                                required
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full bg-transparent pt-2 pb-1 text-sm font-semibold text-neutral-900 outline-none placeholder-neutral-300"
                            />
                        </div>

                        <div className="group relative border-b border-neutral-200 focus-within:border-neutral-950 transition-colors duration-300 pb-2">
                            <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-950 transition-colors">
                                Email Address
                            </label>
                            <input
                                id="email"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full bg-transparent pt-2 pb-1 text-sm font-semibold text-neutral-900 outline-none placeholder-neutral-300"
                            />
                        </div>

                        <div className="sm:col-span-2 group relative border-b border-neutral-200 focus-within:border-neutral-950 transition-colors duration-300 pb-2">
                            <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-950 transition-colors">
                                Subject
                            </label>
                            <input
                                id="subject"
                                required
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Partnership, sourcing, or distribution request"
                                className="w-full bg-transparent pt-2 pb-1 text-sm font-semibold text-neutral-900 outline-none placeholder-neutral-300"
                            />
                        </div>

                        <div className="sm:col-span-2 group relative border-b border-neutral-200 focus-within:border-neutral-950 transition-colors duration-300 pb-2">
                            <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-950 transition-colors">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Provide your comprehensive transmission details here..."
                                className="w-full bg-transparent pt-2 pb-1 text-sm font-semibold text-neutral-900 outline-none placeholder-neutral-300 resize-none min-h-20"
                            />
                        </div>

                        {/* Action Command Node */}
                        <div className="sm:col-span-2 pt-4 flex justify-start">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto px-10 py-3.5 bg-neutral-950 text-white hover:bg-neutral-800 disabled:bg-neutral-300 disabled:text-neutral-500 text-xs font-mono font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-3 group active:scale-[0.99]"
                            >
                                {isLoading ? "Processing..." : "Send Message"}
                                {!isLoading && <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-2" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;