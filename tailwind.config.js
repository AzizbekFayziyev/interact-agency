/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C361F0",
        primaryLight: "#d274fd",
        universal: "#DBE4EE",
      },
    },
  },
  plugins: [],
};
