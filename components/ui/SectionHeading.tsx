import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-prose",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="mb-3 text-small font-medium uppercase tracking-[0.16em] text-leaf-700">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="text-h2">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-body text-ink-soft">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
