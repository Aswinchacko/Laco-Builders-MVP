import Link from "next/link";
import { nav, site, whatsappHref } from "@/lib/site";
import { Social } from "@/components/ui/Social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-paper">
      <div className="container-px grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl text-paper">Laco Builders</p>
          <p className="mt-1 text-small uppercase tracking-[0.18em] text-paper/50">
            & LacoCina Interiors
          </p>
          <p className="mt-5 max-w-xs text-body text-paper/70">
            One team for construction and interiors in Kottayam since {site.foundedYear}.
            Over {site.projectsCompleted.toLocaleString()} projects across central Kerala.
          </p>
          <Social className="mt-6 flex gap-3" />
        </div>

        <nav aria-label="Footer">
          <h2 className="text-small font-semibold uppercase tracking-[0.16em] text-paper/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body text-paper/80 transition-colors duration-fast hover:text-leaf-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-small font-semibold uppercase tracking-[0.16em] text-paper/50">
            Contact
          </h2>
          <address className="mt-4 space-y-3 not-italic text-body text-paper/80">
            <p>{site.address.street}</p>
            <p>
              {site.address.locality} &ndash; {site.address.postalCode}, {site.address.region}
            </p>
            <p className="flex flex-wrap gap-x-3">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="transition-colors duration-fast hover:text-leaf-400"
                >
                  {p.label}
                </a>
              ))}
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-fast hover:text-leaf-400"
              >
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-fast hover:text-leaf-400"
              >
                WhatsApp us &rarr;
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-small text-paper/50 sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>Serving {site.serviceAreas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
