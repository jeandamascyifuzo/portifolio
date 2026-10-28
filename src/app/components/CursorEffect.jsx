"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, input, textarea, select, label, [role='tab']";

// Neon ring that trails the pointer plus a soft spotlight behind the page.
// Only enabled for mouse/trackpad users who haven't asked for reduced motion.
const CursorEffect = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.5 });
  const glowX = useSpring(x, { stiffness: 80, damping: 20 });
  const glowY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(Boolean(e.target.closest?.(INTERACTIVE)));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringScale = pressed ? 0.7 : hovering ? 1.8 : 1;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute left-0 top-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14),rgba(34,211,238,0.06)_40%,transparent_70%)]"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-secondary-300/80 shadow-[0_0_12px_rgba(34,211,238,0.6),inset_0_0_8px_rgba(139,92,246,0.5)]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: ringScale,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? "rgba(34, 211, 238, 0.12)"
            : "rgba(34, 211, 238, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

export default CursorEffect;
