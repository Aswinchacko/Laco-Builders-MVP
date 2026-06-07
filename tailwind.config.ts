import type { Config } from "tailwindcss";

/**
 * Design tokens are traceable to Laco Builders' brand + the reference direction:
 * - "forest" : heritage deep teal-green (#1F4A45) — trust, the dark immersive hero
 * - "leaf"   : the firm's own brand green (#48A73F), brightened — eco-build, energy, CTAs
 * - warm neutral scale — paper-like, residential, not corporate-cold
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F4A45",
          50: "#EEF3F2",
          100: "#D6E2DF",
          600: "#1F4A45",
          700: "#173A36",
          800: "#102825",
          900: "#081513",
        },
        leaf: {
          DEFAULT: "#5AAE3A",
          50: "#EEF7E8",
          100: "#D6ECC6",
          400: "#7AC44F",
          500: "#5AAE3A",
          600: "#48872D",
          700: "#376823",
        },
        paper: "#FAF8F4",
        surface: "#FFFFFF",
        line: "#E5E0D8",
        ink: {
          DEFAULT: "#1A1C1B",
          soft: "#5C5A54",
        },
        success: "#2E7D5B",
        warning: "#B07A1F",
        error: "#C0392B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "64px",
        "3xl": "96px",
        "4xl": "128px",
        section: "clamp(64px, 8vw, 120px)",
      },
      maxWidth: {
        content: "1200px",
        prose: "65ch",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
        xslow: "800ms",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,40,37,0.04), 0 8px 24px -12px rgba(16,40,37,0.18)",
        lift: "0 2px 4px rgba(16,40,37,0.05), 0 24px 48px -20px rgba(16,40,37,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
