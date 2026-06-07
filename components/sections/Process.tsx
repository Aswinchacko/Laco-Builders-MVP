"use client";

import { useEffect, useRef } from "react";
import { process } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/**
 * PURPOSE: orientation — a connector line draws as you scroll, signalling that
 * the four steps are one sequential journey, not four separate offers.
 * GSAP + ScrollTrigger are imported dynamically and lazy-initialised on mount,
 * and skipped entirely under prefers-reduced-motion.
 */
export function Process() {
  const lineRef = useRef<SVGPathElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const path = lineRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    if (reduce) {
      path.style.strokeDashoffset = "0";
      return;
    }

    path.style.strokeDashoffset = `${length}`;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        });
      }, wrap);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="process" className="section-y bg-paper">
      <div className="container-px">
        <SectionHeading
          eyebrow="How it works"
          title="From site visit to handover in four steps"
          intro="A deliberately short process. Each step has a clear owner and a clear thing you approve."
          align="center"
        />

        <div ref={wrapRef} className="relative mt-14">
          {/* Connector — horizontal on desktop, hidden on mobile stack */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-2 w-full lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 4 H960"
              stroke="#E5E0D8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              ref={lineRef}
              d="M40 4 H960"
              stroke="#B5532E"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {process.map((step, i) => (
              <Reveal key={step.no} as="li" delay={i * 0.08}>
                <div className="relative">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-line bg-surface font-display text-xl text-forest shadow-soft">
                    {step.no}
                  </span>
                  <h3 className="mt-5 text-h3">{step.title}</h3>
                  <p className="mt-2 text-body text-ink-soft">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
