import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ id, active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-slate-500";

  return (
    <button
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-selected={active}
      aria-controls={`panel-${id}`}
      onClick={selectTab}
    >
      <span
        className={`mr-3 font-mono text-sm uppercase tracking-wider hover:text-white ${buttonClasses}`}
      >
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-3 mt-2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
      />
    </button>
  );
};

export default TabButton;
