import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    CheckCircle2,
    X,
    Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_INFO_EMAIL,
                    ...formData,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className="w-full bg-white py-24 lg:py-36 border-t border-neutral-100 relative overflow-hidden">
            {/* decorative background blobs */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-light opacity-60" />
            <div className="pointer-events-none absolute -bottom-40 -left-24 w-[400px] h-[400px] rounded-full bg-brand-muted opacity-50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* HEADER */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-brand-primary" />
                        <Sparkles className="h-4 w-4 text-brand-primary" />
                        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Contact Us
                        </span>
                    </div>

                    <h2
                        className="text-5xl lg:text-7xl tracking-tight text-neutral-950"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                        Let's start a
                        <br />
                        <span className="italic text-brand-primary">conversation.</span>
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                        Looking for organic products, partnerships, or global distribution? Our team is ready.
                    </p>
                </div>

                {/* SUCCESS MESSAGE */}
                {isSubmitted && (
                    <div className="mb-10 bg-brand-light border-l-4 border-brand-primary p-6 flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                            <p className="text-neutral-700">
                                Thank you for contacting us. Our team will get back to you shortly.
                            </p>
                        </div>
                        <button type="button" onClick={() => setIsSubmitted(false)} className="text-neutral-400 hover:text-neutral-900">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-12 gap-0 shadow-xl">
                    {/* CONTACT DETAILS */}
                    <div className="lg:col-span-4 relative">
                        <div
                            className="h-full p-10 flex flex-col"
                            style={{
                                background: "linear-gradient(160deg, #395144 0%, #2d4137 60%, #1e2f26 100%)",
                            }}
                        >
                            {/* decorative circles */}
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/4 -translate-x-1/4" />

                            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-8 relative">
                                Contact Information
                            </p>

                            <div className="space-y-10 flex-1 relative">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/10 shrink-0">
                                        <MapPin className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-base text-white mb-1">Head Office</h3>
                                        <p className="text-white/60 leading-7 text-sm">
                                            52/1/D, New Kandy Road,<br />
                                            Kothalawala, Kaduwela,<br />
                                            Sri Lanka.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/10 shrink-0">
                                        <Phone className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-base text-white mb-1">Phone</h3>
                                        <a href="tel:+94117487100" className="text-white/60 hover:text-brand-gold transition text-sm">
                                            +94 11 2201220
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/10 shrink-0">
                                        <Mail className="w-4 h-4 text-brand-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-base text-white mb-1">Email</h3>
                                        <a href="mailto:info@biofoodsagro.com" className="text-white/60 hover:text-brand-gold transition text-sm">
                                            info@biofoodsagro.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex gap-3 relative">
                                <a
                                    href="https://www.facebook.com/Biofoofdslk/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition"
                                >
                                    <FaFacebookF size={14} />
                                </a>
                                <a
                                    href="https://www.instagram.com/biofoods.agro"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition"
                                >
                                    <FaInstagram size={14} />
                                </a>
                                <a
                                    href="https://x.com/biofoodslk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition"
                                >
                                    <FaXTwitter size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-8 bg-white">
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {["name", "email"].map((field) => (
                                <div key={field} className="group">
                                    <label htmlFor={field} className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        id={field}
                                        type={field === "email" ? "email" : "text"}
                                        required
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                                        placeholder={field === "email" ? "Email address" : "Your name"}
                                    />
                                </div>
                            ))}

                            <div className="md:col-span-2 group">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="md:col-span-2 group">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 resize-none outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <div className="md:col-span-2 flex items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-brand-primary text-white hover:bg-brand-dark transition-all duration-300 group/btn"
                                >
                                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                                <p className="text-xs text-neutral-400 hidden md:block">We reply within 24 hours</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactForm;