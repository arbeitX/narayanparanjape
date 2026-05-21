export default function Logo({ size = 40 }: { size?: number }) {
  const id = "logo-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Narayan Paranjape — Financial Advisor"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8b84b" />
          <stop offset="100%" stopColor="#c8973a" />
        </linearGradient>
        <linearGradient id={`${id}-navy`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3668" />
          <stop offset="100%" stopColor="#13234a" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Shield body */}
      <path
        d="M28 2 L50 10 L50 30 C50 42 28 54 28 54 C28 54 6 42 6 30 L6 10 Z"
        fill={`url(#${id}-navy)`}
        filter={`url(#${id}-shadow)`}
      />

      {/* Shield gold border */}
      <path
        d="M28 4.5 L47.5 11.8 L47.5 30 C47.5 40.5 28 51.2 28 51.2 C28 51.2 8.5 40.5 8.5 30 L8.5 11.8 Z"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.5"
      />

      {/* Horizontal divider line */}
      <line x1="15" y1="24" x2="41" y2="24" stroke="#c8973a" strokeWidth="0.8" opacity="0.6" />

      {/* Rupee symbol */}
      <text
        x="28"
        y="22"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        fontWeight="700"
        fill="#e8b84b"
      >
        ₹
      </text>

      {/* Rising bar chart — three bars */}
      <rect x="17" y="35" width="4.5" height="6" rx="0.8" fill="#c8973a" opacity="0.7" />
      <rect x="23.5" y="31" width="4.5" height="10" rx="0.8" fill="#c8973a" opacity="0.85" />
      <rect x="30" y="27" width="4.5" height="14" rx="0.8" fill="#e8b84b" />

      {/* Small upward arrow on tallest bar */}
      <polyline
        points="32.25,25.5 32.25,22.5 35.5,25.5"
        fill="none"
        stroke="#e8b84b"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Bottom accent dots */}
      <circle cx="22" cy="46" r="1" fill="#c8973a" opacity="0.5" />
      <circle cx="28" cy="48" r="1" fill="#e8b84b" opacity="0.6" />
      <circle cx="34" cy="46" r="1" fill="#c8973a" opacity="0.5" />
    </svg>
  );
}
