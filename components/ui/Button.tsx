import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-base ease-out focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf text-forest-900 hover:bg-leaf-400 shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-forest border border-forest/25 hover:border-forest/60 hover:bg-forest-50",
  ghost: "bg-transparent text-forest hover:text-leaf-600",
  "outline-light":
    "bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-small",
  lg: "px-7 py-3.5 text-body",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
