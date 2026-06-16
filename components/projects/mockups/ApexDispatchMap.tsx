"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ApexDispatchMapProps {
  accent: string;
}

const technicians = [
  { id: 23, name: "Marcus Chen", x: 62, y: 45, status: "en-route", eta: "8 min" },
  { id: 11, name: "Dana Reyes", x: 35, y: 60, status: "available", eta: "—" },
  { id: 7, name: "James Ortiz", x: 78, y: 30, status: "on-site", eta: "On site" },
  { id: 19, name: "Priya Shah", x: 48, y: 75, status: "available", eta: "—" },
];

const tickets = [
  { id: 9102, zone: "Zone 7", priority: "critical", label: "Burst pipe" },
  { id: 9105, zone: "Zone 3", priority: "standard", label: "Water heater" },
];

export default function ApexDispatchMap({ accent }: ApexDispatchMapProps) {
  const [selectedTech, setSelectedTech] = useState<number | null>(23);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
            Live Dispatch
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-white/80">
            Field Map — Real Time
          </p>
        </div>
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
          Live
        </span>
      </div>

      <div className="relative flex-1 p-4 md:p-6">
        {/* Map grid */}
        <div className="relative h-full min-h-[200px] overflow-hidden border border-white/[0.04] bg-[#0a1520]">
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px w-full bg-white/10"
                style={{ top: `${(i + 1) * 12.5}%` }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-white/10"
                style={{ left: `${(i + 1) * 12.5}%` }}
              />
            ))}
          </div>

          {/* Emergency ticket pulse */}
          <motion.div
            className="absolute"
            style={{ left: "58%", top: "42%" }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: "#ef4444" }}
            />
          </motion.div>

          {/* Technicians */}
          {technicians.map((tech) => (
            <button
              key={tech.id}
              data-cursor="interactive"
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
              onClick={() => setSelectedTech(tech.id)}
            >
              <motion.div
                animate={{ scale: selectedTech === tech.id ? 1.3 : 1 }}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 text-[8px] font-bold text-white"
                style={{
                  borderColor: selectedTech === tech.id ? accent : "rgba(255,255,255,0.3)",
                  backgroundColor:
                    tech.status === "en-route"
                      ? accent
                      : tech.status === "on-site"
                        ? "#22c55e"
                        : "rgba(255,255,255,0.1)",
                }}
              >
                {tech.id}
              </motion.div>
            </button>
          ))}
        </div>

        {/* Ticket + tech detail */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border border-white/[0.06] p-3"
              style={{
                borderColor:
                  ticket.priority === "critical" ? "#ef444440" : undefined,
              }}
            >
              <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">
                #{ticket.id} · {ticket.zone}
              </p>
              <p className="mt-1 text-xs text-white/70">{ticket.label}</p>
              <p
                className="mt-1 font-mono text-[8px] uppercase"
                style={{
                  color: ticket.priority === "critical" ? "#ef4444" : accent,
                }}
              >
                {ticket.priority}
              </p>
            </div>
          ))}
        </div>

        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 border border-white/[0.06] p-3"
            style={{ borderColor: `${accent}30` }}
          >
            {(() => {
              const tech = technicians.find((t) => t.id === selectedTech);
              if (!tech) return null;
              return (
                <>
                  <p className="font-display text-sm font-semibold text-white/90">
                    Tech #{tech.id} — {tech.name}
                  </p>
                  <p className="mt-1 font-mono text-[9px] text-white/40">
                    Status: {tech.status} · ETA: {tech.eta}
                  </p>
                </>
              );
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
}
