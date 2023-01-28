/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


/*JIT is just in time compilation, faster CSS in pre production but maybe change in post production */
/*extending the them to include a primary and secondary color and dimWhite and dimBlue */
// content is what files to process, mode is how tailwind generates css 
// theme extends into Poppins font
// module.exports node js way of exporting in cjs format
// screens, different sizes for viewer's device, tailwind will config to it depending the width of viewers device, breakpoints
