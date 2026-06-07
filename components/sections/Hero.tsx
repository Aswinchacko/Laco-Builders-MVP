"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";

/**
 * PURPOSE: orientation + hierarchy. An immersive dark hero (per the chosen
 * reference) places the promise over real work; a staggered entrance sets
 * reading order headline → promise → action the instant the page paints.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-forest-900 text-paper"
    >
      <Image
        src={images.hero}
        alt="Living room completed by Laco Builders in Kottayam"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={images.heroBlur}
        className="object-cover"
      />
      {/* Teal→ink scrim so type stays legible without flattening the photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/80 to-forest-900/35"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/55 to-transparent"
      />

      <div className="container-px relative z-10 w-full pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/10 px-4 py-1.5 text-small font-medium backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-leaf-400" />
            Kottayam, Kerala · Building since {site.foundedYear}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-display font-semibold tracking-tight text-paper"
          >
            Built and finished
            <br className="hidden sm:block" /> by{" "}
            <span className="text-leaf-400">one team</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-body text-paper/80"
          >
            Most Kerala homes stall in the gap between the contractor and the
            designer. We close it — civil work and interiors delivered by one
            accountable team, signed off in 3D before anything is built.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg">
              Book a consultation
            </Button>
            <Button href="#work" variant="outline-light" size="lg">
              View our work
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-paper/15 pt-6"
          >
            <div className="flex items-center gap-3">
              <Stars value={site.rating} />
              <span className="text-small text-paper/80">
                <span className="font-semibold text-paper">{site.rating}</span> ·{" "}
                {site.reviewsCount} Google reviews
              </span>
            </div>
            <span className="hidden h-4 w-px bg-paper/20 sm:block" />
            <p className="text-small text-paper/80">
              <span className="font-semibold text-paper">
                {site.projectsCompleted.toLocaleString()}+
              </span>{" "}
              projects across central Kerala
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
