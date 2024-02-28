/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "#030E21",
        navbar: "#021122",
      },

      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        lexend: ["Lexend Deca"],
      },
    },
  },
  plugins: [],
};
