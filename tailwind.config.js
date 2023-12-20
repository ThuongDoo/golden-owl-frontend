/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#FFFFFF",
        customBlack: "#303841",
        customGray: "#777777",
        customYellow: "#F6C90E",
      },
    },
  },

  plugins: [],
};
