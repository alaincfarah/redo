import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#21a3a3",
          accent: "#f07c3e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
