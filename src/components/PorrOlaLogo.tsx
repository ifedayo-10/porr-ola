export default function PorrOlaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="PORR OLA"
    >
      <rect width="140" height="90" rx="5" fill="#0d2154" />
      {/* 4 diamonds in 2x2 arrangement */}
      <rect x="43" y="10" width="20" height="20" rx="1" fill="#f5c800" transform="rotate(45 53 20)" />
      <rect x="67" y="10" width="20" height="20" rx="1" fill="#f5c800" transform="rotate(45 77 20)" />
      <rect x="43" y="30" width="20" height="20" rx="1" fill="#f5c800" transform="rotate(45 53 40)" />
      <rect x="67" y="30" width="20" height="20" rx="1" fill="#f5c800" transform="rotate(45 77 40)" />
      {/* Text */}
      <text
        x="70"
        y="76"
        fill="#f5c800"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="20"
        textAnchor="middle"
        letterSpacing="1"
      >
        PORR OLA
      </text>
    </svg>
  );
}
