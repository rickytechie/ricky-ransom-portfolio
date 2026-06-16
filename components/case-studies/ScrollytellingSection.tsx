"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ScrollySection } from "@/lib/data/projects";

interface ScrollytellingSectionProps {
  sections: ScrollySection[];
  accent?: string;
}

/** Modular scrollytelling blocks with parallax mockup panels. */
export default function ScrollytellingSection({
  sections,
  accent = "#d4af37",
}: ScrollytellingSectionProps) {
  return (
    <div className="space-y-32 py-16">
      {sections.map((section, index) => (
        <ScrollyBlock
          key={section.id}
          section={section}
          index={index}
          accent={accent}
        />
      ))}
    </div>
  );
}

function ScrollyBlock({
  section,
  index,
  accent,
}: {
  section: ScrollySection;
  index: number;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textX = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -20 : 20, 0]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 items-center gap-8 px-6 md:gap-12 md:px-12 lg:px-20"
    >
      {/* Text column */}
      <motion.div
        className={`col-span-12 md:col-span-5 ${isEven ? "md:col-start-1" : "md:col-start-8"}`}
        style={{ x: textX }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
      >
        {section.highlight && (
          <span
            className="mb-4 inline-block font-mono text-[10px] uppercase tracking-widest"
            style={{ color: accent }}
          >
            {section.highlight}
          </span>
        )}
        <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
          {section.headline}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
          {section.body}
        </p>
      </motion.div>

      {/* Mockup panel */}
      <motion.div
        className={`col-span-12 md:col-span-6 ${isEven ? "md:col-start-7" : "md:col-start-1 md:row-start-1"}`}
        style={{ y: mockupY }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative overflow-hidden border border-zinc-800 bg-zinc-900/60">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)`,
            }}
          />
          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-zinc-700" />
              <div className="h-2 w-2 rounded-full bg-zinc-700" />
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              Interactive Mockup
            </p>
            <p className="mt-2 font-display text-xl font-bold text-white">
              {section.mockupLabel ?? section.headline}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded-sm bg-zinc-800/80"
                  style={{ opacity: 1 - i * 0.12 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
