import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-6xl mx-auto my-16 px-6 text-center py-24 bg-white rounded-3xl shadow-xl border border-gray-100">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-brand-light rounded-full">
                        <CheckCircle2 className="w-16 h-16 text-brand-primary" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto my-16 px-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                {/* Left Side: Contact Info Panel */}
                <div className="md:w-1/3 bg-gray-900 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative ambient glow using Brand Colors */}
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
                                    <p className="text-sm text-gray-400">info@biofoodslk.com</p>
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
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <input
                                id="email"
                                required
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                            <input
                                id="subject"
                                required
                                type="text"
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all resize-none placeholder:text-gray-300"
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto px-12 py-4 bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20 active:scale-[0.98]"
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