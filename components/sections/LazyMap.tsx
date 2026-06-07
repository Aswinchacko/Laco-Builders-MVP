"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/**
 * The Google Maps iframe is heavy and third-party. We only mount it once it
 * scrolls into view, keeping it off the critical path and protecting INP/LCP.
 */
export function LazyMap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return (
    <div ref={ref} className="aspect-[4/3] w-full bg-forest-50">
      {show ? (
        <iframe
          src={site.mapEmbed}
          title={`${site.name} location on Google Maps`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-small text-ink-soft">
          Loading map&hellip;
        </div>
      )}
    </div>
  );
}
