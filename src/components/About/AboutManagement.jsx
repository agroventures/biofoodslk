import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { Award, Sprout, Users } from "lucide-react";
import { management } from "../../data/management";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const founderHighlights = [
  {
    icon: Award,
    label: "Fairest Fair-trader of the World",
    sub: "Fair Trade Awards · Bonn, 2014",
  },
  {
    icon: Users,
    label: "MOPA - Leading Producer Org in Asia",
    sub: "Marginalized Organic Producers' Association",
  },
  {
    icon: Sprout,
    label: "Pioneer of Fair Pricing for Farmers",
    sub: "Stable income regardless of market fluctuations",
  },
];

const founder = {
  id: "founder",
  name: "Dr. Sarath Ranaweera",
  role: "Founder & Consultant",
  img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/Dr.Sarath-Ranaweera-2.webp",
};

export default function AboutManagement() {
  const allMembers = [
    ...management.map((m, i) => ({ ...m, index: i + 1, isFounder: false })),
    { ...founder, index: management.length + 1, isFounder: true },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white text-neutral-950 overflow-hidden relative">
        {/* ── HEADER ── */}
        <div className="border-b border-neutral-100 py-16 lg:py-24 relative overflow-hidden">
          {/* Ambient Vector: Growing Impact Concentric Radii */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 text-brand-primary/2 pointer-events-none select-none translate-x-1/4 hidden lg:block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="100" cy="100" r="20" />
              <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="100" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
            <motion.span
              {...fadeUp(0)}
              className="flex items-center justify-center gap-3 mb-10 text-sm uppercase tracking-[0.3em] font-semibold text-neutral-500"
            >
              <span className="h-px w-10 bg-brand-secondary" />
              Leadership
              <span className="h-px w-10 bg-brand-secondary" />
            </motion.span>

            <div className="flex flex-col items-center text-center gap-8">
              <motion.h1
                {...fadeUp(0.1)}
                className="text-5xl lg:text-7xl leading-[1.05] tracking-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                The people behind
                <br />
                <span className="text-brand-primary">Bio Foods.</span>
              </motion.h1>

              <p className="text-lg leading-8 text-neutral-600 max-w-2xl">
                Guided by purpose and a deep commitment to sustainable
                agriculture - strengthening relationships between farmers,
                communities, and global markets.
              </p>
            </div>
          </div>
        </div>

        {/* ── ROSTER ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 relative z-10">
          <div className="space-y-24 lg:space-y-36">
            {allMembers.map((member) => (
              <motion.div
                key={member.id}
                {...fadeUp(member.index * 0.1)}
                className="border-b border-neutral-100 pb-16 last:border-0 last:pb-0 relative"
              >
                {/* Dynamic Inline Decorative Vector (Changes if Founder section) */}
                {member.isFounder ? (
                  <div className="absolute right-0 bottom-0 w-80 h-80 text-brand-gold/3 pointer-events-none select-none translate-x-12 translate-y-12 hidden xl:block">
                    {/* Abstract Sun/Growth organic ray mesh */}
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.35"
                    >
                      <path d="M0,50 Q25,0 50,50 T100,50" />
                      <path d="M50,0 Q50,25 50,50 T50,100" />
                      <path d="M15,15 Q50,50 85,85" />
                      <path d="M85,15 Q50,50 15,85" />
                      <circle cx="50" cy="50" r="12" />
                    </svg>
                  </div>
                ) : (
                  member.index % 2 === 0 && (
                    <div className="absolute left-[-4%] top-[20%] w-64 h-64 text-brand-primary/2 pointer-events-none select-none hidden xl:block">
                      {/* Gentle wavy ring lines */}
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      >
                        <path d="M10,50 C20,25 40,25 50,50 C60,75 80,75 90,50" />
                        <path d="M10,60 C20,35 40,35 50,60 C60,85 80,85 90,60" />
                      </svg>
                    </div>
                  )
                )}

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left relative z-10">
                  {/* Mobile Image Layer */}
                  <div className="w-full lg:hidden aspect-3/4 overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Desktop Large Image Layer */}
                  <div className="hidden lg:block lg:col-span-4 aspect-3/4 max-h-115 w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 shadow-xs">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content Info Column (Name + Message Directly Underneath) */}
                  <div className="w-full lg:col-span-7 pt-2">
                    <p className="text-md uppercase tracking-[0.25em] text-brand-secondary font-semibold mb-2">
                      {member.role}
                    </p>
                    <h2
                      className="text-4xl lg:text-4xl xl:text-5xl tracking-tight text-neutral-950"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {member.name}
                    </h2>

                    {/* Message Container Rendered Directly Below Name Column */}
                    <div className="mt-8">
                      {member.isFounder ? (
                        <div className="space-y-10">
                          {/* Pull Quote */}
                          <blockquote
                            className="text-2xl lg:text-3xl leading-tight text-neutral-900 border-l-4 border-brand-primary pl-6 italic"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            "Farmers need stability. Without it, agriculture
                            loses its future generations."
                          </blockquote>

                          {/* Cards Showcase */}
                          <div className="grid sm:grid-cols-3 gap-4 relative z-10">
                            {founderHighlights.map(
                              ({ icon: Icon, label, sub }) => (
                                <div
                                  key={label}
                                  className="border border-neutral-150 rounded-2xl p-5 bg-white/90 backdrop-blur-xs shadow-xs hover:shadow-md transition-shadow duration-300"
                                >
                                  <div className="flex items-center justify-center">
                                    <div className="h-9 w-9 rounded-xl flex items-center justify-center bg-brand-primary mb-3">
                                      <Icon className="h-4 w-4 text-brand-light" />
                                    </div>
                                  </div>
                                  <p
                                    className="text-md text-neutral-900 leading-snug font-medium mb-1 text-center"
                                  >
                                    {label}
                                  </p>
                                  <p className="text-xs text-neutral-500 leading-normal text-center">
                                    {sub}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>

                          {/* Detailed Story Narrative */}
                          <div className="text-lg leading-8 text-justify text-neutral-600">
                            <p>
                              Dr. Sarath Ranaweera's journey began in
                              mathematics before he moved into food systems
                              after witnessing the fragility of conventional
                              agriculture. His first tea production was made in
                              a rented facility and presented at a trade fair,
                              where demand quickly exceeded supply - marking the
                              beginning of Bio Foods.
                            </p>
                            <p>
                              This led to one of the earliest structured fair
                              pricing systems for farmers, ensuring stable
                              income regardless of market fluctuations - a model
                              later aligned with global fair-trade standards.
                              MOPA, established under Bio Foods, was recognised
                              as one of the leading small producer organisations
                              in Asia.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="border-l-4 border-brand-primary pl-6">
                          <p className="text-lg leading-8 text-neutral-600 max-w-2xl text-justify">
                            {member.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
