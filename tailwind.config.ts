import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          navy: "var(--color-industrial-navy)",
          charcoal: "var(--color-charcoal)",
          blue: "var(--color-precision-blue)",
          orange: "var(--color-industrial-orange)"
        },
        neutral: {
          soft: "var(--color-soft-white)",
          light: "var(--color-light-gray)",
          border: "var(--color-border-gray)",
          muted: "var(--color-muted-text)",
          card: "var(--color-card-background)"
        },
        ink: "var(--color-charcoal)",
        midnight: "var(--color-industrial-navy)",
        steel: "var(--color-precision-blue)",
        flare: "var(--color-industrial-orange)",
        cloud: "var(--color-soft-white)",
        line: "var(--color-border-gray)"
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)"
      },
      fontSize: {
        "display-industrial": [
          "var(--text-h1)",
          { lineHeight: "var(--leading-h1)", letterSpacing: "var(--tracking-tight)" }
        ],
        "section-title": [
          "var(--text-h2)",
          { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-tight)" }
        ],
        "card-title": [
          "var(--text-h3)",
          { lineHeight: "var(--leading-heading)" }
        ],
        "body-large": [
          "var(--text-body-large)",
          { lineHeight: "var(--leading-body-large)" }
        ],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        small: ["var(--text-small)", { lineHeight: "var(--leading-small)" }]
      },
      borderRadius: {
        industrial: "var(--radius-industrial)",
        control: "var(--radius-control)"
      },
      boxShadow: {
        industrial: "var(--shadow-industrial)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)"
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
