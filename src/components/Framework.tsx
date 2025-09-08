import { Sparkles, LayoutGrid, Code, Smartphone, Atom, Layers } from "lucide-react";

const Framework = () => {
  const tiles = [
    { 
      h: "Creative UI", 
      p: "Modern layouts with smooth interactions", 
      icon: <Sparkles className="w-10 h-10 text-blue-300" /> 
    },
    { 
      h: "Scalable Design", 
      p: "Reusable styles for any product size", 
      icon: <LayoutGrid className="w-10 h-10 text-purple-300" /> 
    },
    { 
      h: "Cross-Framework", 
      p: "Ready for React, Vue, Angular & more", 
      icon: <Atom className="w-10 h-10 text-cyan-300" /> 
    },
    { 
      h: "Code Efficiency", 
      p: "Clean, optimized, developer-friendly code", 
      icon: <Code className="w-10 h-10 text-pink-300" /> 
    },
    { 
      h: "Mobile Ready", 
      p: "Fully responsive & touch-friendly UI", 
      icon: <Smartphone className="w-10 h-10 text-green-300" /> 
    },
    { 
      h: "Data Insights", 
      p: "Beautiful charts & visual storytelling", 
      icon: <Layers className="w-10 h-10 text-yellow-300" /> 
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 -z-10" />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Design & Framework
        </h3>
        <p className="mt-3 text-blue-100 max-w-xl mx-auto">
          An ecosystem for rapid web app development with design consistency and flexible components.
        </p>

        {/* Grid tiles */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center rounded-2xl 
              bg-white/5 p-12 border border-white/10 
              transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              transition duration-500 bg-gradient-to-tr from-blue-500/40 via-purple-500/40 to-pink-500/40" />

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">{t.icon}</div>
                <div className="text-lg font-semibold text-white text-left">{t.h}</div>
                <div className="text-sm text-blue-100 mt-1 text-left">{t.p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
