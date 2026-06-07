import { testimonials, site } from "@/lib/site";
import { Stars } from "@/components/ui/Stars";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="reviews" className="section-y bg-forest text-paper">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <div className="max-w-prose">
              <p className="mb-3 text-small font-medium uppercase tracking-[0.16em] text-leaf-400">
                What clients say
              </p>
              <h2 className="text-h2 text-paper">
                {site.rating} out of 5, from the people we built for
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-paper/20 px-4 py-2 transition-colors duration-fast hover:border-paper/50"
            >
              <Stars value={site.rating} label={`Average ${site.rating} out of 5`} />
              <span className="text-small text-paper/80">
                {site.rating} · {site.reviewsCount} Google reviews
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          {featured ? (
            <Reveal>
              <figure className="flex h-full flex-col justify-between rounded-card border border-paper/15 bg-forest-800 p-8 sm:p-10">
                <blockquote className="font-display text-2xl leading-snug text-paper sm:text-3xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-leaf font-display text-forest-900">
                    {featured.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-medium text-paper">{featured.name}</span>
                    <span className="block text-small text-paper/60">
                      {featured.context}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ) : null}

          <div className="grid gap-5">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="rounded-card border border-paper/15 bg-forest-800/60 p-6">
                  <Stars value={5} className="mb-3" />
                  <blockquote className="text-body text-paper/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-small text-paper/60">
                    <span className="font-medium text-paper/90">{t.name}</span> ·{" "}
                    {t.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
