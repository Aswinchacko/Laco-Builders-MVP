"use client";

import { useEffect, useState } from "react";
import { site, whatsappHref } from "@/lib/site";

/** Persistent quick-contact for mobile — mirrors how this business already
 *  converts (call + WhatsApp). Appears after the hero to avoid clutter. */
export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-base ease-out ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lift transition-transform duration-base ease-spring hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.95 1.36-.5.04-.96.22-3.24-.68-2.74-1.08-4.48-3.88-4.62-4.06-.13-.18-1.1-1.47-1.1-2.8 0-1.34.7-2 .95-2.27.24-.27.53-.34.7-.34l.5.01c.16.01.38-.06.6.46.23.55.78 1.9.85 2.04.07.14.11.3.02.48-.09.18-.13.29-.27.45-.13.16-.28.36-.4.48-.13.13-.27.28-.12.54.16.27.7 1.15 1.5 1.86 1.04.93 1.92 1.22 2.18 1.36.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.36-.22.6-.13.25.09 1.58.74 1.85.88.27.13.45.2.52.31.07.11.07.64-.17 1.32z" />
        </svg>
      </a>
      <a
        href={`tel:${site.phones[1]?.tel ?? site.phones[0]!.tel}`}
        aria-label="Call Laco Builders"
        className="grid h-14 w-14 place-items-center rounded-full bg-forest p-3.5 text-paper shadow-lift transition-transform duration-base ease-spring hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4.5 5a2 2 0 0 1 2-2z" />
        </svg>
      </a>
    </div>
  );
}
