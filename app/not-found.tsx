import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center">
      <h1 className="font-display text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-zinc-400">This page doesn&apos;t exist in the HQ.</p>
      <Link
        href="/"
        data-cursor="interactive"
        className="mt-8 border border-zinc-700 px-6 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
      >
        Return to HQ
      </Link>
    </main>
  );
}
