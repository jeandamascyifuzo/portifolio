"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Card cover that grows to fill its whole card while a mouse hovers it.
// Touch and keyboard users toggle it with a tap / Enter, and Escape closes it.
// The placeholder keeps the card's height steady: while expanded it stops
// being the positioning context, so the absolutely positioned button resolves
// against the card itself.
const ExpandableCover = ({ Cover, title }) => {
  const [expanded, setExpanded] = useState(false);
  const pointerType = useRef(null);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const onHover = (open) => (e) => {
    if (e.pointerType === "mouse") setExpanded(open);
  };

  const onClick = () => {
    // Mouse users are already handled by hover.
    if (pointerType.current !== "mouse") setExpanded((open) => !open);
    pointerType.current = null;
  };

  return (
    <div className={`aspect-[16/9] ${expanded ? "" : "relative overflow-hidden"}`}>
      <motion.button
        layout
        type="button"
        onPointerEnter={onHover(true)}
        onPointerLeave={onHover(false)}
        onPointerDown={(e) => (pointerType.current = e.pointerType)}
        onClick={onClick}
        aria-expanded={expanded}
        aria-label={`${expanded ? "Shrink" : "Expand"} ${title} preview`}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="absolute inset-0 z-10 flex items-center bg-gradient-to-br from-[#2e1065] via-base to-[#083344]"
      >
        <Cover expanded={expanded} />
      </motion.button>
    </div>
  );
};

export default ExpandableCover;
