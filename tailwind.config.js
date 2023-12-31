/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#515056",
      grey: "#eee",
      white: "#fefefe",
      main: "#2a4c7c",
      second: "#DF060A",
    },
    extend: {
      fontFamily: {
        main: ["Saira Semi Condensed", "sans-serif"],
        second: ["Lato", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
};
