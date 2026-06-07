import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "1,500+", label: "Projects delivered" },
  { value: "25 yrs", label: "Since 2001" },
  { value: "4.8★", label: "Across 48 reviews" },
  { value: "5", label: "Districts served" },
];

export function TrustBar() {
  return (
    <section aria-label="Track record" className="border-y border-line bg-surface">
      <div className="container-px grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="text-center">
              <p className="font-display text-3xl text-forest sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-small uppercase tracking-[0.12em] text-ink-soft">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="sr-only">
        {site.legalName} has completed over {site.projectsCompleted} projects across{" "}
        {site.serviceAreas.join(", ")}.
      </p>
    </section>
  );
}
