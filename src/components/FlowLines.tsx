import { cn } from "@/lib/utils";

// River-like curves with circuit nodes, echoing the logo mark. Dashes travel
// along each line (animate-flow); disabled for prefers-reduced-motion.
const rows = [120, 210, 300, 390, 480];

function curve(y: number, i: number) {
  const a = i % 2 === 0 ? 70 : -60;
  return `M-60,${y} C240,${y - a} 460,${y + a} 720,${y} S1060,${y - a * 0.7} 1260,${y + 10}`;
}

export function FlowLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient id="flow-stroke" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--indigo)" stopOpacity="0" />
          <stop offset="35%" stopColor="var(--indigo)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      {rows.map((y, i) => (
        <g key={y}>
          <path
            d={curve(y, i)}
            fill="none"
            stroke="url(#flow-stroke)"
            strokeOpacity={0.18}
            strokeWidth={1.5}
          />
          <path
            d={curve(y, i)}
            fill="none"
            stroke="url(#flow-stroke)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="2 22"
            className="animate-flow"
            style={{ animationDuration: `${12 + i * 3}s` }}
          />
        </g>
      ))}
      {[
        [1080, 150],
        [1130, 260],
        [1060, 370],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={7}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth={2}
          strokeOpacity={0.6}
        />
      ))}
    </svg>
  );
}
