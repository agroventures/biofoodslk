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
  { icon: Award, label: "Fairest Fair-trader of the World", sub: "Fair Trade Awards · Bonn, 2014" },
  { icon: Users, label: "MOPA - Leading Producer Org in Asia", sub: "Marginalized Organic Producers' Association" },
  { icon: Sprout, label: "Pioneer of Fair Pricing for Farmers", sub: "Stable income regardless of market fluctuations" },
];

const founder = {
  id: "founder",
  name: "Dr. Sarath Ranaweera",
  role: "Consultant",
  img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/Dr.Sarath-Ranaweera-2.webp",
};

export default function AboutManagement() {
  const allMembers = [
    ...management.map((m, i) => ({ ...m, index: i + 1, isFounder: false })),
    { ...founder, index: management.length + 1, isFounder: true },
  ];

  return (
    <LazyMotion features={domAnimation}>
    <section className="w-full bg-white text-neutral-950 overflow-hidden">

      {/* ── HEADER ── */}
      <div className="border-b border-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-sm uppercase tracking-[0.35em] text-neutral-500"
          >
            <span className="h-px w-10 bg-brand-secondary" />
            Leadership
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl lg:text-7xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The people behind
              <br />
              <span className="text-brand-primary">Bio Foods.</span>
            </motion.h1>

              <p className="text-lg leading-8 text-neutral-600">
                Guided by purpose and a deep commitment to sustainable agriculture - strengthening relationships between farmers, communities, and global markets.
              </p>
          </div>
        </div>
      </div>

      {/* ── ROSTER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="space-y-24 lg:space-y-36">
          {allMembers.map((member) => (
            <motion.div
              key={member.id}
              {...fadeUp(member.index * 0.1)}
              className="border-b border-neutral-100 pb-16 last:border-0 last:pb-0"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
                
                {/* Mobile Image Layer */}
                <div className="w-full lg:hidden aspect-3/4 overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Desktop Large Image Layer */}
                <div className="hidden lg:block lg:col-span-4 aspect-3/4 max-h-115 w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content Info Column (Name + Message Directly Underneath) */}
                <div className="w-full lg:col-span-7 pt-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-secondary font-semibold mb-2">
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
                          "Farmers need stability. Without it, agriculture loses its future generations."
                        </blockquote>

                        {/* Cards Showcase */}
                        <div className="grid sm:grid-cols-3 gap-4">
                          {founderHighlights.map(({ icon: Icon, label, sub }) => (
                            <div
                              key={label}
                              className="border border-neutral-150 rounded-2xl p-5 bg-neutral-50/50 shadow-sm"
                            >
                              <div className="h-9 w-9 rounded-xl flex items-center justify-center bg-brand-primary mb-3">
                                <Icon className="h-4 w-4 text-brand-light" />
                              </div>
                              <p className="text-base text-neutral-900 leading-snug font-medium mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                                {label}
                              </p>
                              <p className="text-[11px] text-neutral-500 leading-normal">{sub}</p>
                            </div>
                          ))}
                        </div>

                        {/* Detailed Story Narrative */}
                        <div className="grid sm:grid-cols-2 gap-6 text-sm leading-7 text-neutral-600">
                          <p>
                            Dr. Sarath Ranaweera's journey began in mathematics before he
                            moved into food systems after witnessing the fragility of
                            conventional agriculture. His first tea production was made in
                            a rented facility and presented at a trade fair, where demand
                            quickly exceeded supply - marking the beginning of Bio Foods.
                          </p>
                          <p>
                            This led to one of the earliest structured fair pricing systems
                            for farmers, ensuring stable income regardless of market
                            fluctuations - a model later aligned with global fair-trade
                            standards. MOPA, established under Bio Foods, was recognised
                            as one of the leading small producer organisations in Asia.
                          </p>
                          <p className="sm:col-span-2 font-medium text-neutral-950 border-t border-neutral-100 pt-4 mt-2">
                            Today, he continues to guide Bio Foods as its founder, still
                            identifying simply as a Sri Lankan farmer committed to
                            responsible agriculture.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border-l-4 border-brand-primary pl-6">
                        <p className="text-base leading-8 text-neutral-600 max-w-2xl">
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