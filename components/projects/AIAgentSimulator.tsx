"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AIAgentConfig } from "@/lib/projectData";

interface AIAgentSimulatorProps {
  agent: AIAgentConfig;
  accent: string;
}

const logColors = {
  info: "text-white/40",
  success: "text-emerald-400/70",
  warning: "text-amber-400/70",
  action: "text-white/60",
};

/** Heavily stylized AI agent module with live simulation feed. */
export default function AIAgentSimulator({ agent, accent }: AIAgentSimulatorProps) {
  const [query, setQuery] = useState(agent.defaultQuery);
  const [response, setResponse] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedIndex, setFeedIndex] = useState(0);

  const visibleFeed = [
    agent.liveFeed[feedIndex % agent.liveFeed.length],
    agent.liveFeed[(feedIndex + 1) % agent.liveFeed.length],
    agent.liveFeed[(feedIndex + 2) % agent.liveFeed.length],
  ];

  const simulateQuery = useCallback(() => {
    setIsProcessing(true);
    setResponse(null);
    setTimeout(() => {
      const match =
        agent.responses[query] ??
        "Processing query through agent pipeline... Result: 3 matches found. Confidence: 94.2%. Routing complete.";
      setResponse(match);
      setIsProcessing(false);
    }, 1200);
  }, [agent.responses, query]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % agent.liveFeed.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [agent.liveFeed.length]);

  const quickQueries = Object.keys(agent.responses).slice(0, 3);

  return (
    <div className="overflow-hidden border border-white/[0.06] bg-[#060606]">
      {/* Agent header */}
      <div
        className="border-b border-white/[0.06] px-6 py-5"
        style={{
          background: `linear-gradient(180deg, ${accent}06 0%, transparent 100%)`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
              {agent.simulationTitle}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
              {agent.name}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
              {agent.role}
            </p>
          </div>
          <span
            className="flex shrink-0 items-center gap-2 border px-3 py-1 font-mono text-[8px] uppercase tracking-widest"
            style={{ borderColor: `${accent}40`, color: accent }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: accent }}
            />
            Agent Active
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/45">{agent.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {agent.capabilities.map((cap) => (
            <span
              key={cap}
              className="bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white/35"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Query panel */}
        <div className="border-b border-white/[0.06] p-6 md:border-b-0 md:border-r">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
            Natural Language Query
          </p>
          <textarea
            data-cursor="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={3}
            className="mt-3 w-full resize-none border border-white/[0.06] bg-white/[0.02] p-4 font-mono text-xs leading-relaxed text-white/70 outline-none transition-colors focus:border-white/15"
            placeholder="Ask the agent..."
          />
          <button
            data-cursor="interactive"
            onClick={simulateQuery}
            disabled={isProcessing}
            className="mt-4 border px-6 py-2.5 font-mono text-[9px] uppercase tracking-[0.25em] transition-all duration-300 disabled:opacity-40"
            style={{
              borderColor: `${accent}50`,
              color: accent,
            }}
          >
            {isProcessing ? "Processing..." : "Run Simulation"}
          </button>

          {/* Quick queries */}
          <div className="mt-6 space-y-2">
            <p className="font-mono text-[8px] uppercase tracking-widest text-white/20">
              Quick Queries
            </p>
            {quickQueries.map((q) => (
              <button
                key={q}
                data-cursor="interactive"
                onClick={() => setQuery(q)}
                className="block w-full truncate border border-white/[0.04] px-3 py-2 text-left font-mono text-[10px] text-white/40 transition-colors hover:border-white/10 hover:text-white/60"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Response */}
          <AnimatePresence>
            {response && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 border p-4"
                style={{ borderColor: `${accent}25`, backgroundColor: `${accent}06` }}
              >
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/25">
                  Agent Response
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/65">{response}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live feed */}
        <div className="p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
            Live Agent Feed
          </p>
          <div className="mt-4 space-y-3">
            <AnimatePresence mode="popLayout">
              {visibleFeed.map((log, i) => (
                <motion.div
                  key={`${log.timestamp}-${i}`}
                  layout
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 border-l-2 py-1 pl-4"
                  style={{
                    borderColor:
                      log.type === "action"
                        ? accent
                        : log.type === "warning"
                          ? "#f59e0b40"
                          : "rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="shrink-0 font-mono text-[9px] text-white/20">
                    {log.timestamp}
                  </span>
                  <span className={`font-mono text-[10px] leading-relaxed ${logColors[log.type]}`}>
                    {log.message}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
