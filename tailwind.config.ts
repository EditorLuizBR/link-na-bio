import type { Config } from "tailwindcss";

// Paleta do site da LCX (css/styles.css do lcx-site)
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        panel: "#0b0b0d",
        muted: "#8a8a92",
        faint: "#5c5c63",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        bio: "436px",
      },
    },
  },
  plugins: [],
};

export default config;
