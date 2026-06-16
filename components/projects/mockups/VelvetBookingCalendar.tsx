"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface VelvetBookingCalendarProps {
  accent: string;
}

const practitioners = ["Jade", "Mia", "Sloane", "Aria"];
const timeSlots = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"];

type SlotStatus = "open" | "booked" | "selected";

const initialGrid: Record<string, SlotStatus> = {
  "Jade-10:00": "booked",
  "Mia-11:00": "booked",
  "Sloane-9:00": "booked",
  "Aria-2:00": "booked",
  "Jade-1:00": "booked",
  "Mia-3:00": "booked",
};

export default function VelvetBookingCalendar({ accent }: VelvetBookingCalendarProps) {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const getStatus = (practitioner: string, time: string): SlotStatus => {
    const key = `${practitioner}-${time}`;
    if (grid[key] === "booked") return "booked";
    if (selectedSlot === key) return "selected";
    return "open";
  };

  const handleSlotClick = (practitioner: string, time: string) => {
    const key = `${practitioner}-${time}`;
    if (grid[key] === "booked") return;
    setSelectedSlot(selectedSlot === key ? null : key);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
            Booking Calendar
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-white/80">
            Multi-Practitioner Schedule
          </p>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: accent }}>
          89% utilization
        </span>
      </div>

      <div className="flex-1 overflow-x-auto p-4 md:p-6">
        <div className="min-w-[400px]">
          {/* Header row */}
          <div className="grid grid-cols-[60px_repeat(4,1fr)] gap-1">
            <div />
            {practitioners.map((p) => (
              <div
                key={p}
                className="py-2 text-center font-mono text-[8px] uppercase tracking-widest text-white/40"
              >
                {p}
              </div>
            ))}
          </div>

          {/* Time rows */}
          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-[60px_repeat(4,1fr)] gap-1">
              <div className="flex items-center font-mono text-[9px] text-white/25">
                {time}
              </div>
              {practitioners.map((practitioner) => {
                const status = getStatus(practitioner, time);
                return (
                  <button
                    key={`${practitioner}-${time}`}
                    data-cursor={status !== "booked" ? "interactive" : undefined}
                    disabled={status === "booked"}
                    onClick={() => handleSlotClick(practitioner, time)}
                    className="h-8 transition-all duration-200"
                    style={{
                      backgroundColor:
                        status === "booked"
                          ? "rgba(255,255,255,0.04)"
                          : status === "selected"
                            ? accent
                            : `${accent}15`,
                      opacity: status === "booked" ? 0.5 : 1,
                      cursor: status === "booked" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "booked" && (
                      <span className="font-mono text-[7px] text-white/20">booked</span>
                    )}
                    {status === "selected" && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="font-mono text-[7px] text-white"
                      >
                        selected
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {selectedSlot && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/[0.06] px-6 py-4"
        >
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
            Selected Slot
          </p>
          <p className="mt-1 text-sm text-white/70">
            {selectedSlot.replace("-", " · ")} — Balayage + Toner (2hr)
          </p>
          <button
            data-cursor="interactive"
            className="mt-3 border px-4 py-2 font-mono text-[9px] uppercase tracking-widest transition-colors hover:text-white"
            style={{ borderColor: accent, color: accent }}
          >
            Confirm Booking
          </button>
        </motion.div>
      )}
    </div>
  );
}
