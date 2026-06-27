import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, X, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const ProductInquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", product: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, subject: `Product Inquiry: ${formData.product}`, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", product: "", message: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-white border-t border-neutral-100 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-4 w-4 text-brand-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Product Inquiry</span>
          </div>
          <h2
            className="text-5xl lg:text-6xl tracking-tight text-neutral-950"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Interested in our products?
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Let us know what you're looking for and our team will get back to you.
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-10 bg-brand-light border border-brand-primary/20 p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary" />
              <p className="text-neutral-700">Thank you! Our team will get back to you shortly.</p>
            </div>
            <button onClick={() => setIsSubmitted(false)} className="text-neutral-400 hover:text-neutral-900">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="border border-neutral-200 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <label className="text-sm uppercase tracking-widest text-neutral-500">Name</label>
            <input id="name" required value={formData.name} onChange={handleChange}
              className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
              placeholder="Your name" />
          </div>

          <div>
            <label className="text-sm uppercase tracking-widest text-neutral-500">Email</label>
            <input id="email" type="email" required value={formData.email} onChange={handleChange}
              className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
              placeholder="Email address" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm uppercase tracking-widest text-neutral-500">Product of Interest</label>
            <input id="product" required value={formData.product} onChange={handleChange}
              className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
              placeholder="e.g. Organic Spices, Coconut Products" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm uppercase tracking-widest text-neutral-500">Message</label>
            <textarea id="message" required rows="5" value={formData.message} onChange={handleChange}
              className="mt-3 w-full border border-neutral-200 px-5 py-4 resize-none outline-none focus:border-brand-primary"
              placeholder="Tell us about your requirements..." />
          </div>

          <div className="md:col-span-2">
            <button disabled={isLoading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white hover:opacity-90 transition">
              {isLoading ? "Sending..." : "Send Inquiry"}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ProductInquiryForm;
