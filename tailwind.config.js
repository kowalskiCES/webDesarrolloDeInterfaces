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
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mainThemeDark",
    themes: [
      {
        mainThemeDark: {

          "primary": "#73cfea",

          "secondary": "#f2f2a8",

          "accent": "#53468b",

          "neutral": "#232830",

          "base-100": "#107394",
          
          "info": "#337298",

          "success": "#83de7b",

          "warning": "#f6bd20",

          "error": "#e63900",
        },
        mainThemeWhite: {

          "primary": "#73cfea",

          "secondary": "#f2f2a8",

          "accent": "#53468b",

          "neutral": "#232830",

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
