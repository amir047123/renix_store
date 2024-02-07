/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#80b435",
        secondary: "#ed6663",
        textColor: "#131e2c",
      },
      fontFamily: {
        rubic: ["Rubik", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0 10px 20px -5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
