import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Bubble from "./_common/Bubble";
const Scenarios=()=> {
    const tabs = [
    {
      label: "Web • Independent",
      sample: [
        { from: "user", text: "Summarize this 5-page report into 3 bullet points." },
        {
          from: "ai",
          text: `Here’s the summary:\n• Goals clearly defined\n• Short 2-week timeline\n• Potential risks outlined`,
        },
        { from: "user", text: "Nice. Draft an action plan next." },
        { from: "ai", text: "Sure. Suggesting a 5-step plan with owners. Want me to format as a Gantt?" },
        { from: "user", text: "Yes, include deadlines." },
        { from: "ai", text: "Done ✅ A timeline with owners + due dates is ready." },
      ],
    },
    {
      label: "App • Assistant",
      sample: [
        { from: "user", text: "Generate a product spec outline for v2." },
        { from: "ai", text: "Outline:\n• Title\n• Problem statement\n• Goals / Non-goals\n• Success metrics\n• Milestones" },
        { from: "user", text: "Add design constraints." },
        { from: "ai", text: "Included: tech stack, accessibility, and mobile-first UX." },
      ],
    },
    {
      label: "Mobile • Mini",
      sample: [
        { from: "user", text: "Rewrite this paragraph in 2 lines." },
        { from: "ai", text: "Condensed version: Core message, shorter and clearer." },
        { from: "user", text: "Make it friendlier." },
        { from: "ai", text: "Here’s a warmer rewrite with casual tone 😊" },
      ],
    },
    {
      label: "Model • AIGC",
      sample: [
        { from: "user", text: "Draft a friendly welcome email for new subscribers." },
        {
          from: "ai",
          text: "Hi [Name], welcome aboard! 🎉\nWe’re excited to have you. Here’s a quick start guide tailored for you.",
        },
        { from: "user", text: "Add a discount code." },
        { from: "ai", text: "Done ✅ Added a 10% off code at the end of the email." },
      ],
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl md:text-3xl font-bold">Multiple AI Scenario Experiences</h3>
        <p className="text-center text-gray-400 mt-2">Web • App • Mobile • Model‑aware</p>

        <div className="mt-10 grid lg:grid-cols-[280px,1fr] gap-8 items-start">
          {/* Tabs */}
          <div className="flex lg:flex gap-3 overflow-x-auto pb-2 lg:overflow-visible">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                  active === i
                    ? "border-purple-400 bg-purple-400/10 text-white"
                    : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-purple-300" /> {t.label}
              </button>
            ))}
          </div>

          {/* Chat Preview with neon frame */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl p-5 bg-[#0f1318] border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            <div className="absolute -inset-[2px] rounded-[18px] bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(168,85,247,0.45),transparent),radial-gradient(120%_120%_at_10%_-10%,rgba(34,211,238,0.35),transparent)] blur-lg" />
            <div className="relative">
              <div className="text-xs text-gray-400 mb-3">Chat Preview</div>
              <div className="space-y-3">
                {tabs[active].sample.map((b, idx) => (
                  <Bubble key={idx} from={b.from as any} text={b.text} />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input
                  placeholder="Type a message..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
                <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Scenarios;