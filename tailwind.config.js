/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pattern": "url('public/images/footer-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
