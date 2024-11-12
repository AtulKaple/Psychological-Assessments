/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile: "320px",
        tablet: "600px",
        laptop: "1025px",
        desktop: "1280px",
      },
      fontFamily: {
        iskry: ["Iskry", "sans-serif"],
        rules: ["Rules", "sans-serif"],
        stratos: ["Stratos", "sans-serif"],
      },
    },
  },
  plugins: [],
};
