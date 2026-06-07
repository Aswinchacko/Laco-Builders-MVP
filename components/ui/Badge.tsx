import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf-50 px-3.5 py-1.5 text-small font-medium uppercase tracking-[0.12em] text-leaf-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
