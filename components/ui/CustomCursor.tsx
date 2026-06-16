"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "interactive" | "text";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const resolveMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return "default";
      const el = target.closest(
        "a, button, [data-cursor='interactive'], input, textarea, select"
      );
      if (!el) return "default";
      if (el.getAttribute("data-cursor") === "text") return "text";
      return "interactive";
    };

    const handlePointerOver = (e: PointerEvent) => {
      setMode(resolveMode(e.target));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("pointerover", handlePointerOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("pointerover", handlePointerOver);
    };
  }, [mouseX, mouseY, isVisible]);

  const size =
    mode === "interactive" ? 48 : mode === "text" ? 6 : 12;
  const opacity = mode === "interactive" ? 0.85 : 0.6;
  const bgColor =
    mode === "interactive"
      ? "rgba(212, 175, 55, 0.25)"
      : mode === "text"
        ? "rgba(250, 250, 250, 0.9)"
        : "rgba(212, 175, 55, 0.9)";
  const borderColor =
    mode === "interactive"
      ? "rgba(212, 175, 55, 0.8)"
      : "rgba(212, 175, 55, 0.4)";

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? opacity : 0,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 400 }}
      >
        <div
          className="h-full w-full rounded-full border"
          style={{ backgroundColor: bgColor, borderColor }}
        />
      </motion.div>

      {/* Center dot — only in default mode */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10001]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && mode === "default" ? 1 : 0,
          scale: mode === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="h-1 w-1 rounded-full bg-white" />
      </motion.div>
    </>
  );
}
