/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    backgroundImage: {
      blur: 'url(/src/assets/blur-background.png)',
      igniteLabWallpaper: 'url(/src/assets/ignite-lab-wallpaper.png)',
      mainPage: 'url(/src/assets/SVG/mainBG.svg)'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920',
      // => @media (min-width: 1920px) { ... }

      '4xl': '2600'
      // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    colors:{
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        black: {
          900: '#000000'
        },
        white: {
          100: '#FFFFFF'
        }
      }
    }
  },
  plugins: [],
}
