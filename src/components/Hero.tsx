"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  // Motion values for mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for natural easing
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Map mouse movement to orb translation
  const translateX = useTransform(springX, [-1, 1], ["-25px", "25px"]);
  const translateY = useTransform(springY, [-1, 1], ["-25px", "25px"]);

  // Gradient color shifting with proper typing
  const gradientShift = useTransform([springX, springY], ([x, y]) => {
    const nx = Number(x);
    const ny = Number(y);
    return `linear-gradient(135deg,
      hsl(${200 + nx * 40}, 80%, 60%),
      hsl(${280 + ny * 40}, 80%, 65%),
      hsl(${160 + nx * 30}, 80%, 55%)
    )`;
  });

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        style={{ background: gradientShift, x: translateX, y: translateY }}
        className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full blur-[100px] opacity-30"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Design the Future
            </span>
            <br />
            <span className="text-white/90">AI Meets Frontend</span>
          </motion.h1>
          <p className="mt-5 max-w-xl text-gray-300">
            Unlock a new era of web experiences. Our AI-powered UI kit helps you{" "}
            <span className="text-white font-medium">prototype faster</span>,{" "}
            <span className="text-white font-medium">ship smarter</span>, and{" "}
            <span className="text-white font-medium">wow your users</span> with intelligent, responsive components.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/20 hover:from-purple-500 hover:to-blue-500"
            >
              Start Building <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              View Showcase
            </a>
          </div>
        </div>

        {/* Orb Illustration */}
        <motion.div
          style={{ x: translateX, y: translateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto h-[320px] w-[320px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1d2230] to-[#0d1017] border border-white/10 shadow-2xl" />
          <div className="absolute inset-6 rounded-full border-2 border-cyan-400/40 blur-[1px]" />
          <div className="absolute inset-0 animate-pulse rounded-full ring-2 ring-purple-500/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-24 w-24 text-purple-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
          </div>
          <motion.div
            style={{ background: gradientShift }}
            className="absolute -inset-10 rounded-full blur-3xl opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
