import React from "react";
import CoverFrame from "./CoverFrame";

const TRANSACTIONS = [
  { label: "Deposit", amount: "+50,000", color: "#34d399", icon: "↓" },
  { label: "Loan repayment", amount: "−15,000", color: "#f472b6", icon: "↻" },
  { label: "Airtime", amount: "−2,000", color: "#a78bfa", icon: "↑" },
];

const LANGUAGES = ["EN", "FR", "RN", "RW"];

// Illustration for the mobile app project: the app's welcome screen next to
// a glimpse of the signed-in experience.
const MobileAppCover = ({ expanded }) => (
  <CoverFrame
    id="app"
    expanded={expanded}
    label="Mobile banking app welcome screen beside an account balance and recent transactions"
    defs={
      <>
        <linearGradient id="app-amount" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#67e8f9" />
        </linearGradient>
        <clipPath id="app-screen">
          <rect x="102" y="44" width="196" height="380" rx="26" />
        </clipPath>
      </>
    }
    phone={
      <g clipPath="url(#app-screen)">
        <rect x="102" y="44" width="196" height="380" fill="#fff" />
        <rect x="102" y="44" width="196" height="150" fill="#2a2250" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <circle key={i} cx="330" cy="20" r={70 + i * 16} fill="none" stroke="rgba(255,255,255,0.09)" />
        ))}
        <text x="118" y="64" fontSize="9" fontWeight="600" fill="#fff">7:59</text>
        <rect x="262" y="57" width="16" height="8" rx="2" fill="none" stroke="#fff" />
        <rect x="264" y="59" width="9" height="4" rx="1" fill="#fff" />
        <path d="M242 65 h2 v-2 h-2z M246 65 h2 v-4 h-2z M250 65 h2 v-6 h-2z M254 65 h2 v-8 h-2z" fill="#fff" />

        <rect x="118" y="96" width="28" height="28" rx="6" fill="#fff" />
        <path d="M126 116 c0-7 5-12 12-12 c0 7-5 12-12 12z" fill="#10b981" />
        <path d="M131 118 c2-4 4-6 7-7" fill="none" stroke="#fff" strokeWidth="1.5" />
        <text x="154" y="115" fontSize="15" fontWeight="700" fill="#fff">MFI Bank</text>

        <rect x="102" y="178" width="196" height="260" rx="18" fill="#fff" />
        <circle cx="200" cy="178" r="21" fill="#fcd34d" stroke="#fff" strokeWidth="4" />
        <rect x="192.5" y="177" width="15" height="11" rx="2" fill="none" stroke="#1f2937" strokeWidth="1.8" />
        <path d="M195.5 177 v-3.5 a4.5 4.5 0 0 1 9 0 v3.5" fill="none" stroke="#1f2937" strokeWidth="1.8" />
        <path d="M196.5 182.5 l2.3 2.2 l4-4" fill="none" stroke="#1f2937" strokeWidth="1.5" />

        <text x="200" y="226" textAnchor="middle" fontSize="15" fontWeight="700" fill="#111827">Welcome!</text>
        <text x="200" y="242" textAnchor="middle" fontSize="8" fill="#6b7280">Your all-in-one place for</text>
        <text x="200" y="253" textAnchor="middle" fontSize="8" fill="#6b7280">managing your finances.</text>

        <rect x="120" y="266" width="160" height="26" rx="8" fill="#2a2250" />
        <text x="200" y="283" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fff">I already have an account</text>
        <rect x="120" y="300" width="160" height="26" rx="8" fill="#fff" stroke="#2a2250" />
        <text x="200" y="317" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2a2250">Open a new account</text>
        <text x="200" y="345" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#2a2250">Track my application</text>
        <rect x="160" y="406" width="80" height="4" rx="2" fill="#374151" />
      </g>
    }
    panel={
      <>
        <circle cx="372" cy="90" r="4" fill="#34d399" />
        <text x="384" y="94" fontSize="11" fill="#a5f3fc">Face ID login</text>
        <text x="580" y="94" textAnchor="end" fontSize="10" fill="#64748b">iOS · Android</text>
        <line x1="368" y1="106" x2="582" y2="106" stroke="rgba(255,255,255,0.1)" />
        <text x="370" y="126" fontSize="9.5" fill="#64748b">AVAILABLE BALANCE</text>
        <text x="370" y="152" fontSize="22" fontWeight="700" fill="url(#app-amount)">RWF 248,500</text>
        {TRANSACTIONS.map((t, i) => {
          const y = 176 + i * 26;
          return (
            <g key={t.label}>
              <circle cx="380" cy={y} r="9" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
              <text x="380" y={y + 3.5} textAnchor="middle" fontSize="10" fill={t.color}>{t.icon}</text>
              <text x="396" y={y + 4} fontSize="11" fill="#cbd5e1">{t.label}</text>
              <text x="582" y={y + 4} textAnchor="end" fontSize="11" fill={t.color}>{t.amount}</text>
            </g>
          );
        })}
        {LANGUAGES.map((lang, i) => (
          <g key={lang}>
            <rect x={370 + i * 40} y="256" width="32" height="22" rx="6" fill={i === 0 ? "url(#app-border)" : "rgba(255,255,255,0.05)"} stroke="rgba(255,255,255,0.15)" />
            <text x={386 + i * 40} y="271" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">{lang}</text>
          </g>
        ))}
      </>
    }
  />
);

export default MobileAppCover;
