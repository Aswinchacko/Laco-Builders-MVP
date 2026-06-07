import { cn } from "@/lib/cn";

export interface StarsProps {
  value?: number;
  className?: string;
  label?: string;
}

const PATH =
  "M10 1.5l2.47 5.18 5.7.62-4.24 3.86 1.16 5.6L10 14.9l-5.09 2.86 1.16-5.6L1.83 7.3l5.7-.62L10 1.5z";

/** Single star that supports partial fill (0–1) so 4.8 renders honestly. */
function Star({ fill, id }: { fill: number; id: string }) {
  const pct = Math.max(0, Math.min(1, fill)) * 100;
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path d={PATH} className="fill-line" />
      <clipPath id={id}>
        <rect x="0" y="0" width={`${pct}%`} height="20" />
      </clipPath>
      <path d={PATH} className="fill-leaf-500" clipPath={`url(#${id})`} />
    </svg>
  );
}

export function Stars({ value = 5, className, label }: StarsProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={label ?? `Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} fill={value - i} id={`star-${value}-${i}`} />
      ))}
    </span>
  );
}
