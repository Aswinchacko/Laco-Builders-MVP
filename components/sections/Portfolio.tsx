import Image from "next/image";
import { images } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const work: { src: string; alt: string; label: string; className?: string }[] = [
  {
    src: images.livingModern,
    alt: "Modern living room interior designed and built by Laco Builders",
    label: "Modern living · Kottayam",
    className: "sm:row-span-2",
  },
  {
    src: images.modularKitchen,
    alt: "Modular kitchen manufactured in-house by LacoCina Interiors",
    label: "Modular kitchen",
  },
  {
    src: images.dining,
    alt: "Dining room interior by LacoCina",
    label: "Dining space",
  },
  {
    src: images.elegant,
    alt: "Elegant living room finished by Laco Builders",
    label: "Elegant living",
  },
  {
    src: images.ceiling,
    alt: "Gypsum false ceiling with profile lighting",
    label: "Ceiling & lighting",
  },
  {
    src: images.outdoor,
    alt: "Exterior of a residence built by Laco Builders in Kerala",
    label: "Exterior & build",
    className: "sm:col-span-2 lg:col-span-3",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="section-y bg-surface">
      <div className="container-px">
        <SectionHeading
          eyebrow="Recent work"
          title="Built, then finished — by us"
          intro="A sample from across residential and commercial projects in central Kerala. Every space here was both constructed and fitted out in-house."
        />

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {work.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 3) * 0.06}
              className={item.className ?? ""}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-slow ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 text-small font-medium text-paper">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
