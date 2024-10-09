/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "557px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        prepulecolor: "#7963F0",
        textblckcolor: "#0D0A19",
        textwhitecolor: "#9A9EA7",
        graywhite: "#0D0A19",
        dipperple: "#0D0A19",

        // dark color
        bgcolorgreen: "#19362D",
        darkbgcolor: "#171212",
        darktextdipcolor: "#CBC9C9",
        darktextcolor: "#868383",
        darkcofeecolor: "#292424",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    container: {
      center: true,
      DEFFOULT: "10px",
    },
  }

};
