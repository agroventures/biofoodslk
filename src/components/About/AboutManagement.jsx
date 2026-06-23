import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Award, Sprout, Users } from "lucide-react";
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
  role: "Founder & Consultant",
  img: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/Dr.Sarath-Ranaweera-2.webp",
};

export default function AboutManagement() {
  const [open, setOpen] = useState(null);

  const allMembers = [
    ...management.map((m, i) => ({ ...m, index: i + 1, isFounder: false })),
    { ...founder, index: management.length + 1, isFounder: true },
  ];

  return (
    <section className="w-full bg-white text-neutral-950 overflow-hidden">

      {/* ── HEADER ── */}
      <div className="border-b border-neutral-100 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 mb-10 text-xs uppercase tracking-[0.35em] text-neutral-500"
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

            <motion.p {...fadeUp(0.2)} className="text-lg leading-8 text-neutral-600 lg:pb-2">
              Guided by purpose, experience, and a deep commitment to
              sustainable agriculture, our leadership team strengthens the
              relationships between farmers, communities, and global markets.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── ROSTER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        {allMembers.map((member) => (
          <motion.div
            key={member.id}
            {...fadeUp(member.index * 0.1)}
            className="border-b border-neutral-100 last:border-0"
          >
            {/* row */}
            <button
              onClick={() => setOpen(open === member.id ? null : member.id)}
              className="w-full grid grid-cols-12 gap-6 items-center py-10 text-left group"
            >
              <span className="col-span-1 text-xs text-neutral-400 tabular-nums">
                0{member.index}
              </span>

              <div className="col-span-2 aspect-square overflow-hidden border border-neutral-200 bg-neutral-50">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="col-span-7 lg:col-span-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-2">
                  {member.role}
                </p>
                <h2
                  className="text-3xl lg:text-5xl tracking-tight text-neutral-950 group-hover:text-brand-primary transition-colors duration-300"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {member.name}
                </h2>
              </div>

              <div className="col-span-2 lg:col-span-1 flex justify-end">
                <div className="h-10 w-10 border border-neutral-200 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary transition-all duration-300">
                  {open === member.id
                    ? <Minus className="h-4 w-4 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                    : <Plus className="h-4 w-4 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                  }
                </div>
              </div>
            </button>

            {/* expanded body */}
            <AnimatePresence>
              {open === member.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-12 pl-0 lg:pl-[calc((1/12*100%)+(2/12*100%)+3rem)]">
                    {member.isFounder ? (
                      <div className="space-y-10">
                        {/* pull quote */}
                        <blockquote
                          className="text-2xl lg:text-4xl leading-tight text-neutral-900 border-l-2 border-brand-primary pl-8"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          "Farmers need stability. Without it, agriculture loses its future generations."
                        </blockquote>

                        {/* highlights */}
                        <div className="grid md:grid-cols-3 gap-4">
                          {founderHighlights.map(({ icon: Icon, label, sub }, i) => (
                            <div
                              key={i}
                              className="group/card border border-neutral-200 p-6 hover:border-brand-primary transition-colors duration-300"
                            >
                              <div className="h-9 w-9 flex items-center justify-center bg-brand-light group-hover/card:bg-brand-primary transition-colors duration-300 mb-4">
                                <Icon className="h-4 w-4 text-brand-primary group-hover/card:text-white transition-colors duration-300" />
                              </div>
                              <p className="text-base text-neutral-900 leading-snug" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                                {label}
                              </p>
                              <p className="mt-1 text-xs text-neutral-500">{sub}</p>
                            </div>
                          ))}
                        </div>

                        {/* story */}
                        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-5 text-sm leading-8 text-neutral-600 border-l-2 border-brand-primary pl-8">
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
                          <p className="lg:col-span-2 font-medium text-neutral-900">
                            Today, he continues to guide Bio Foods as its founder, still
                            identifying simply as a Sri Lankan farmer committed to
                            responsible agriculture.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border-l-2 border-brand-primary pl-8">
                        <p className="text-base leading-8 text-neutral-600">
                          {member.message}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
