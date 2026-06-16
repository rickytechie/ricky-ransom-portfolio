"use client";

import { motion } from "framer-motion";
import type { AIAgent } from "@/lib/data/projects";

interface AgentContextWindowProps {
  agents: AIAgent[];
  accent?: string;
}

/** Dedicated context window highlighting AI agents integrated into a project vertical. */
export default function AgentContextWindow({
  agents,
  accent = "#d4af37",
}: AgentContextWindowProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-950">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          AI Agent Context
        </span>
      </div>

      <div className="divide-y divide-zinc-800/80">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            className="p-5 md:p-6"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {agent.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {agent.role}
                </p>
              </div>
              <span
                className="shrink-0 border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                style={{ borderColor: `${accent}40`, color: accent }}
              >
                Active
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {agent.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {agent.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="bg-zinc-900 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500"
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
