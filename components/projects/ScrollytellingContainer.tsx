"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ScrollyChapter } from "@/lib/projectData";

interface ScrollytellingContainerProps {
  chapters: ScrollyChapter[];
  accent: string;
  companyName: string;
}

/** Cinematic scrollytelling container — Base 44 / Luminous Estates aesthetic. */
export default function ScrollytellingContainer({
  chapters,
  accent,
  companyName,
}: ScrollytellingContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Progress rail */}
      <div className="sticky top-0 z-20 h-px w-full bg-white/5">
        <motion.div
          className="h-full origin-left"
          style={{ width: progressWidth, backgroundColor: accent }}
        />
      </div>

      <div className="space-y-0">
        {chapters.map((chapter, index) => (
          <ChapterBlock
            key={chapter.id}
            chapter={chapter}
            index={index}
            accent={accent}
            companyName={companyName}
            isLast={index === chapters.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function ChapterBlock({
  chapter,
  index,
  accent,
  companyName,
  isLast,
}: {
  chapter: ScrollyChapter;
  index: number;
  accent: string;
  companyName: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -40]);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={`relative min-h-[80vh] flex items-center px-6 py-24 md:px-12 lg:px-20 ${
        !isLast ? "border-b border-white/[0.04]" : ""
      }`}
    >
      {/* Cinematic letterbox lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        style={{ opacity, y }}
        className={`mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-8 md:gap-16 ${
          isEven ? "" : ""
        }`}
      >
        {/* Chapter index */}
        <div
          className={`col-span-12 md:col-span-1 ${
            isEven ? "md:order-1" : "md:order-3 md:col-start-12"
          }`}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[0.5em]"
            style={{ color: accent }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Text */}
        <div
          className={`col-span-12 md:col-span-5 ${
            isEven ? "md:order-2" : "md:order-2 md:col-start-2"
          }`}
        >
          {chapter.stat && (
            <span
              className="mb-6 inline-block border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ borderColor: `${accent}40`, color: accent }}
            >
              {chapter.stat}
            </span>
          )}
          <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {chapter.headline}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-white/50 md:text-lg">
            {chapter.body}
          </p>
          {chapter.detail && (
            <p className="mt-4 font-mono text-xs tracking-wide text-white/25">
              {chapter.detail}
            </p>
          )}
        </div>

        {/* Visual panel */}
        <div
          className={`col-span-12 md:col-span-5 ${
            isEven ? "md:order-3 md:col-start-8" : "md:order-1 md:col-start-7"
          }`}
        >
          <div
            className="relative aspect-[4/3] overflow-hidden border border-white/[0.06]"
            style={{
              background: `linear-gradient(160deg, ${accent}08 0%, transparent 50%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(ellipse at 70% 30%, ${accent}20, transparent 60%)`,
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
                  {companyName}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-white/80">
                  {chapter.headline.split(" ").slice(0, 3).join(" ")}
                </p>
              </div>
              <div className="space-y-2">
                {[0.9, 0.7, 0.5, 0.35].map((op, i) => (
                  <div
                    key={i}
                    className="h-px w-full"
                    style={{ backgroundColor: `rgba(255,255,255,${op * 0.08})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
