"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { getProjectSummaries } from "@/lib/projectData";

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const horizontalShift = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-60%"]);
  const projects = getProjectSummaries();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      id="work"
    >
      {/* Section header */}
      <div className="mb-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-4">
          <span className="col-span-12 font-mono text-xs uppercase tracking-[0.4em] text-zinc-500 md:col-span-2">
            Portfolio
          </span>
          <h2 className="col-span-12 font-display text-4xl font-bold tracking-tight text-white md:col-span-8 md:text-6xl">
            Selected Work
          </h2>
          <p className="col-span-12 text-sm text-zinc-400 md:col-span-6 md:col-start-7 md:text-base">
            Scrollytelling case studies with live previews and integrated AI agent
            context windows.
          </p>
        </div>
      </div>

      {/* Vertical-to-horizontal scroll transition */}
      <div className="relative">
        <motion.div
          ref={trackRef}
          className="horizontal-scroll-track flex gap-6 px-6 md:gap-8 md:px-12 lg:px-20"
          style={{ x: horizontalShift }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative w-[85vw] shrink-0 md:w-[60vw] lg:w-[45vw]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                data-cursor="interactive"
                className="block"
              >
                {/* Card */}
                <div className="relative overflow-hidden border border-zinc-800 bg-zinc-900/50 transition-colors duration-300 group-hover:border-zinc-700">
                  {/* Mockup preview area */}
                  <div
                    className="relative flex h-64 items-center justify-center md:h-80"
                    style={{
                      background: `linear-gradient(135deg, ${project.previewAccent}15 0%, transparent 60%)`,
                    }}
                  >
                    <div className="absolute inset-4 border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-zinc-700" />
                        <div className="h-2 w-2 rounded-full bg-zinc-700" />
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: project.previewAccent }}
                        />
                      </div>
                      <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                        {project.vertical} — Live Preview
                      </p>
                      <p className="mt-2 font-display text-2xl font-bold text-white">
                        {project.title}
                      </p>
                    </div>

                    {/* Parallax depth layer */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full opacity-30 blur-2xl"
                      style={{ backgroundColor: project.previewAccent }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="border-t border-zinc-800 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                          {project.subtitle}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-[#d4af37] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-800 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}

          {/* End spacer */}
          <div className="w-6 shrink-0 md:w-12" />
        </motion.div>
      </div>
    </section>
  );
}
