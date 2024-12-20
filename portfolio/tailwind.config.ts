import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1e2025",
        foreground: "var(--foreground)",
        textcolor: "#00c2b8",
        anothertextcolor: "#ccd6f6",
        lighttextcolor:  '#8892b0'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        heading: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        button: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
