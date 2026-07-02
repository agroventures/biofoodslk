import React from "react";
import { MapPin, Navigation } from "lucide-react";

function ContactMap() {
  return (
    <section className="w-full bg-white py-24 lg:py-36 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}

        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-brand-gold" />
            <span className="text-sm uppercase tracking-[0.3em] font-semibold text-neutral-500">
              Our Location
            </span>
            <span className="w-12 h-px bg-brand-gold" />
          </div>

          <h2
            className="text-5xl lg:text-7xl tracking-tight text-neutral-950 text-center"
            style={{
              fontFamily: "Calibri, Gill Sans, Trebuchet MS, sans-serif",
            }}
          >
            Visit Our Headquarters.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-neutral-600 text-center">
            Located in Kaduwela, Sri Lanka - connecting sustainable sourcing, processing, and global export.
          </p>
        </div>

        {/* MAP */}

        <div className="relative w-full h-137.5 overflow-hidden border border-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.84603845905!2d79.85991609999999!3d6.909006100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259006085952d%3A0x7d7800e07ed544f3!2sBio%20Foods%20Agro%20Ventures%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1782451749324!5m2!1sen!2slk"
            className="
              absolute
              inset-0
              w-full
              h-full
              grayscale-[0.2]
              contrast-[1.05]
            "
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
            title="Bio Foods Location"
          />

          {/* LOCATION CARD */}

          <div
            className="
            absolute
            top-8
            left-8
            w-85
            max-w-[calc(100%-4rem)]
          "
          >
            <div
              className="
              bg-brand-light
              p-8
              border
              border-neutral-200
            "
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="
                  w-10
                  h-10
                  bg-brand-primary
                  flex
                  items-center
                  justify-center
                "
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>

                <h3
                  className="
                  text-xl
                  text-neutral-950
                "
                >
                  Bio Foods Agro Ventures
                </h3>
              </div>

              <p
                className="
                text-neutral-600
                leading-7
                mb-8
              "
              >
                No 48,
                <br />
                Sir Marcus Fernando Mawatha,
                <br />
                Colombo 07,
                <br />
                Sri Lanka.
              </p>

              <a
                href="https://maps.app.goo.gl/aYx1PH5dkiqtDgM1A"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  w-full
                  py-4
                  bg-brand-primary
                  text-white
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  hover:opacity-90
                  transition
                "
              >
                Get Directions
                <Navigation
                  className="
                    w-4
                    h-4
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;
