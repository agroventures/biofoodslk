import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import {
  Sparkles,
  FileText,
  Scale,
  EyeOff,
  Globe,
  Lock,
  Mail,
} from "lucide-react";
import useSEO from "../hooks/useSEO";

function TermsAndConditions() {
  const url = window.location.href;

  useSEO({ url, image_alt: "Terms and Conditions" });

  const prohibited = [
    "Unauthorized reproduction of website assets",
    "Commercial use of protected materials",
    "Data mining or extraction activities",
    "Attempts to disrupt platform operations",
    "Violation of applicable regulations",
    "Unauthorized promotional usage",
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased">
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden bg-brand-light py-28 lg:py-40">
        {/* Decorative bg number */}
        <div className="pointer-events-none absolute right-10 top-10 hidden select-none xl:block">
          <span className="text-[280px] font-black leading-none text-black/3">
            T&C
          </span>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-brand-secondary" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-secondary" />
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Legal &amp; Governance
              </span>
            </div>
          </div>

          <h1
            className="text-5xl leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Terms &amp;
            <br />
            <span className="text-neutral-400">Conditions</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Understanding the guidelines, responsibilities, and framework
            governing your interaction with Bio Foods digital platforms.
          </p>

          {/* <p className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-400">
            Last Updated: October 2023
          </p> */}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* INTRO GRID */}
        <section className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24 mb-24">
          {/* Left */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              Agreement Framework
            </span>

            <h2
              className="mt-6 text-4xl leading-tight tracking-tight lg:text-5xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Built on clarity,
              <br />responsibility, and trust.
            </h2>

            {/* Statement card */}
            <div className="relative mt-10 overflow-hidden rounded-4xl bg-brand-light p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-secondary" />
              <p className="text-xl font-light leading-snug text-neutral-900 lg:text-2xl">
                Please review these Terms and Conditions carefully before using
                the Bio Foods website.
              </p>
            </div>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              By accessing this platform, you acknowledge and agree to comply
              with the policies, responsibilities, and conditions outlined
              below.
            </p>
          </div>

          {/* Right – policy cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Key Policies
            </span>

            {[
              {
                icon: FileText,
                label: "01",
                title: "General Agreement",
                text: "Accessing this website confirms acceptance of these terms and establishes your agreement with Bio Foods' operational framework.",
              },
              {
                icon: Scale,
                label: "02",
                title: "Intellectual Property",
                text: "Website content, branding, designs, and digital assets remain protected under applicable intellectual property regulations.",
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

        {/* PROHIBITED ACTIONS */}
        <section className="rounded-[28px] bg-brand-light p-10 lg:p-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              Restrictions
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="h-fit rounded-2xl bg-brand-muted p-4 text-brand-primary">
              <EyeOff className="h-5 w-5" />
            </div>
            <h3
              className="text-3xl tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Prohibited Actions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {prohibited.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-xs text-brand-secondary font-mono mt-0.5">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <p className="text-sm leading-6 text-neutral-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USER CONTENT + THIRD PARTY */}
        <section className="mt-24 space-y-10">
          {[
            {
              icon: Globe,
              label: "03",
              title: "User Content",
              text: "Any content submitted through this platform may be used for communication, operational, and service improvement purposes.",
            },
            {
              icon: Lock,
              label: "04",
              title: "Third Party Services",
              text: "Bio Foods is not responsible for external platforms, websites, or third-party services accessed through external links.",
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
            Legal Enquiries
          </h3>

          <p className="mt-4 text-base leading-7 text-white/70 max-w-md mx-auto">
            For any questions regarding these terms, please reach out to our
            team directly.
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

export default TermsAndConditions;
