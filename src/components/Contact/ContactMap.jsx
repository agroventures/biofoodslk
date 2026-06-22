import React from "react";
import { MapPin, Navigation, Sparkles } from "lucide-react";

function ContactMap() {
  return (
    <section className="w-full bg-white py-24 lg:py-36 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-4 w-4 text-brand-primary" />

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Our Location
            </span>
          </div>

          <h2
            className="text-5xl lg:text-7xl tracking-tight text-neutral-950"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Visit our
            <br />
            headquarters.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Located in Kaduwela, Sri Lanka, our headquarters connects our global
            operations with sustainable sourcing, processing, and export
            capabilities.
          </p>
        </div>

        {/* MAP */}

        <div className="relative w-full h-137.5 overflow-hidden border border-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7633657422743!2d79.97150067581788!3d6.918868518440914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368947bee892b%3A0x3306e6fd6c21a8cc!2sBio%20Foods%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1775802948575!5m2!1sen!2slk"
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
                  Bio Foods HQ
                </h3>
              </div>

              <p
                className="
                text-neutral-600
                leading-7
                mb-8
              "
              >
                52/1/D, New Kandy Road,
                <br />
                Kothalawala,
                <br />
                Kaduwela,
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
                  text-xs
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
