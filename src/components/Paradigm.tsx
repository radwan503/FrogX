"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Paradigm = () => {
  const items = [
    { label: "Awaken", desc: "Effortless activation of intent" },
    { label: "Express", desc: "Seamless real-time interaction" },
    { label: "Confirm", desc: "Transparent, guided outcomes" },
    { label: "Trust", desc: "Built-in safety & reliability" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold"
        >
          The Paradigm of AI Design
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          A structured flow for creating AI-driven interfaces that feel{" "}
          <span className="text-white font-semibold">intuitive, transparent, and reliable</span>.
        </motion.p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#121722] to-[#0d1017] p-6 border border-white/10 shadow-lg shadow-black/40 hover:shadow-purple-500/20 transition-all"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600/40 to-cyan-500/40 border border-white/10 shadow-inner">
                <Sparkles className="h-6 w-6 text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
              </div>
              <div className="text-lg font-semibold text-white">{it.label}</div>
              <div className="text-sm text-gray-400">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating sparkles animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-purple-400/40"
      >
        <Sparkles className="h-10 w-10" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-16 right-14 text-cyan-400/40"
      >
        <Sparkles className="h-12 w-12" />
      </motion.div>
    </section>
  );
};

export default Paradigm;
