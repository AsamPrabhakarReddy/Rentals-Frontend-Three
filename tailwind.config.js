/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        mainColor: "rgb(99 102 241)",
        // mainColor: "#674cc4",
        headingColor: "#19191B",
        sideHeading: "#474749",
        termsParagraph: "text-sm text-blue-900",
        navColor: "rgba(255, 255, 255, 0.1)",
        whiteShade: "#e7e5df",
      },
    },
  },
  plugins: [],
};
