import { motion } from "framer-motion";

const ComponentsShowcase = () => {
  const cards = [
    {
      title: "Welcome",
      tag: "Activate",
      desc: "Quick start with simple setup and smooth user experience.",
      body: (
        <div className="rounded-xl bg-[#1a1f29] border border-white/10 px-4 py-3 text-sm text-gray-300 text-center">
          👋 Hi, I am DesignX
          <div className="text-xs text-gray-400 mt-1">Beautiful, modern AI components</div>
        </div>
      ),
    },
    {
      title: "User Guide",
      tag: "Learn",
      desc: "Step-by-step guidance to help new users understand features easily.",
      body: (
        <div className="rounded-xl bg-[#1a1f29] border border-white/10 px-4 py-3 text-sm text-gray-300 space-y-2">
          <div>✨ Your personal AI assistant is ready</div>
          <button className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs">
            Explore the latest updates
          </button>
          <button className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs">
            Discover new design patterns
          </button>
        </div>
      ),
    },
    {
      title: "Quick Commands",
      tag: "Execute",
      desc: "Instant shortcuts for fast actions and better workflow.",
      body: (
        <div className="text-sm space-y-2">
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">1. Generate ideas instantly</div>
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">2. Explain any concept clearly</div>
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">3. Summarize key insights</div>
        </div>
      ),
    },
    {
      title: "Loading Progress",
      tag: "Confirm",
      desc: "Visual indicators for better waiting experience.",
      body: (
        <div className="text-sm text-center text-gray-400">⏳ Please hold on, processing...</div>
      ),
    },
    {
      title: "Results",
      tag: "Feedback",
      desc: "Get clean, easy-to-read outputs you can act on.",
      body: (
        <div className="rounded-xl bg-[#1a1f29] border border-white/10 px-4 py-3 text-sm text-gray-300">
          ✅ Here are the new improvements available for you.
        </div>
      ),
    },
    {
      title: "Manage Chats",
      tag: "Organize",
      desc: "Easily find, search, and manage all your conversations.",
      body: (
        <div className="space-y-2 text-sm text-gray-300">
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Recent Chat</div>
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Project brainstorming</div>
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Design feedback session</div>
        </div>
      ),
    },
  ];

  return (
    <section id="components" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Components Rich, Easy to Use</h3>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore a curated library of modern AI-powered components, ready to integrate with flexible customization and seamless experience.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-[#0f1318] p-6 shadow-lg flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold">{c.title}</div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {c.tag}
                </span>
              </div>
              <div className="mb-4">{c.body}</div>
              <div className="text-xs text-gray-500 mt-auto">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;
