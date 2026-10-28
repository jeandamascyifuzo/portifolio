import React from "react";
import CoverFrame from "./CoverFrame";

const KEYS = [
  ["1", "∞"], ["2", "ABC"], ["3", "DEF"],
  ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
  ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"],
  ["*", ""], ["0", "+"], ["#", ""],
];

const MENU = ["1. Check balance", "2. Send money", "3. Pay loan", "4. Mini statement", "0. More"];

// Illustration for the USSD project: a phone dialing a short code next to
// the USSD menu session it opens.
const UssdCover = ({ expanded }) => (
  <CoverFrame
    id="ussd"
    expanded={expanded}
    label="Phone dialing a USSD short code beside the banking menu it opens"
    phone={
      <>
        <rect x="102" y="44" width="196" height="380" rx="26" fill="#fff" />
        <text x="120" y="72" fontSize="10" fontWeight="600" fill="#1f2937">MFI Bank</text>
        <path d="M258 72 L268 62 L268 72 Z" fill="#1f2937" />
        <rect x="274" y="62" width="5" height="10" rx="1" fill="#1f2937" />
        <text x="200" y="122" textAnchor="middle" fontSize="30" fill="#111827" letterSpacing="1">
          *555#
        </text>
        <rect x="248" y="100" width="2" height="26" fill="#2563eb">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
        <line x1="118" y1="146" x2="282" y2="146" stroke="#e5e7eb" />
        {KEYS.map(([digit, letters], i) => {
          const x = 142 + (i % 3) * 58;
          const y = 178 + Math.floor(i / 3) * 40;
          const symbol = digit === "*" || digit === "#";
          return (
            <g key={digit}>
              <text x={x} y={y} textAnchor="middle" fontSize="19" fill={symbol ? "#374151" : "#2563eb"}>
                {digit}
              </text>
              {letters && (
                <text x={x} y={y + 12} textAnchor="middle" fontSize="7" fill="#94a3b8" letterSpacing="0.5">
                  {letters}
                </text>
              )}
            </g>
          );
        })}
        <circle cx="200" cy="348" r="20" fill="#22a05a" />
        <path
          d="M193 340c1-1 2.5-1 3.3.2l1.6 2.3c.6.9.4 2-.4 2.7l-1 .8c1 2 2.6 3.6 4.6 4.6l.8-1c.7-.8 1.8-1 2.7-.4l2.3 1.6c1.2.8 1.2 2.3.2 3.3l-1 1c-1.2 1.2-3 1.5-4.5.8-4.3-2-7.7-5.4-9.7-9.7-.7-1.5-.4-3.3.8-4.5z"
          fill="#fff"
        />
        <rect x="170" y="406" width="60" height="4" rx="2" fill="#d1d5db" />
      </>
    }
    panel={
      <>
        <circle cx="372" cy="90" r="4" fill="#34d399" />
        <text x="384" y="94" fontSize="11" fill="#a5f3fc">USSD session</text>
        <text x="580" y="94" textAnchor="end" fontSize="10" fill="#64748b">*555#</text>
        <line x1="368" y1="106" x2="582" y2="106" stroke="rgba(255,255,255,0.1)" />
        <text x="370" y="128" fontSize="12" fill="#f1f5f9">Welcome to MFI Bank</text>
        {MENU.map((item, i) => (
          <text key={item} x="370" y={152 + i * 21} fontSize="11.5" fill={i === 0 ? "#67e8f9" : "#cbd5e1"}>
            {item}
          </text>
        ))}
        <rect x="368" y="254" width="140" height="28" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
        <text x="380" y="272" fontSize="11" fill="#e2e8f0">1</text>
        <rect x="388" y="262" width="1.5" height="13" fill="#22d3ee">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="516" y="254" width="66" height="28" rx="7" fill="url(#ussd-border)" />
        <text x="549" y="272" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#fff">SEND</text>
      </>
    }
  />
);

export default UssdCover;
