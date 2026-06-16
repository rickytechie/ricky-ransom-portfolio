import HeroSection from "@/components/home/HeroSection";
import CurrentlySection from "@/components/home/CurrentlySection";
import ProjectShowcase from "@/components/home/ProjectShowcase";

export default function Home() {
  return (
    <main className="relative bg-zinc-950">
      <HeroSection />
      <CurrentlySection />
      <ProjectShowcase />

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Ricky <span className="text-gold-gradient">Ransom</span>
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Live Production · DJing · Tech Consulting
            </p>
          </div>
          <a
            href="mailto:hello@rickyransom.com"
            data-cursor="interactive"
            className="border border-zinc-700 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Get in touch
          </a>
        </div>
      </footer>
    </main>
  );
}
