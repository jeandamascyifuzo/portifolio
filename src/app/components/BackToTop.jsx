"use client";
import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="font-mono text-xs uppercase tracking-wider text-slate-500 hover:text-white"
    >
      Back to top ↑
    </button>
  );
};

export default BackToTop;
