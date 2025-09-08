import { Sparkles } from "lucide-react";

const Footer=()=> {
  const cols = [
    {
      h: "Docs",
      items: ["Getting Started", "Components", "AI Patterns", "CLI"],
    },
    {
      h: "Community",
      items: ["GitHub", "Discord", "Twitter", "Issues"],
    },
    {
      h: "Resources",
      items: ["Templates", "Design Kit", "Icons", "Blog"],
    },
    {
      h: "More",
      items: ["Changelog", "Roadmap", "License", "Contact"],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a0d14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-300" />
            <span className="font-semibold">Frog X</span>
          </div>
          <p className="text-gray-400 mt-3 text-sm max-w-xs">
            AI‑driven interface framework for fast, trustworthy user experiences.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="font-semibold mb-3">{c.h}</div>
            <ul className="space-y-2 text-sm text-gray-400">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">© 2025 SlassUI. All rights reserved.</div>
    </footer>
  );
}

export default Footer;