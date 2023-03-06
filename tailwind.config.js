/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-circle)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        pb: {
          900: "#1f1d21",
          800: "#1F1D20",
          100: "#f5f5f5",
        },
        pr: {
          500: "#bc0031",
        },
      },
      boxShadow: {
        "7xl": "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
