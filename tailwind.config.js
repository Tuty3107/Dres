/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        footerColor: "#12171b",
        serviceColor: "#424242",
        classColor: "#f4f4f4",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "5.25rem",
      },
      backgroundImage: {
        aboutus: "url('../public/images/aboutUs.jpg')",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      keyframes: {
        wiggle: {
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
      maxWidth: {
        "2/5": "80%",
      },
      backGroundColor: {
        overlayBg: "rgba(0, 0, 0, 0.8)",
      },
    },
  },
};
