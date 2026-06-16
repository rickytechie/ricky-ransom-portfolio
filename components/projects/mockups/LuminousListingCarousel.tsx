"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LeadAgent } from "@/lib/projectData";

interface LuminousListingCarouselProps {
  agents: LeadAgent[];
  accent: string;
}

const listings = [
  {
    id: 1,
    address: "1842 Harbor Lane",
    price: "$3,950,000",
    beds: 5,
    baths: 6,
    acres: 0.8,
    tag: "Waterfront Estate",
  },
  {
    id: 2,
    address: "2200 Summit Ridge",
    price: "$5,200,000",
    beds: 6,
    baths: 7,
    acres: 1.2,
    tag: "Ridge Panorama",
  },
  {
    id: 3,
    address: "88 Mercer Penthouse",
    price: "$8,750,000",
    beds: 4,
    baths: 5,
    acres: 0,
    tag: "Urban Penthouse",
  },
];

export default function LuminousListingCarousel({
  agents,
  accent,
}: LuminousListingCarouselProps) {
  const [active, setActive] = useState(0);
  const listing = listings[active];

  return (
    <div className="flex h-full flex-col">
      {/* Carousel header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
            Luxury Listings
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-white/80">
            Live Portfolio
          </p>
        </div>
        <div className="flex gap-2">
          {listings.map((_, i) => (
            <button
              key={i}
              data-cursor="interactive"
              onClick={() => setActive(i)}
              className="h-1.5 transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                backgroundColor: active === i ? accent : "rgba(255,255,255,0.15)",
              }}
              aria-label={`View listing ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Active listing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={listing.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-1 flex-col justify-between p-6 md:p-8"
        >
          <div>
            <span
              className="inline-block border px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest"
              style={{ borderColor: `${accent}50`, color: accent }}
            >
              {listing.tag}
            </span>
            <h4 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
              {listing.address}
            </h4>
            <p className="mt-2 font-display text-xl" style={{ color: accent }}>
              {listing.price}
            </p>
            <div className="mt-4 flex gap-6 font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span>{listing.beds} Bed</span>
              <span>{listing.baths} Bath</span>
              {listing.acres > 0 && <span>{listing.acres} Acres</span>}
            </div>
          </div>

          {/* Agent cards */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {agents.map((agent) => (
              <button
                key={agent.name}
                data-cursor="interactive"
                className="group border border-white/[0.06] p-4 text-left transition-colors hover:border-white/15"
                onClick={() => {}}
              >
                <p className="font-display text-sm font-semibold text-white/90">
                  {agent.name}
                </p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/30">
                  {agent.role}
                </p>
                <p className="mt-2 text-[10px] text-white/40">{agent.specialty}</p>
                <p
                  className="mt-2 font-mono text-[9px] transition-colors group-hover:text-white/60"
                  style={{ color: `${accent}80` }}
                >
                  {agent.listings} active listings
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
