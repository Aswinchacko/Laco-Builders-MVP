"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site, whatsappHref } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Light treatment over the dark hero; solid bar once scrolled.
  const dark = !scrolled && !open;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-base ease-out",
        // No backdrop-blur while the menu is open: backdrop-filter makes the
        // header a containing block for fixed children, which would trap the
        // full-screen menu inside the header box.
        scrolled && !open
          ? "border-b border-line/70 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <Logo dark={dark} />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-lg font-semibold transition-colors duration-base",
                dark ? "text-paper" : "text-forest",
              )}
            >
              Laco Builders
            </span>
            <span
              className={cn(
                "text-[11px] uppercase tracking-[0.18em] transition-colors duration-base",
                dark ? "text-paper/70" : "text-ink-soft",
              )}
            >
              & LacoCina Interiors
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative text-small font-medium transition-colors duration-fast",
                    dark
                      ? "text-paper/85 hover:text-paper"
                      : "text-forest/80 hover:text-forest",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-leaf-400 transition-transform duration-base ease-spring group-hover:scale-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={`tel:${site.phones[0].tel}`}
            variant={dark ? "outline-light" : "ghost"}
            size="md"
          >
            {site.phones[0].label}
          </Button>
          <Button href="#contact" variant="primary" size="md">
            Book a consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-50 grid h-11 w-11 place-items-center rounded-full border transition-colors duration-base lg:hidden",
            open
              ? "border-transparent bg-forest text-paper"
              : dark
                ? "border-paper/30 text-paper"
                : "border-forest/20 text-forest",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-base ease-out",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-base ease-out",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-base ease-out",
                open && "top-1.5 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>
    </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[45] bg-paper lg:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-px flex h-full flex-col pt-24 pb-10">
              <nav aria-label="Mobile" className="flex-1">
                <ul className="flex flex-col gap-1">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-line py-4 font-display text-3xl text-forest"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3">
                <Button href="#contact" size="lg" onClick={() => setOpen(false)}>
                  Book a consultation
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button href={`tel:${site.phones[0].tel}`} variant="secondary" size="lg">
                    Call
                  </Button>
                  <Button href={whatsappHref()} variant="secondary" size="lg">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Logo({ dark }: { dark: boolean }) {
  return (
    <span
      className={cn(
        "grid h-10 w-10 place-items-center rounded-xl transition-colors duration-base",
        dark ? "bg-leaf text-forest-900" : "bg-forest text-paper",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 20V9l8-5 8 5v11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
