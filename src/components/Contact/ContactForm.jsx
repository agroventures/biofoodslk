import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState(null);

    // 1. Create a state object for all form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // 2. Handle input changes
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
        <div className="max-w-6xl mx-auto my-16 px-6">

            {/* --- Success Message Header --- */}
            {isSubmitted && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500 rounded-full">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-green-900">Message Sent Successfully!</h3>
                            <p className="text-green-700">Thank you for reaching out. Our team will get back to you shortly.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="p-2 hover:bg-green-100 rounded-full transition-colors"
                        aria-label="Close message"
                    >
                        <X className="w-5 h-5 text-green-600" />
                    </button>
                </div>
            )}

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                {/* Left Side: Contact Info Panel */}
                <div className="md:w-1/3 bg-gray-900 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            Our team welcomes inquiries related to partnerships, product sourcing, and global distribution.
                        </p>

                        <div className="space-y-8">
                            <div className="border-l-4 border-brand-primary pl-4 py-1">
                                <h4 className="font-bold text-lg leading-tight">BioFoodsLK</h4>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Agroventures Group Sri Lanka</p>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 transition-all group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30">
                                    <MapPin className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Visit Us</h4>
                                    <address className="not-italic text-sm text-gray-400 leading-relaxed">
                                        52/1/D, New Kandy Road,<br /> Kothalawala, Kaduwela, Sri-Lanka.
                                    </address>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 transition-all group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30">
                                    <Phone className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Call Us</h4>
                                    <p className="text-sm text-gray-400">+94 11 7487100</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 transition-all group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30">
                                    <Mail className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Email Us</h4>
                                    <p className="text-sm text-gray-400">info@biofoodsagro.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <FaFacebookF />, href: "https://www.facebook.com/Biofoofdslk/", label: "Facebook" },
                                { icon: <FaXTwitter />, href: "https://x.com/biofoodslk", label: "X" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                                >
                                    <span className="text-gray-400 group-hover:text-white">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Interactive Form */}
                <div className="md:w-2/3 p-8 lg:p-12 bg-white">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <input
                                id="name"
                                required
                                type="text"
                                value={formData.name} // Controlled value
                                onChange={handleChange} // Change handler
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <input
                                id="email"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                            <input
                                id="subject"
                                required
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto px-12 py-4 bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                                {!isLoading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;