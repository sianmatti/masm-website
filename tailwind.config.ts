import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#000000",
        charcoal: "#111111",
        paper: "#f5f5f5",
        line: "rgb(17 17 17 / 0.14)",
        muted: "rgb(17 17 17 / 0.62)",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Arial", "sans-serif"],
        mono: ["var(--font-sora)", "Arial", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 6.5vw, 6.75rem)", { lineHeight: "0.96", letterSpacing: "-0.055em" }],
        "heading-1": ["clamp(2.75rem, 5.4vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.05em" }],
        "heading-2": ["clamp(2.125rem, 4vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "heading-3": ["clamp(1.5rem, 2.2vw, 2.125rem)", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        lead: ["clamp(1.0625rem, 1.4vw, 1.25rem)", { lineHeight: "1.65", letterSpacing: "-0.012em" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        label: ["0.6875rem", { lineHeight: "1.35", letterSpacing: "0.16em" }],
      },
      spacing: {
        "section-sm": "clamp(4rem, 7vw, 6.5rem)",
        section: "clamp(5rem, 9vw, 8rem)",
        "section-lg": "clamp(6rem, 11vw, 10rem)",
        gutter: "clamp(1.25rem, 4vw, 3.5rem)",
        "content-gap": "clamp(2.5rem, 5vw, 5rem)",
      },
      maxWidth: {
        site: "90rem",
        reading: "42rem",
        copy: "34rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.04), 0 18px 44px rgb(0 0 0 / 0.06)",
        modal: "0 24px 80px rgb(0 0 0 / 0.22)",
      },
      animation: {
        "slow-spin": "spin 18s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
