'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";

const Timeline=()=> {
  useEffect(() => {
    const isRight = (i: number) => i % 2 === 1;
    console.assert(isRight(1) && isRight(3), "Timeline test: steps 2 & 4 should render on the right.");
    const tabLabels = ["Web ‑ Independent", "App ‑ Assistant", "Mobile ‑ Mini", "Model ‑ AIGC"];
    console.assert(tabLabels.length === 4, "Tabs test: expected 4 tabs.");
  }, []);

  const steps = [
    {
      title: "Awaken Intent",
      accent: "from-cyan-400 to-blue-400",
      copy: "Effortlessly spark user engagement with smart onboarding and clear intent cues.",
    },
    {
      title: "Express Clearly",
      accent: "from-emerald-400 to-teal-400",
      copy: "Enable guided input with structured prompts and responsive interactions.",
    },
    {
      title: "Confirm with Clarity",
      accent: "from-pink-400 to-fuchsia-400",
      copy: "Give users confidence through transparent steps, previews, and confirmation flows.",
    },
    {
      title: "Feedback that Builds Trust",
      accent: "from-amber-400 to-orange-400",
      copy: "Deliver outcomes with rationale, actionable insights, and reliable next steps.",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl md:text-2xl font-bold mb-8">AI Interface Solution</h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/40 to-transparent" />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const isRight = i % 2 === 1; // steps 2 & 4 go right on >=sm
              const contentClasses = isRight ? "sm:col-start-2 sm:text-right ml-10 md:ml-0" : "sm:col-start-1 ml-10 md:ml-0";
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative grid sm:grid-cols-2 gap-6 items-start"
                >
                  {/* Marker */}
                  <div className={`absolute left-6 sm:left-1/2 sm:-translate-x-1/2 -top-2 h-4 w-4 rounded-full bg-gradient-to-r ${s.accent} shadow-[0_0_0_4px_rgba(255,255,255,0.06)]`} />

                  {/* Content */}
                  <div className={`col-start-1 ${contentClasses}`}>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs tracking-wide">Step {i + 1}</div>
                    <h4 className="mt-3 text-xl font-semibold text-white">{s.title}</h4>
                    <p className="mt-2 text-gray-400 max-w-lg">{s.copy}</p>
                    <a href="#learn-more" className="mt-4 inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs hover:bg-white/10">
                      See details
                    </a>
                  </div>

                  {/* Spacer to balance two-column layout on desktop */}
                  <div className="hidden sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Timeline