/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17252a",
        muted: "#536369",
        line: "#dbe4e3",
        paper: "#f5f8f6",
        teal: "#0e756d",
        dark: "#10262b",
        accent: "#8de1d0",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
