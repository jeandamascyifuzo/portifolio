import React from "react";

// Shared scene for the phone illustrations: neon background, a phone and a
// glass panel. `phone` is drawn in a 216×400 box at (92, 34) and `panel` in a
// 246×232 box at (352, 66). Collapsed, they sit side by side in a 16:9 scene;
// expanded, they stack in a portrait scene that fills a whole card.
const LAYOUTS = {
  wide: {
    width: 640,
    height: 360,
    phone: "",
    panel: "",
    connector: "M314 160 C334 160 330 150 352 150",
    glows: [[200, 180], [470, 170]],
  },
  tall: {
    width: 360,
    height: 640,
    phone: "translate(20.4 -7.2) scale(0.8)",
    panel: "translate(-295 306)",
    connector: "M180 342 C180 356 180 358 180 372",
    glows: [[180, 170], [180, 480]],
  },
};

const CoverFrame = ({ id, label, defs, phone, panel, expanded = false }) => {
  const layout = expanded ? LAYOUTS.tall : LAYOUTS.wide;

  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className="h-full w-full transition duration-500 group-hover:scale-105"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2e1065" />
          <stop offset="0.55" stopColor="#05060a" />
          <stop offset="1" stopColor="#083344" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.07)" />
        </pattern>
        <linearGradient id={`${id}-border`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#d946ef" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
        {defs}
      </defs>

      <rect width={layout.width} height={layout.height} fill={`url(#${id}-bg)`} />
      <rect width={layout.width} height={layout.height} fill={`url(#${id}-grid)`} />
      <circle cx={layout.glows[0][0]} cy={layout.glows[0][1]} r="110" fill="#7c3aed" opacity="0.35" filter={`url(#${id}-glow)`} />
      <circle cx={layout.glows[1][0]} cy={layout.glows[1][1]} r="100" fill="#06b6d4" opacity="0.25" filter={`url(#${id}-glow)`} />

      <g transform={layout.phone}>
        <rect x="92" y="34" width="216" height="400" rx="34" fill="#111" stroke="#2a2a2e" strokeWidth="2" />
        {phone}
      </g>

      <path d={layout.connector} fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite" />
      </path>

      <g transform={layout.panel}>
        <rect x="352" y="66" width="246" height="232" rx="16" fill="rgba(5,6,10,0.75)" stroke={`url(#${id}-border)`} strokeWidth="1.5" />
        <g className="font-mono">{panel}</g>
      </g>
    </svg>
  );
};

export default CoverFrame;
