/**
 * Single source of truth for Laco Builders business data.
 * Pulled directly from the live site / Google Business profile so every
 * number, address and link on the page is verifiable.
 */

export const site = {
  name: "Laco Builders",
  legalName: "Laco Builders and Interior Designers",
  interiorsBrand: "LacoCina Interiors",
  tagline: "Built and finished by one team since 2001",
  url: "https://lacobuilders.com",
  foundedYear: 2001,
  projectsCompleted: 1500,
  category: "Home builder",
  rating: 4.8,
  reviewsCount: 48,
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Laco+Builders+Kottayam",
  hours: "Mon–Sat, opens 10:00 AM",
  serviceAreas: ["Kottayam", "Ernakulam", "Kollam", "Pathanamthitta", "Idukki"],
  address: {
    street: "C-3, Pulickal Trade Centre, MC Road, Near Nagampadam Bridge",
    locality: "Kottayam",
    region: "Kerala",
    postalCode: "686006",
    country: "IN",
  },
  geo: { lat: 9.599621619798295, lng: 76.52933983794158 },
  phones: [
    { label: "9446069612", tel: "+919446069612" },
    { label: "7907036190", tel: "+917907036190" },
  ],
  whatsapp: {
    number: "917907036190",
    prefill:
      "Hello Laco Builders, I'd like to discuss a construction / interior project.",
  },
  email: "info@lacobuilders.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7867.953189670785!2d76.5231841!3d9.5972835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062b7306ef2ecb%3A0xddc96f4be6151cce!2spulickal%20trade%20center!5e0!3m2!1sen!2sin!4v1652281777236!5m2!1sen!2sin",
  socials: {
    facebook: "https://www.facebook.com/lacobuilders",
    instagram: "https://www.instagram.com/laco.builders/",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com/watch?v=oNgo6CSxCdc",
  },
} as const;

export function whatsappHref(message: string = site.whatsapp.prefill): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

const IMG = "https://lacobuilders.com/wp-content/uploads";

/** Real project photography from the company's own library. */
export const images = {
  hero: `${IMG}/2024/09/stylish-living-room-interior-design-1.jpg`,
  heroBlur:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNkOWQyYzgiLz48L3N2Zz4=",
  livingEthnic: `${IMG}/elementor/thumbs/interior-design-of-ethnic-living-room-quiu321q4mthnzkwj4j5upoci9au8gty86i5fvkz34.jpg`,
  livingModern: `${IMG}/elementor/thumbs/interior-design-of-modern-living-room-2-quiu3ai9u552kh8m5q6sz5jhuq555qrj9cdird8fj4.jpg`,
  dining: `${IMG}/elementor/thumbs/dining-room-interior-design-quiu3e9mlha7ux35jrtb94lc89mm0j6gluzgoh2uu8.jpg`,
  luxury: `${IMG}/elementor/thumbs/luxury-interior-design-quiu4q7c33ep01q8n6od0s2vnpe69v3pgev0w55ki8.jpg`,
  elegant: `${IMG}/elementor/thumbs/elegant-living-room-interior-design-quiu54az4jrotxbc642d2jluigqgbnu7ma06keqns0.jpg`,
  stylish: `${IMG}/elementor/thumbs/stylish-living-room-interior-design-4-quiu4ex9t2z94q6mh1su6uxcj2xrphuxev174tmakw.jpg`,
  modularKitchen: `${IMG}/2022/05/modular_kitchen-1024x559.jpg`,
  ceiling: `${IMG}/2022/05/ceiling-09-1-768x576-1.jpg`,
  outdoor: `${IMG}/2022/05/home-design-1024x680.jpg`,
} as const;

export type Service = {
  title: string;
  blurb: string;
  icon: "drafting" | "kitchen" | "ceiling" | "renovate" | "block" | "lighting";
};

export const services: Service[] = [
  {
    title: "Turnkey Construction",
    blurb:
      "Residential, commercial and industrial builds managed end-to-end — architectural planning through handover.",
    icon: "drafting",
  },
  {
    title: "Interior Design & Fit-Out",
    blurb:
      "LacoCina plans and finishes your space, then our own carpenters build the furniture in-house.",
    icon: "kitchen",
  },
  {
    title: "Modular Kitchens",
    blurb:
      "Approved in 2D/3D before a single panel is cut, so the kitchen you sign off on is the kitchen you get.",
    icon: "kitchen",
  },
  {
    title: "Gypsum & Ceiling Work",
    blurb:
      "False ceilings, coves and profile lighting detailed to suit Kerala's humidity and your room heights.",
    icon: "ceiling",
  },
  {
    title: "Renovation & Remodelling",
    blurb:
      "Bringing older Kottayam homes and offices up to current standards without tearing everything down.",
    icon: "renovate",
  },
  {
    title: "AAC Block Supply",
    blurb:
      "Lighter, better-insulated blockwork supplied direct — part of our eco-conscious building approach.",
    icon: "block",
  },
];

export type Step = { no: string; title: string; copy: string };

export const process: Step[] = [
  {
    no: "01",
    title: "Consultation & site visit",
    copy: "We walk your site, understand the brief and budget, then tell you honestly what's realistic.",
  },
  {
    no: "02",
    title: "2D & 3D design approval",
    copy: "You review every room in 3D and approve the plan before any material is ordered or cut.",
  },
  {
    no: "03",
    title: "In-house build",
    copy: "One team handles civil work and interiors — no gaps between contractor and designer.",
  },
  {
    no: "04",
    title: "Handover & support",
    copy: "We hand over a finished space and stay reachable for maintenance long after move-in.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

/** Verbatim Google reviews (4.8★, 48 reviews). Lightly trimmed for length. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We chose Laco Builders for our home project in Kottayam, and they truly live up to the title of the best builders in Kerala. From the initial design phase to the final handover, the entire process was seamless.",
    name: "Pretty Helen Jyothis",
    context: "Home project · Kottayam",
  },
  {
    quote:
      "The team showcased impeccable taste, attention to detail, and a keen understanding of my vision. The experience exceeded my expectations.",
    name: "Kenson K Kunjumon",
    context: "Interior design · Local Guide",
  },
  {
    quote:
      "Good service and better satisfaction from the customer side. They were on time, within the budget, and listened to our needs.",
    name: "Jyobzz",
    context: "Verified Google review",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you handle both construction and interiors, or just one?",
    a: "Both — under one team. Laco Builders runs the civil construction; LacoCina Interiors handles design, modular kitchens and custom furniture. That removes the usual gap between your contractor and your designer.",
  },
  {
    q: "Can I see the design before you start building?",
    a: "Yes. We model your space in 2D and 3D and walk you through every detail. Nothing is ordered, cut or built until you approve the design.",
  },
  {
    q: "How long has Laco Builders been working in Kerala?",
    a: "Since 2001 — over 1,500 completed projects across residential, commercial and industrial work.",
  },
  {
    q: "Which areas do you cover?",
    a: "We're based in Kottayam and actively take projects across Ernakulam, Kollam, Pathanamthitta and Idukki.",
  },
  {
    q: "What does 'eco-conscious construction' actually mean here?",
    a: "Practical green building — choices like AAC blockwork for better insulation, considered material selection and site management, applied where they genuinely improve the building rather than as a sticker.",
  },
  {
    q: "How do I get a quote or start a project?",
    a: "Call, WhatsApp or send the enquiry form. We'll arrange a site visit, understand your scope, and come back with a realistic estimate and timeline.",
  },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Laco", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;
