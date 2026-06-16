import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/data/projects";
import ScrollytellingSection from "@/components/case-studies/ScrollytellingSection";
import AgentContextWindow from "@/components/case-studies/AgentContextWindow";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} — Ricky Ransom`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-zinc-950">
      {/* Case study hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: project.previewAccent }}
        />

        <Link
          href="/"
          data-cursor="interactive"
          className="mb-12 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#d4af37]"
        >
          ← Back to HQ
        </Link>

        <div className="grid grid-cols-12 gap-6">
          <span className="col-span-12 font-mono text-xs uppercase tracking-[0.4em] text-zinc-500 md:col-span-2">
            {project.vertical}
          </span>
          <h1 className="col-span-12 font-display text-5xl font-extrabold tracking-tight text-white md:col-span-10 md:text-7xl">
            {project.title}
          </h1>
          <p className="col-span-12 text-lg text-zinc-400 md:col-span-6 md:col-start-3">
            {project.subtitle}
          </p>
          <p className="col-span-12 text-sm leading-relaxed text-zinc-500 md:col-span-5 md:col-start-3">
            {project.description}
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-4 md:col-start-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="border border-[#d4af37]/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-zinc-950"
              >
                Live Preview →
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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
      </section>

      {/* Scrollytelling narrative */}
      <ScrollytellingSection
        sections={project.sections}
        accent={project.previewAccent}
      />

      {/* AI Agent context window */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-3xl font-bold text-white">
            Integrated AI Agents
          </h2>
          <AgentContextWindow
            agents={project.aiAgents}
            accent={project.previewAccent}
          />
        </div>
      </section>

      {/* Next project nav */}
      <section className="border-t border-zinc-800 px-6 py-16 md:px-12 lg:px-20">
        <Link
          href="/#work"
          data-cursor="interactive"
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-[#d4af37]"
        >
          View all projects →
        </Link>
      </section>
    </main>
  );
}
