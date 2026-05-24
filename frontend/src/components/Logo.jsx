import React from "react";

// VDIT Crest-style SVG logo (decorative, original)
// Uses CSS variables so it respects the active theme palette.
const Logo = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KLS VDIT Crest"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="crestGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgb(var(--brand))" />
          <stop offset="1" stopColor="rgb(var(--brand-dark))" />
        </linearGradient>
      </defs>
      {/* Outer shield */}
      <path
        d="M50 4 L92 16 V46 C92 70 74 88 50 96 C26 88 8 70 8 46 V16 Z"
        fill="url(#crestGrad)"
        stroke="rgb(var(--brand-dark))"
        strokeWidth="1.5"
      />
      {/* Inner background */}
      <path
        d="M50 12 L84 22 V46 C84 66 69 81 50 88 C31 81 16 66 16 46 V22 Z"
        fill="rgb(var(--surface))"
      />
      {/* Open book */}
      <path
        d="M28 44 Q50 36 72 44 V58 Q50 50 28 58 Z"
        fill="rgb(var(--brand))"
      />
      <line x1="50" y1="40" x2="50" y2="55" stroke="rgb(var(--surface))" strokeWidth="1.2" />
      {/* Lamp/torch on top */}
      <circle cx="50" cy="28" r="4" fill="rgb(var(--brand))" />
      <path d="M48 24 Q50 18 52 24" stroke="rgb(var(--brand))" strokeWidth="1.5" fill="none" />
      {/* Lower scroll */}
      <path
        d="M22 66 Q50 76 78 66 L78 78 Q50 86 22 78 Z"
        fill="rgb(var(--brand))"
      />
      <text
        x="50"
        y="76"
        fontSize="6.5"
        fontWeight="700"
        textAnchor="middle"
        fill="rgb(var(--surface))"
        fontFamily="Georgia, serif"
      >
        VDIT
      </text>
    </svg>
  );
};

export default Logo;
