import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <section id="services" className="section-y bg-paper">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we do"
          title="Two divisions, one point of contact"
          intro="Civil construction and LacoCina interiors run as one operation — so the people who pour your slab are talking to the people fitting your kitchen."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} as="li" delay={(i % 3) * 0.06}>
              <article className="group h-full rounded-card border border-line bg-surface p-7 transition-all duration-base ease-out hover:-translate-y-1 hover:border-forest/30 hover:shadow-soft">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-forest-50 text-forest transition-colors duration-base group-hover:bg-forest group-hover:text-paper">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="mt-5 text-h3">{service.title}</h3>
                <p className="mt-2.5 text-body text-ink-soft">{service.blurb}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
