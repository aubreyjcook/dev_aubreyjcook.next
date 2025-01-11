import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // black
        foreground: "#D3D3D3", // lightgray
      },
      fontFamily: {
        aldrich: ["Aldrich", "serif"],
        vt323: ["VT323", "serif"],
      },
      spacing: {
        72: '18rem', // Custom spacing value
      },
    },
  },
  plugins: [],
};
export default config;
