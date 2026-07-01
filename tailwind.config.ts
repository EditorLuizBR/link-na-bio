import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        lime: {
          DEFAULT: "#BEF264",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        bio: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
