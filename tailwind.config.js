// tailwind.config.js
export default {
  darkMode: "class", // Habilitar modo oscuro
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Fira Code", "monospace"],
      },
      colors: {
        brandDark: "#081C15",
        brandGreen: "#4CAF50",
        brandYellow: "#FFC107",
      },
    },
  },
  plugins: [],
};

