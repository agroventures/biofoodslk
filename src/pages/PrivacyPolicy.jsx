import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import {
  Sparkles,
  ShieldCheck,
  Gavel,
  AlertCircle,
  Cookie,
  Landmark,
  Mail,
} from "lucide-react";
import useSEO from "../hooks/useSEO";

function PrivacyPolicy() {
  const url = window.location.href;

  useSEO({ url, image_alt: "Privacy Policy" });

  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased">
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden bg-brand-light py-28 lg:py-40">
        <div className="pointer-events-none absolute right-10 top-10 hidden select-none xl:block">
          <span className="text-[280px] font-black leading-none text-black/3">
            PP
          </span>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-secondary" />
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Privacy &amp; Governance
              </span>
            </div>
          </div>

          <h1
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Privacy
            <br />
            <span className="text-neutral-400">Policy</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Understanding how we protect, manage, and process information across
            our digital platforms.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-400">
            Last Updated: October 2023
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* INTRO GRID */}
        <section className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24 mb-24">
          {/* Left */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              Data Protection
            </span>

            <h2
              className="mt-6 text-4xl leading-tight tracking-tight lg:text-5xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Built on trust,
              <br />transparency, and responsibility.
            </h2>

            {/* Statement card */}
            <div className="relative mt-10 overflow-hidden rounded-4xl bg-brand-light p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-secondary" />
              <p className="text-xl font-light leading-snug text-neutral-900 lg:text-2xl">
                This privacy policy explains how Agroventures Group collects,
                uses, and protects information provided through our website.
              </p>
            </div>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              We maintain responsible data practices designed to ensure secure
              interactions and transparent communication with every individual
              who engages with our platform.
            </p>
          </div>

          {/* Right – policy cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Key Commitments
            </span>

            {[
              {
                icon: Gavel,
                label: "01",
                title: "Legal Compliance",
                text: "We operate according to applicable regulations and maintain responsible handling of all collected information.",
              },
              {
                icon: ShieldCheck,
                label: "02",
                title: "Security Framework",
                text: "Appropriate technical and operational safeguards are maintained to protect information integrity at all times.",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="group rounded-[28px] bg-brand-light p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex gap-5">
                  <div className="h-fit rounded-2xl bg-brand-muted p-4 text-brand-primary">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs tracking-[0.25em] text-brand-secondary">
                        {card.label}
                      </span>
                      <h4 className="text-xl font-semibold tracking-tight text-neutral-950">
                        {card.title}
                      </h4>
                    </div>
                    <p className="leading-7 text-neutral-600">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFORMATION USAGE NOTICE */}
        <section className="rounded-[28px] bg-brand-light p-10 lg:p-14 mb-24">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              How We Use Your Data
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="flex items-start gap-5">
            <div className="h-fit rounded-2xl bg-brand-muted p-4 text-brand-primary shrink-0">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h3
                className="text-3xl tracking-tight mb-4"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Information Usage
              </h3>
              <p className="text-lg leading-8 text-neutral-600 max-w-3xl">
                Information collected through our communication channels is used
                only for business communication, service improvement, and
                operational requirements. We do not sell or share personal data
                with third parties for marketing purposes.
              </p>
            </div>
          </div>
        </section>

        {/* COOKIE + GOVERNANCE */}
        <section className="space-y-10">
          {[
            {
              icon: Cookie,
              label: "03",
              title: "Cookie Management",
              text: "Cookies help us improve website performance, understand usage patterns, and provide a better browsing experience. You may manage cookie preferences through your browser settings.",
            },
            {
              icon: Landmark,
              label: "04",
              title: "Governing Law",
              text: "This privacy framework follows the applicable laws and regulations of Sri Lanka. Any disputes arising from this policy will be subject to the jurisdiction of Sri Lankan courts.",
            },
            {
              icon: ShieldCheck,
              label: "05",
              title: "Policy Updates",
              text: "We may update this policy periodically to reflect operational, legal, or technological improvements. Continued use of the platform following any updates constitutes acceptance of the revised terms.",
            },
          ].map((block) => (
            <div
              key={block.label}
              className="border-t border-neutral-100 pt-10 grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-4 flex items-start gap-4">
                <div className="h-fit rounded-2xl bg-brand-muted p-4 text-brand-primary">
                  <block.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs tracking-[0.25em] text-brand-secondary">
                    {block.label}
                  </span>
                  <h3
                    className="mt-1 text-2xl tracking-tight"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {block.title}
                  </h3>
                </div>
              </div>
              <p className="lg:col-span-8 text-lg leading-8 text-neutral-600 lg:pt-1">
                {block.text}
              </p>
            </div>
          ))}
        </section>

        {/* CONTACT */}
        <section className="mt-24 rounded-[28px] bg-brand-primary p-12 text-white text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
              Get in Touch
            </span>
          </div>

          <Mail className="mx-auto mb-6 h-6 w-6 text-brand-gold" />

          <h3
            className="text-4xl tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Privacy Enquiries
          </h3>

          <p className="mt-4 text-base leading-7 text-white/70 max-w-md mx-auto">
            For any questions regarding how we handle your data, please reach
            out to our team directly.
          </p>

          <a
            href="mailto:info@biofoodsagro.com"
            className="mt-8 inline-block text-lg underline underline-offset-8 text-brand-gold hover:text-white transition-colors duration-200"
          >
            info@biofoodsagro.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
