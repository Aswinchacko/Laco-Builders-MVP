import { site, whatsappHref } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { LazyMap } from "@/components/sections/LazyMap";

export function Contact() {
  return (
    <section id="contact" className="section-y bg-surface">
      <div className="container-px">
        <SectionHeading
          eyebrow="Start a consultation"
          title="Tell us about your site"
          intro="Send the brief and we'll arrange a visit, talk through what's realistic, and come back with an honest estimate and timeline."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <ul className="grid gap-4 rounded-card border border-line bg-paper p-6 sm:p-7">
                <ContactRow label="Call us" lines={site.phones.map((p) => ({ text: p.label, href: `tel:${p.tel}` }))} icon="phone" />
                <ContactRow label="Email" lines={[{ text: site.email, href: `mailto:${site.email}` }]} icon="mail" />
                <ContactRow label="WhatsApp" lines={[{ text: "Message our team", href: whatsappHref() }]} icon="chat" external />
                <ContactRow
                  label="Visit"
                  lines={[
                    { text: site.address.street },
                    { text: `${site.address.locality} – ${site.address.postalCode}` },
                  ]}
                  icon="pin"
                />
                <ContactRow label="Hours" lines={[{ text: site.hours }]} icon="clock" />
              </ul>

              <div className="overflow-hidden rounded-card border border-line">
                <LazyMap />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const icons = {
  phone: <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2z" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  chat: <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />,
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </>
  ),
};

interface ContactRowProps {
  label: string;
  lines: { text: string; href?: string }[];
  icon: keyof typeof icons;
  external?: boolean;
}

function ContactRow({ label, lines, icon, external }: ContactRowProps) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-50 text-forest">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icons[icon]}
        </svg>
      </span>
      <div>
        <p className="text-small font-medium uppercase tracking-[0.12em] text-ink-soft">
          {label}
        </p>
        <div className="mt-1 flex flex-col gap-0.5">
          {lines.map((line) =>
            line.href ? (
              <a
                key={line.text}
                href={line.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-body text-forest transition-colors duration-fast hover:text-leaf-600"
              >
                {line.text}
              </a>
            ) : (
              <span key={line.text} className="text-body text-ink">
                {line.text}
              </span>
            ),
          )}
        </div>
      </div>
    </li>
  );
}
