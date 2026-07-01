export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#001F3F", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#003366", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#FF8C00"
        strokeWidth="2"
        strokeDasharray="15 10"
        opacity="0.3"
      />
      <path
        d="M50 5 A45 45 0 0 1 95 50"
        fill="none"
        stroke="#FF8C00"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 95 A45 45 0 0 1 5 50"
        fill="none"
        stroke="#FF8C00"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Crystal gem */}
      <path
        d="M50 27 L67 40 L60 68 L40 68 L33 40 Z"
        fill="url(#logoGrad)"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M33 40 L67 40 M50 27 L41 68 M50 27 L59 68"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Flame — heating */}
      <path
        d="M18 68 Q18 58, 22 54 Q24 60, 26 58 Q26 52, 22 48 Q28 50, 30 56 Q32 62, 26 68 Q22 72, 18 68Z"
        fill="#FF8C00"
        opacity="0.85"
      />
      {/* Snowflake — cooling */}
      <g stroke="#003366" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <line x1="76" y1="28" x2="76" y2="44" />
        <line x1="68" y1="36" x2="84" y2="36" />
        <line x1="70.4" y1="30.4" x2="81.6" y2="41.6" />
        <line x1="81.6" y1="30.4" x2="70.4" y2="41.6" />
      </g>
    </svg>
  );
}
