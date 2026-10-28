import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-secondary-400 bg-secondary-400/10"
    : "text-[#ADB7BE] border-white/15 hover:border-white";
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`${buttonStyles} rounded-lg border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
