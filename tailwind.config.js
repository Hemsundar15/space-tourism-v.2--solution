module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      transparent: "transparent",
      dark: "rgb(11, 13, 23)",
      primary: "rgb(208, 214, 249)",
      light: "rgb(255, 255, 255)",
    },
    fontSize: {
      nt: "1rem", //16px
      bt: "1.125rem", //18px
      sb1: "1.75rem", //28px
      sb2: "0.875rem", //14px

      h1: "9.375rem", //150px
      h2: "6.25rem", //100px
      h3: "3.5rem", //56px
      h4: "2rem", //32px
      h5: "1.75rem", //28px
    },
    fontFamily: {
      sans: ["Barlow Condensed", "sans-serif"],
      serif: ["Bellefair", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
