"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";

interface RootClientLayoutProps {
  children: React.ReactNode;
}

export default function RootClientLayout({ children }: RootClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className="relative min-h-screen"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        {children}
      </div>
    </>
  );
}
