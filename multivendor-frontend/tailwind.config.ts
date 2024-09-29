import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        footer: "var(--footer)",
      },
      backgroundImage: {
        "footer-img": "url('/assets/image/footer/footer-bg.png')",
        "deals-img": "url('/assets/image/tody-deals-banner.png')",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
