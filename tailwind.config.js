module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f5f2e9",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1700px", // default 1536px --> 1700px for projects nav
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
