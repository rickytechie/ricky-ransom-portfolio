"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-20"
    >
      {/* Asymmetrical grid background layers */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute -right-20 top-32 h-96 w-96 rounded-full border border-[#d4af37]/10"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full bg-[#d4af37]/[0.03]"
        />
        <div className="absolute right-1/4 top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <div className="absolute bottom-1/3 left-10 h-1/4 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10">
        {/* Asymmetrical grid layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Eyebrow — offset column */}
          <motion.div
            className="col-span-12 md:col-span-4 md:col-start-2"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">
              Digital Headquarters
            </span>
          </motion.div>

          {/* Oversized headline — spans asymmetric columns */}
          <motion.div
            className="col-span-12 md:col-span-10 md:col-start-1 lg:col-span-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-[0.9] tracking-tighter text-white">
              Ricky
              <br />
              <span className="text-gold-gradient">Ransom</span>
            </h1>
          </motion.div>

          {/* Overlapping descriptor card */}
          <motion.div
            className="col-span-12 -mt-4 md:col-span-5 md:col-start-8 md:-mt-16 lg:col-start-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm md:p-8">
              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                Fusing{" "}
                <span className="text-white">live production</span>,{" "}
                <span className="text-[#d4af37]">DJing</span>, and{" "}
                <span className="text-white">multi-industry tech consulting</span>{" "}
                into one premium digital experience.
              </p>
            </div>
          </motion.div>

          {/* Stats row — staggered */}
          <motion.div
            className="col-span-12 mt-12 grid grid-cols-2 gap-6 md:col-span-8 md:col-start-2 md:mt-20 md:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: "4+", label: "Industry Verticals" },
              { value: "12", label: "AI Agents Deployed" },
              { value: "Live", label: "Production Active" },
              { value: "∞", label: "Creative Output" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className="font-display text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="col-span-12 mt-16 flex items-center gap-4 md:col-start-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="h-12 w-px bg-gradient-to-b from-[#d4af37] to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
