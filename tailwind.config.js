/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ts, vue}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mainThemeDark",
    themes: [
      {
        mainThemeDark: {

          "primary": "#73cfea",
          "primary-focus": "#107394",

          "secondary": "#f2f2a8",

          "accent": "#53468b",

          "neutral": "#191D24",

          "base-100": "#2A303C",

          "info": "#337298",

          "success": "#83de7b",

          "warning": "#f6bd20",

          "error": "#e63900",
        },
        mainThemeWhite: {

          "primary": "#73cfea",

          "secondary": "#f2f2a8",

          "accent": "#53468b",

          "neutral": "#191D24",

          "base-100": "#e9f6ff",

          "info": "#337298",

          "success": "#83de7b",

          "warning": "#f6bd20",

          "error": "#e63900",
        },
      }
    ],
  },
}
