import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  extend: {
    colors: {
        primary: '#6155F5',
        secondary: '#0088FF',
        background: '#e5e3ff',
    }
  }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
