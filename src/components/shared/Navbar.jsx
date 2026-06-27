import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLightNavbar = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navbarClasses = () => {
    if (isLightNavbar) {
      return `
        bg-white/90
        backdrop-blur-xl
        border-b
        border-neutral-200
        shadow-sm
        text-neutral-900
      `;
    }

    return `
      bg-gradient-to-b
      from-black/40
      via-black/10
      to-transparent
      text-white
    `;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Processing Facilities", href: "/processing-facilities" },
    { name: "Products", href: "/products" },
    { name: "Awards", href: "/awards" },
    { name: "News & Events", href: "/news-and-events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${navbarClasses()}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-20 md:h-24 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" onClick={() => setIsOpen(false)} className="shrink-0">
              <img
                src="/logo.svg"
                alt="Bio Foods"
                className="h-12 md:h-14 w-auto transition-all duration-300"
              />
            </Link>

            {/* DESKTOP NAVIGATION LINKS (Visible on large screens) */}
            <div className="hidden xl:flex items-center gap-6 text-sm font-medium uppercase tracking-wide">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition-colors duration-300 whitespace-nowrap ${
                      active
                        ? "text-brand-primary font-bold"
                        : isLightNavbar
                        ? "text-neutral-700 hover:text-brand-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* HAMBURGER MENU BUTTON (Mobile/Tablet Only - Hidden on xl screens) */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className={`
                xl:hidden
                group
                flex
                items-center
                gap-3
                text-sm
                uppercase
                tracking-[0.25em]
                transition-all
                duration-300
              `}
            >
              <span className="hidden sm:block">Menu</span>

              <div
                className={`
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${isLightNavbar ? "border-neutral-300" : "border-white/40"}
                `}
              >
                <Menu size={18} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-sm
          transition-all
          duration-500
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER (Mobile/Tablet Only) */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          h-full
          w-full
          sm:w-130
          bg-brand-light
          text-neutral-900
          flex
          flex-col
          transform
          transition-transform
          duration-500
          ease-out
          shadow-2xl
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-8 border-b border-neutral-200">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Navigation
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              hover:bg-black/5
              transition-colors
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex-1 overflow-y-auto px-8 py-12">
          <nav className="space-y-6">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block
                    text-3xl
                    lg:text-4xl
                    tracking-tight
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-brand-primary"
                        : "text-neutral-800 hover:text-brand-primary"
                    }
                  `}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* FOOTER */}
        <div className="border-t border-neutral-200 p-8">
          <p className="text-sm leading-relaxed text-neutral-500">
            Organic products responsibly sourced, processed, and distributed
            through Agroventures Group.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-10 bg-brand-secondary" />

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Bio Foods
            </span>
          </div>
        </div>
      </aside>

      {/* PAGE SPACER */}
      {!isHomePage && <div className="h-20 md:h-24" />}
    </>
  );
};

export default Navbar;