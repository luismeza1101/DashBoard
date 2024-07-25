/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#aeb3ca',
        'facebook': '#218be8',
        'twitter': '#299ce1',
        'youtube': '#b40a2e',
        'fondoCard': '#f0f3fa',
        'fondoCardHover': '#e1e3f0',
        'fondoCardDark': '#252b43',
        'fondoCardDarkHover': '#333a56',
        'greenUp': '#47b095',
        'redDown': '#ca545a',
        'darkmode': '#1d2029',
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(to right, #f5c071, #b10b2d)' ,
        'toggle': 'linear-gradient(to right, #3d90df, #4ef28d)' 
      },
      fontFamily: {
        Inter: ['Inter']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

