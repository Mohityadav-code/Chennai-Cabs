/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "222831": "#222831",
        "393E46": "#393E46",
      },
      textColor: {
        "00ADB5": "#00ADB5",
        "EEEEEE": "#EEEEEE",
      },
    },
  },
  plugins: []
};
