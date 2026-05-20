export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Narayan Paranjape Logo"
    >
      {/* Outer ring */}
      <circle cx="32" cy="32" r="31" fill="#1a2e5a" />
      <circle cx="32" cy="32" r="31" stroke="#c8973a" strokeWidth="2.5" fill="none" />

      {/* Inner decorative ring */}
      <circle cx="32" cy="32" r="26" stroke="#c8973a" strokeWidth="0.75" strokeDasharray="2 3" fill="none" opacity="0.6" />

      {/* Pillar / column motif — left column */}
      <rect x="16" y="22" width="5" height="18" rx="1" fill="#c8973a" />
      <rect x="14.5" y="20.5" width="8" height="2.5" rx="0.8" fill="#c8973a" />
      <rect x="14.5" y="39.5" width="8" height="2.5" rx="0.8" fill="#c8973a" />

      {/* Pillar / column motif — right column */}
      <rect x="43" y="22" width="5" height="18" rx="1" fill="#c8973a" />
      <rect x="41.5" y="20.5" width="8" height="2.5" rx="0.8" fill="#c8973a" />
      <rect x="41.5" y="39.5" width="8" height="2.5" rx="0.8" fill="#c8973a" />

      {/* Horizontal lintel connecting both pillars */}
      <rect x="14.5" y="17" width="35" height="3" rx="1" fill="#c8973a" />

      {/* NP monogram in centre */}
      <text
        x="32"
        y="36.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        NP
      </text>
    </svg>
  );
}
