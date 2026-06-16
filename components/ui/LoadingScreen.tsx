"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onComplete, 900);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient gold glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Brand mark */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">
                Digital Headquarters
              </span>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                Ricky
                <span className="text-gold-gradient"> Ransom</span>
              </h1>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="max-w-xs text-center text-sm leading-relaxed text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Live production · DJing · Multi-industry tech consulting
            </motion.p>

            {/* Enter CTA */}
            <motion.button
              data-cursor="interactive"
              onClick={handleEnter}
              className="group relative mt-4 overflow-hidden border border-[#d4af37]/40 px-10 py-4 font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] transition-colors hover:border-[#d4af37] hover:text-zinc-950"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-zinc-950">
                Enter Ricky Ransom World
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom ticker */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.p
              className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-700"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              PropTech · Field Ops · Camp Systems · Beauty Tech · AI Agents · Live Production ·
              PropTech · Field Ops · Camp Systems · Beauty Tech · AI Agents · Live Production ·
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="loading-exit"
          className="fixed inset-0 z-[9999] bg-zinc-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
