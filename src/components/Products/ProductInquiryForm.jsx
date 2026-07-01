import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, X, Sparkles, Leaf, Globe, ShieldCheck } from "lucide-react";


const highlights = [
  { icon: Leaf, text: "Certified Organic Products" },
  { icon: Globe, text: "Global Export Ready" },
  { icon: ShieldCheck, text: "Quality Guaranteed" },
];

const ProductInquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", product: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_INFO_EMAIL,
          name: formData.name,
          email: formData.email,
          subject: `Product Inquiry: ${formData.product}`,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", product: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full border-t border-neutral-100 py-24 lg:py-36 relative overflow-hidden" style={{ background: "#F8F6F2" }}>
      {/* decorative blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, #b39c74 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand-primary" />
            <Sparkles className="h-4 w-4 text-brand-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Product Inquiry</span>
          </div>
          <h2 className="text-5xl lg:text-6xl tracking-tight text-neutral-950" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Interested in our
            <br />
            <span className="italic text-brand-primary">products?</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 max-w-xl">
            Let us know what you're looking for and our team will get back to you.
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-10 bg-white border-l-4 border-brand-primary p-6 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary" />
              <p className="text-neutral-700">Thank you! Our team will get back to you shortly.</p>
            </div>
            <button type="button" onClick={() => setIsSubmitted(false)} className="text-neutral-400 hover:text-neutral-900">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-0 shadow-xl">
          {/* LEFT PANEL */}
          <div
            className="lg:col-span-4 relative p-10 flex flex-col justify-between"
            style={{ background: "linear-gradient(160deg, #395144 0%, #2d4137 60%, #1e2f26 100%)" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-white/5 translate-y-1/4 -translate-x-1/4" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-8">Why Choose Us</p>
              <div className="space-y-8">
                {highlights.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-white/10 shrink-0">
                      <Icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <p className="text-white/80 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Response Time</p>
              <p className="text-white text-sm">Within 24 hours</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-white p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {["name", "email"].map((field) => (
              <div key={field} className="group">
                <label htmlFor={field} className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field} type={field === "email" ? "email" : "text"} required
                  value={formData[field]} onChange={handleChange}
                  className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                  placeholder={field === "email" ? "Email address" : "Your name"}
                />
              </div>
            ))}

            <div className="md:col-span-2 group">
              <label htmlFor="product" className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">Product of Interest</label>
              <input id="product" required value={formData.product} onChange={handleChange}
                className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                placeholder="e.g. Organic Spices, Coconut Products" />
            </div>

            <div className="md:col-span-2 group">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-400 group-focus-within:text-brand-primary transition">Message</label>
              <textarea id="message" required rows="5" value={formData.message} onChange={handleChange}
                className="mt-2 w-full border-b border-neutral-200 pb-3 pt-1 resize-none outline-none bg-transparent focus:border-brand-primary transition placeholder:text-neutral-300 text-neutral-800"
                placeholder="Tell us about your requirements..." />
            </div>

            <div className="md:col-span-2">
              <button type="submit" disabled={isLoading}
                className="inline-flex items-center gap-3 px-10 py-4 bg-brand-primary text-white hover:bg-brand-dark transition-all duration-300 group/btn">
                <span>{isLoading ? "Sending..." : "Send Inquiry"}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductInquiryForm;
