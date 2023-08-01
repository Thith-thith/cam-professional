module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "#3674B7",
      danger: "#de1414",
      secondary: "#E11D48",
      accent: "#1dcdbc",
      neutral: "#2b3440",
      "base-100": "#F5F5F5",
      "base-200": "#fff",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
  darkMode: "class",
};
