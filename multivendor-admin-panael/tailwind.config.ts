import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Custom breakpoint for extra small devices (phones)
        sm: "480px", // Custom small devices (larger phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Larger tablets/small desktops
        xl: "1280px", // Custom large screens (laptops/desktops)
        "2xl": "1536px", // Very large screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
