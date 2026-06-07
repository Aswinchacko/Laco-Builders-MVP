import { site } from "@/lib/site";

type Key = keyof typeof site.socials;

const icons: Record<Key, JSX.Element> = {
  facebook: <path d="M14 8.5h2V5.7C15.5 5.6 14.7 5.5 13.8 5.5c-2 0-3.3 1.2-3.3 3.4V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.3c0-.6.3-.8 1-.8z" />,
  instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.4" cy="7.6" r="1" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
      <path d="M8 10v6M8 7.6v.01M11.5 16v-3.2c0-1 .8-1.8 1.8-1.8s1.7.8 1.7 1.8V16" />
    </>
  ),
  youtube: (
    <>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path d="M10.5 9.8l4 2.2-4 2.2z" />
    </>
  ),
};

const labels: Record<Key, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export function Social({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {(Object.keys(site.socials) as Key[]).map((key) => (
        <li key={key}>
          <a
            href={site.socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on ${labels[key]}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper/80 transition-colors duration-fast hover:border-leaf hover:text-leaf-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill={key === "facebook" || key === "youtube" ? "currentColor" : "none"}
              stroke={key === "instagram" || key === "linkedin" ? "currentColor" : "none"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
