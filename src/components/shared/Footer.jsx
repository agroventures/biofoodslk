import React from "react";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Processing Facilities", href: "/processing-facilities" },
    { name: "Careers", href: "/careers" },
  ];

  const legalLinks = [
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const contactItems = [
    { icon: Phone, label: "+94 11 748 7100", href: "tel:+94117487100" },
    // { icon: Mail, label: "info@biofoodsagro.com", href: "mailto:info@biofoodsagro.com" },
  ];

  const socials = [
    { icon: FaFacebookF, href: "https://www.facebook.com/Biofoofdslk/" },
    { icon: FaXTwitter, href: "https://x.com/biofoodslk" },
  ];

  return (
    <footer className="bg-[#090D0F] text-white pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20">

          {/* BRAND */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-secondary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Organic Excellence
                </span>
              </div>
            </div>

            <Link to="/">
              <img src="/logo.png" alt="BioFoods" className="h-12 w-auto" />
            </Link>

            <p className="max-w-sm text-base leading-8 text-neutral-400">
              Sustainably grown products connecting ethical producers with
              conscious global markets through quality and transparency.
            </p>

            {/* Alliance tag */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold">
                Agroventures Group
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-brand-secondary hover:text-brand-secondary"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:border-l border-white/10 lg:pl-12">
            <div>
              <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Explore
              </p>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Legal
              </p>
              <ul className="space-y-4">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3 lg:border-l border-white/10 lg:pl-6 space-y-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}

              <div className="flex items-start gap-2 text-neutral-400">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm leading-6">
                  52/1/D, New Kandy Road,
                  <br />Kaduwela, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {currentYear} Bio Foods (Pvt) Ltd. All Rights Reserved.
          </p>

          <p className="text-xs text-neutral-500">
            Built by{" "}
            <a
              href="https://www.ventrax.lk/"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              VENTRAX.LK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
