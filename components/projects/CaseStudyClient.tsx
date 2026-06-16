"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectData } from "@/lib/projectData";
import ScrollytellingContainer from "./ScrollytellingContainer";
import LivePreviewMockup from "./LivePreviewMockup";
import AIAgentSimulator from "./AIAgentSimulator";

interface CaseStudyClientProps {
  project: ProjectData;
}

/** Client-side case study shell — inherits global cursor & loading from RootClientLayout. */
export default function CaseStudyClient({ project }: CaseStudyClientProps) {
  return (
    <main
      className="relative min-h-screen"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Cinematic ambient */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -right-48 top-0 h-[700px] w-[700px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ backgroundColor: project.previewAccent }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] opacity-[0.02]" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 pb-20 pt-32 md:px-12 lg:px-20">
          <Link
            href="/"
            data-cursor="interactive"
            className="mb-16 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/30 transition-colors hover:text-white/60"
          >
            ← Return to HQ
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl"
          >
            <span
              className="font-mono text-[10px] uppercase tracking-[0.45em]"
              style={{ color: project.previewAccent }}
            >
              {project.vertical} · Case Study
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              {project.companyName}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/50 md:text-xl">
              {project.subtitle}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/30">
              {project.longDescription}
            </p>

            {/* Feature pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="border border-white/[0.06] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Live Preview Mockup */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">
                  Interactive Preview
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                  Live Product Viewport
                </h2>
              </div>
              <span className="hidden font-mono text-[9px] uppercase tracking-widest text-white/20 md:block">
                Click to interact
              </span>
            </div>
            <LivePreviewMockup
              previewType={project.previewType}
              accent={project.previewAccent}
              companyName={project.companyName}
              leadAgents={project.leadAgents}
            />
          </div>
        </section>

        {/* Technical specs */}
        <section className="border-y border-white/[0.04] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {project.technicalSpecs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
                  {spec.label}
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-white/70">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Scrollytelling */}
        <section>
          <div className="px-6 pt-20 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">
                Narrative
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                The Story
              </h2>
            </div>
          </div>
          <ScrollytellingContainer
            chapters={project.chapters}
            accent={project.previewAccent}
            companyName={project.companyName}
          />
        </section>

        {/* AI Agent Window */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">
              Intelligence Layer
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              Integrated AI Agent
            </h2>
            <div className="mt-10">
              <AIAgentSimulator agent={project.aiAgent} accent={project.previewAccent} />
            </div>
          </div>
        </section>

        {/* Tags + nav */}
        <section className="border-t border-white/[0.04] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/[0.06] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/#work"
              data-cursor="interactive"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors hover:text-white/60"
            >
              View all projects →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
