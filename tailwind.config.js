/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["'Roboto', sans-serif"],
        Montserrat: ["'Montserrat', sans-serif"],
      },
      colors: {
        'gray-50': '#F7F7F7',
        'gray-100': '#E6E6E6',
        'gray-200': '#CCC',
        'gray-300': '#B2B2B2',
        'gray-400': '#999',
        'gray-500': '#808080',
        'gray-600': '#666',
        'gray-700': '#4D4D4D',
        'gray-800': '#333',
        'gray-900': '#1A1A1A',
        black: '#000000',
        white: '#FFFFFF',

        primary: {
          blue: {
            600: '#008ED5',
            700: '#016AA3',
            900: '#0B4B6F',
            100: '#E0F2FE',
            900 : '#c1f0e8'
          },
        },
        typography: {
          white: '#FFF',
          light: '#CCC',
          medium: '#666',
          dark: '#1A1A1A',
        },
        backgrouds: {
          white: '#FFF',
          light: '#F7F7F7',
          'light-blue': '#F7FCFF',
          medium: '#4D4D4D',
          dark: '#1A1A1A',
          'blue-950': '#072F4A',
          'green-950': '#0A2914',
          'light-theme' : '#FAF6F0',
          'theme-900' : '#c1f0e8'
        },
        borders: {
          white: '#FFF',
          light: '#CCC',
          medium: '#808080',
          dark: '#1A1A1A',
          'blue-300': '#7CD4FD',
          rangi : 'linear-gradient(180deg, #81684736 0%, #e4cee1 100%)',
          
        },
      },
      backgroundImage: {
        'blue-Green-50': 'linear-gradient(180deg, #F0F9FF 0%, #F2FBF4 100%)',
        'blue-Green-200': 'linear-gradient(0deg, #C3EFCE 0%, #B9E6FE 100%)',
        'Blue-Green-300': 'linear-gradient(0deg, #98E2A8 0%, #7CD4FD 100%)',
        'Blue-purple-300': 'linear-gradient(180deg, #81684736 0%, #e4cee1 100%)',
        'Blue-Green-400': 'linear-gradient(0deg, #E8D3FF 0%, #C3BEF0 100%)',
      },
      spacing: {
        1512: '94.5rem',
        800: '50rem',
        720: '45rem',
        192: '12rem',
        160: '10rem',
        156: '9.75rem',
        120: '7.5rem',
      },
      boxShadow: {
        'nav-shadow': '0px 6px 48px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
