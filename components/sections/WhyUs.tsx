import Image from "next/image";
import { images } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "No blame gap",
    copy: "One team owns civil work and interiors. When something needs fixing, there's nobody to point at but us — so it gets fixed.",
  },
  {
    title: "Approved in 3D first",
    copy: "You see every room in 2D and 3D and sign off before we order or cut anything. The render is the contract.",
  },
  {
    title: "Eco-conscious by default",
    copy: "Better-insulating AAC blockwork and considered material choices — green building where it genuinely improves the home.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="section-y bg-surface">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[5/6] overflow-hidden rounded-[20px] shadow-soft">
            <Image
              src={images.luxury}
              alt="Detailed living-room interior delivered by LacoCina in Kerala"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Laco"
            title="What 1,500 projects taught us to do differently"
            intro="The recurring complaint about Kerala builds is coordination. We removed the seam most firms hide behind."
          />
          <ul className="mt-10 space-y-8">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <li className="flex gap-5">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-leaf/40 font-display text-small text-leaf-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-h3">{r.title}</h3>
                    <p className="mt-1.5 text-body text-ink-soft">{r.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
