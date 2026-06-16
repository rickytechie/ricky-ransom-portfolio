"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CampRegistrationMatrixProps {
  accent: string;
}

const sessions = [
  { id: "adv-w1", name: "Adventure Week 1", enrolled: 38, capacity: 40, price: "$1,200" },
  { id: "art-w2", name: "Arts Week 2", enrolled: 32, capacity: 40, price: "$1,100" },
  { id: "nat-w3", name: "Nature Week 3", enrolled: 28, capacity: 40, price: "$1,150" },
  { id: "swm-w1", name: "Swim Intensive", enrolled: 40, capacity: 40, price: "$950" },
  { id: "sci-w2", name: "Science Lab", enrolled: 22, capacity: 30, price: "$1,300" },
  { id: "mus-w3", name: "Music & Performance", enrolled: 35, capacity: 40, price: "$1,050" },
];

export default function CampRegistrationMatrix({ accent }: CampRegistrationMatrixProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set(["adv-w1"]));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const total = sessions
    .filter((s) => selected.has(s.id))
    .reduce((sum, s) => sum + parseInt(s.price.replace(/[$,]/g, "")), 0);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
            Registration Matrix
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-white/80">
            Session Availability
          </p>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
          {selected.size} selected
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {sessions.map((session) => {
            const pct = (session.enrolled / session.capacity) * 100;
            const isFull = session.enrolled >= session.capacity;
            const isSelected = selected.has(session.id);

            return (
              <button
                key={session.id}
                data-cursor="interactive"
                disabled={isFull}
                onClick={() => !isFull && toggle(session.id)}
                className={`relative border p-3 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-opacity-60"
                    : "border-white/[0.06] hover:border-white/15"
                } ${isFull ? "cursor-not-allowed opacity-40" : ""}`}
                style={{
                  borderColor: isSelected ? accent : undefined,
                  backgroundColor: isSelected ? `${accent}10` : undefined,
                }}
              >
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">
                  {session.price}
                </p>
                <p className="mt-1 text-[11px] font-medium leading-tight text-white/80">
                  {session.name}
                </p>
                <div className="mt-2 h-1 w-full bg-white/5">
                  <motion.div
                    className="h-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: pct >= 95 ? "#ef4444" : accent,
                    }}
                    layout
                  />
                </div>
                <p className="mt-1 font-mono text-[8px] text-white/30">
                  {session.enrolled}/{session.capacity}
                  {isFull && " · FULL"}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
            Estimated Total
          </p>
          <p className="font-display text-lg font-bold" style={{ color: accent }}>
            ${total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
