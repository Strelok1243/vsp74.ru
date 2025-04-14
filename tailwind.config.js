const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1410px',
    },
    extend: {
      fontFamily: {
        "golos": ["Golos Text", "sans-serif"],
      },
      fontSize: {
        "sm": ["12px", "16px"],
        "1.5xl": ["1.375rem", "1.875rem"],
        "2.5xl": ["1.75rem", "2.25rem"],
        "3.5xl": ["2rem", "2.5rem"],
      },
      spacing: {
        '7.5': '30px',
        '15': '60px',
      },
      colors: {
        'vsp-black-new': '#1F1F20',
        'vsp-black': '#2E2E2E',
        'vsp-red': '#D62D30',
        'vsp-green': '#00AA00',
        'vsp-light-gray': '#F2F6FF',
        'vsp-f8-gray': '#F8F8F8',
        'vsp-e-gray': '#EEEEEE',
        'vsp-e9-gray': '#E9E9E9',
        'vsp-gray': '#CACACA',
        'vsp-gray-new': '#4C535E',
        'vsp-dark-gray': '#2E2E2EB2',
      },
    },
  },
  plugins: plugins,
};
