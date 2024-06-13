/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FBF6FC', //off white 
        secondary: {
          DEFAULT: '#FE504F', //creamcicle red
          100: '#FE7372' //dark mode version
        },
        firstAccent: {
          DEFAULT: '#FF9841', //creamcicle orange
          100: '#FFAD67' //dark mode version
        },
        secondAccent: {
          DEFAULT: '#004DFF', //vibrant blue
          100: '#437CFF' //dark mode version
        },
        thirdAccent: {
          DEFAULT: '#A201FF', // grape purple
          100: '#BE4CFF' //dark mode version
        },
        black: {
          DEFAULT: '#111441',
          100: '#383F66'
        },
        white: '#fff',
        lightGrey: '#ADB3BC',
        darkGrey: '#455370'
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

