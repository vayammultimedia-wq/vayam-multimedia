import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(to right, #4F46E5, #E11D48)", // Custom gradient for brand
      },
      colors: {
        'primary-light': '#6366F1', // Indigo 500
        'primary-dark': '#4F46E5',  // Indigo 600
        'secondary-light': '#F472B6', // Pink 400
        'secondary-dark': '#EC4899',  // Pink 500
        'background-dark': '#0A0A0A', // Near black
        'text-light': '#E5E7EB',    // Gray 200
        'text-dark': '#1F2937',     // Gray 800
      },
    },
  },
  plugins: [],
};
export default config;
