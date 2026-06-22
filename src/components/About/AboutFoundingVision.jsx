import React from "react";
import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react";

function AboutFoundingVision() {
  const principles = [
    {
      icon: Leaf,
      title: "Regenerate nature",
      description:
        "Farming that restores soil health and protects ecosystems over time.",
    },
    {
      icon: Heart,
      title: "Support farmers",
      description:
        "Fair and stable livelihoods for the communities behind every harvest.",
    },
    {
      icon: ShieldCheck,
      title: "Pure by design",
      description:
        "Food grown without chemicals, with full respect for natural processes.",
    },
  ];

  return (
    <section className="bg-white py-28 lg:py-40 border-y border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 flex items-center gap-4">
          <div className="h-px w-12 bg-brand-secondary" />
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Founding vision
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-8">
            <h2
              className="text-4xl lg:text-6xl tracking-tight text-neutral-950"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              A simple belief:
              <br />
              food should be grown with care.
            </h2>

            <p className="text-lg leading-8 text-neutral-600">
              Bio Foods was founded by{" "}
              <span className="text-neutral-900">
                Dr. Sarath Ranaweera
              </span>{" "}
              with a clear idea - agriculture should support nature,
              not extract from it.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-6">
            {principles.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 border border-neutral-200 p-6 hover:border-brand-primary transition-colors"
              >
                <div className="shrink-0 rounded-full bg-brand-light p-3">
                  <item.icon className="h-5 w-5 text-brand-primary" />
                </div>

                <div>
                  <h3
                    className="text-xl text-neutral-900"
                    style={{
                      fontFamily:
                        "Cormorant Garamond, serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutFoundingVision;