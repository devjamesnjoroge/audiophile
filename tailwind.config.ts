import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#D87D4A',
        'secondary': '#101010',
        'accent': '#FBAF85',
        'white': '#FFFFFF',
        'light-grey': '#F1F1F1',
        'medium-grey': '#CFCFCF',
        'dark-grey': '#4C4C4C',
        'text-primary': '#FFFFFF',
        'text-secondary': '#101010',
        'text-grey': '#B3B3B3',
        'background-primary': '#F1F1F1',
        'background-secondary': '#101010',
        'border': '#CFCFCF',
      },
      height: {
        '98': '98vh', // Adds the class `h-85`
      },
    },
  },
  plugins: [],
};
export default config;
