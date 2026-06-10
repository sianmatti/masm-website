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
        display: ["clamp(3.5rem, 7.5vw, 7.5rem)", { lineHeight: "0.9", letterSpacing: "-0.065em" }],
        "heading-1": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "0.94", letterSpacing: "-0.055em" }],
        "heading-2": ["clamp(2.25rem, 4.4vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        "heading-3": ["clamp(1.5rem, 2.4vw, 2.25rem)", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        lead: ["clamp(1.0625rem, 1.5vw, 1.25rem)", { lineHeight: "1.7", letterSpacing: "-0.015em" }],
        body: ["1rem", { lineHeight: "1.75" }],
        small: ["0.875rem", { lineHeight: "1.65" }],
        label: ["0.6875rem", { lineHeight: "1.35", letterSpacing: "0.16em" }],
      },
      spacing: {
        "section-sm": "clamp(4.5rem, 8vw, 7rem)",
        section: "clamp(5.5rem, 10vw, 9rem)",
        "section-lg": "clamp(6.5rem, 12vw, 11rem)",
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
