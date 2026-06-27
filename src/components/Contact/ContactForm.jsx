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
import { FaFacebookF } from "react-icons/fa";
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
        <section className="w-full bg-white py-24 lg:py-36 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* HEADER */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="h-4 w-4 text-brand-primary" />
                        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Contact Us
                        </span>
                    </div>

                    <h2
                        className="text-5xl lg:text-7xl tracking-tight text-neutral-950"
                        style={{
                            fontFamily: "Cormorant Garamond, serif",
                        }}
                    >
                        Let's start a
                        <br />
                        conversation.
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                        Looking for organic products, partnerships, or global distribution? Our team is ready.
                    </p>
                </div>

                {/* SUCCESS MESSAGE */}

                {isSubmitted && (

                    <div className=" mb-10 bg-brand-light border border-brand-primary/20 p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <CheckCircle2
                                className="w-5 h-5 text-brand-primary"
                            />

                            <p className="text-neutral-700">
                                Thank you for contacting us.
                                Our team will get back to you shortly.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-neutral-400 hover:text-neutral-900"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                )}

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* CONTACT DETAILS */}
                    <div className="lg:col-span-4">
                        <div className="bg-brand-light p-10 h-full">
                            <p className=" text-sm uppercase tracking-[0.3em] text-brand-primary mb-8">
                                Contact Information
                            </p>

                            <div className="space-y-10">
                                <div>
                                    <MapPin className="w-5 h-5 text-brand-primary mb-4" />
                                    <h3 className="text-xl text-neutral-950 mb-2">
                                        Head Office
                                    </h3>

                                    <p className="text-neutral-600 leading-7">
                                        52/1/D, New Kandy Road,
                                        <br />
                                        Kothalawala, Kaduwela,
                                        <br />
                                        Sri Lanka.
                                    </p>
                                </div>

                                <div>
                                    <Phone className="w-5 h-5 text-brand-primary mb-4" />
                                    <h3 className="text-xl text-neutral-950 mb-2">
                                        Phone
                                    </h3>

                                    <a
                                        href="tel:+94117487100"
                                        className="text-neutral-600 hover:text-brand-primary"
                                    >
                                        +94 11 7487100
                                    </a>
                                </div>

                                <div>
                                    <Mail className="w-5 h-5 text-brand-primary mb-4" />
                                    <h3 className="text-xl text-neutral-950 mb-2">
                                        Email
                                    </h3>

                                    <a
                                        href="mailto:info@biofoodsagro.com"
                                        className="text-neutral-600 hover:text-brand-primary"
                                    >
                                        info@biofoodsagro.com
                                    </a>
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="mt-12 pt-8 border-t border-neutral-200 flex gap-3">
                                <a
                                    href="https://www.facebook.com/Biofoofdslk/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-neutral-200 hover:bg-brand-primary hover:text-white transition"
                                >
                                    <FaFacebookF size={14} />
                                </a>

                                <a
                                    href="https://x.com/biofoodslk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-neutral-200 hover:bg-brand-primary hover:text-white transition"
                                >
                                    <FaXTwitter size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-8">
                        <form
                            onSubmit={handleSubmit}
                            className="border border-neutral-200 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >

                            <div>
                                <label className="text-sm uppercase tracking-widest text-neutral-500">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="text-sm uppercase tracking-widest text-neutral-500">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm uppercase tracking-widest text-neutral-500">
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm uppercase tracking-widest text-neutral-500">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    required
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 resize-none outline-none focus:border-brand-primary"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    disabled={isLoading}
                                    className=" inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white hover:opacity-90 transition"
                                >
                                    {isLoading
                                        ? "Sending..."
                                        : "Send Message"
                                    }
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactForm;