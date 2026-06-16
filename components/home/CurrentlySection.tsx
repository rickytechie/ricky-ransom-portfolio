"use client";

import { motion } from "framer-motion";
import { currentlyItems } from "@/lib/data/currently";

const statusStyles = {
  active: "border-[#d4af37]/40 text-[#d4af37]",
  upcoming: "border-zinc-600 text-zinc-400",
  complete: "border-zinc-700 text-zinc-500",
};

export default function CurrentlySection() {
  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header — asymmetrical */}
        <div className="mb-12 grid grid-cols-12 gap-4">
          <motion.div
            className="col-span-12 md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">
              Right Now
            </span>
          </motion.div>
          <motion.h2
            className="col-span-12 font-display text-4xl font-bold tracking-tight text-white md:col-span-6 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Currently
          </motion.h2>
        </div>

        {/* Live focus cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {currentlyItems.map((item, index) => (
            <motion.article
              key={item.id}
              data-cursor="interactive"
              className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                style={{ backgroundColor: item.accent ?? "#d4af37" }}
              />

              <div className="flex items-start justify-between gap-4 pl-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-zinc-300 md:text-lg">
                    {item.value}
                  </p>
                </div>
                <span
                  className={`shrink-0 border px-2 py-1 font-mono text-[9px] uppercase tracking-widest ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: item.accent ?? "#d4af37" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
