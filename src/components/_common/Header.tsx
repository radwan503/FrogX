'use client'
import { Github, Globe, Menu, Sparkles, Twitter } from "lucide-react";
import { useState } from "react";

const Header=()=> {
  const [open, setOpen] = useState(false);
  const links = ["Docs", "Components", "AI Solution", "Blog", "Showcase"];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-md rounded-full bg-gradient-to-tr from-purple-500/60 to-cyan-400/60" />
            <Sparkles className="h-6 w-6 text-purple-300" />
          </div>
          <span className="font-semibold tracking-tight">Frog X</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <Twitter className="h-4 w-4" />
          </a>
          <a aria-label="Language" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <Globe className="h-4 w-4" />
          </a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap gap-4 text-sm text-gray-300">
            {links.map((l) => (
              <a key={l} href="#" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;