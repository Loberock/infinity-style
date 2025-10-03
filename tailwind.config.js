/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "blue-glow": "0 0 20px rgba(13, 110, 253, 0.35)", // sombra azul suave
        "blue-glow-hover": "0 0 25px rgba(13, 110, 253, 0.55)", // sombra azul más fuerte
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.4)", // dorado suave
        "gold-glow-hover": "0 0 25px rgba(212, 175, 55, 0.7)", // dorado más fuerte
      },
    },
  },
  plugins: [],
};
