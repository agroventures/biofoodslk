import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function ContactForm() {
    return (
        <div className="max-w-6xl mx-auto my-16 px-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                {/* Left Side: Contact Info Panel */}
                <div className="md:w-1/3 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative ambient glow using Brand Primary */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
                        <p className="text-gray-400 mb-10">We’d love to hear from you. Our team is always here to chat.</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/10 rounded-xl transition-colors group-hover:bg-brand-primary/20">
                                    <MapPin className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Visit Us</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        52/1/D, New Kandy Road,<br /> Kothalawala, Kaduwela, Sri-Lanka.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/10 rounded-xl transition-colors group-hover:bg-brand-primary/20">
                                    <Phone className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Call Us</h4>
                                    <p className="text-sm text-gray-400">+94 11 7487100</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/10 rounded-xl transition-colors group-hover:bg-brand-primary/20">
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
                                { icon: <FaFacebookF />, href: "https://www.facebook.com/Biofoofdslk/" },
                                { icon: <FaXTwitter />, href: "https://x.com/biofoodslk" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                                >
                                    <span className="text-gray-400 group-hover:text-white">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Interactive Form */}
                <div className="md:w-2/3 p-10 bg-white">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                            <input
                                type="text"
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all resize-none placeholder:text-gray-300"
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2 pt-2">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20 active:scale-[0.98]"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default ContactForm;