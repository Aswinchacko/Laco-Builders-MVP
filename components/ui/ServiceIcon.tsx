import type { Service } from "@/lib/site";

/**
 * Line icons drawn specifically for each Laco service — no generic
 * clip-art. Stroke-based to sit lightly inside the cards.
 */
const paths: Record<Service["icon"], JSX.Element> = {
  drafting: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20V7l5-3 5 3v13" />
      <path d="M10 20v-5h4v5" />
      <path d="M9.5 9.5l5 0" />
    </>
  ),
  kitchen: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 12h16" />
      <path d="M9 7.5v1.5M15 7.5v1.5" />
      <path d="M8 16h2M14 16h2" />
    </>
  ),
  ceiling: (
    <>
      <path d="M3 6h18" />
      <path d="M6 6v3M12 6v3M18 6v3" />
      <circle cx="9" cy="14" r="1.2" />
      <circle cx="15" cy="14" r="1.2" />
      <path d="M9 15.2v3M15 15.2v3" />
    </>
  ),
  renovate: (
    <>
      <path d="M14 4l6 6-9.5 9.5L4 21l1.5-6.5L14 4z" />
      <path d="M12 6l6 6" />
    </>
  ),
  block: (
    <>
      <rect x="3" y="5" width="8" height="6" rx="0.8" />
      <rect x="13" y="5" width="8" height="6" rx="0.8" />
      <rect x="8" y="13" width="8" height="6" rx="0.8" />
    </>
  ),
  lighting: (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.5 1 .5 1.6V17h6v-1.5c0-.6 0-1.2.5-1.6A6 6 0 0 0 12 3z" />
      <path d="M9.5 20h5M10.5 22h3" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
