/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#111827",
        lightGray: "#374151",
        light: "#f9fafb",
        semiLight: "#f3f4f6",
        blue: "#3b82f6",
      },
    },
  },
  plugins: [],
};
