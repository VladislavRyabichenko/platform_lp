const plugin = require('tailwindcss/plugin')

module.exports = {
  // content: [],
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '835px',
        '2xl': '1536px'
      },
      colors: {
        brand: {
          primary: {
            main: '#3076FF',
            dark: '#2160DC',
            light: '#6E9FFF',
            pastel: '#D1E1FF',
            tint: '#EAF1FF'
          },
          danger: {
            main: '#F64786',
            dark: '#E93A6F',
            light: '#FD649B',
            pastel: '#FFC7CD',
            tint: '#FFEDF0'
          },
          warning: {
            main: '#F1B56E',
            dark: '#F2B007',
            light: '#F8DB46',
            pastel: '#FFF29B',
            tint: '#FFFCED'
          },
          success: {
            main: '#74CEB9',
            dark: '#5AC994',
            light: '#7CFFC4',
            pastel: '#EDFFF9',
            tint: '#EEFFF0'
          }
        },
        primary: {
          500: '#2160DC',
          600: '#1F51B9',
          700: '#1C4296',
          800: '#1A3474',
          900: '#172551',
          950: '#161D3F'
        },
        surface: {
          300: '#2C2D43',
          400: '#15162E',
          500: '#060721'
        },
        divider: {
          400: '#1F213D',
          500: '#2C2D43',

          light: {
            400: '#F0F0F5',
            500: '#DADADE'
          }
        },
        icon: {
          400: '#70717F',
          500: '#4C4D5F',

          light: {
            400: '#D8D8E0',
            500: '#999AA9'
          }
        },
        text: {
          100: '#DADADE',
          200: '#B4B5BC',
          300: '#8F8F9B',
          400: '#696A79',
          500: '#444558'
        },
        danger: {
          500: '#E93A6F',
          600: '#C13665',
          700: '#9A315A',
          800: '#722D50',
          900: '#4B2845',
          950: '#372640'
        },
        success: {
          500: '#5AC994',
          600: '#4FA882',
          700: '#448770',
          800: '#39665F',
          900: '#2E454D',
          950: '#283544'
        },
        warning: {
          500: '#F2B007',
          600: '#C99411',
          700: '#9F781C',
          800: '#765C26',
          900: '#4C4031',
          950: '#383236'
        },
        black: '#060721'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.h1-bold': {
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '72px'
        },
        '.h1-medium': {
          fontWeight: 500,
          fontSize: '64px',
          lineHeight: '72px'
        },
        '.h1-reguler': {
          fontWeight: 400,
          fontSize: '64px',
          lineHeight: '72px'
        },

        '.h2-bold': {
          fontWeight: 700,
          fontSize: '42px',
          lineHeight: '56px'
        },
        '.h2-medium': {
          fontWeight: 500,
          fontSize: '42px',
          lineHeight: '56px'
        },
        '.h2-reguler': {
          fontWeight: 400,
          fontSize: '42px',
          lineHeight: '56px'
        },

        '.h3-bold': {
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '40px'
        },
        '.h3-medium': {
          fontWeight: 500,
          fontSize: '30px',
          lineHeight: '40px'
        },
        '.h3-reguler': {
          fontWeight: 400,
          fontSize: '30px',
          lineHeight: '40px'
        },

        '.h4-bold': {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '36px'
        },
        '.h4-medium': {
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '36px'
        },
        '.h4-reguler': {
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '36px'
        },

        '.text-l-bold': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '32px'
        },
        '.text-l-medium': {
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '32px'
        },
        '.text-l-reguler': {
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '32px'
        },

        '.text-m-bold': {
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px'
        },
        '.text-m-medium': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px'
        },
        '.text-m-reguler': {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px'
        },

        '.text-s-bold': {
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px'
        },
        '.text-s-medium': {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px'
        },
        '.text-s-reguler': {
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px'
        },

        '.text-xs-bold': {
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '16px'
        },
        '.text-xs-medium': {
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '16px'
        },
        '.text-xs-reguler': {
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px'
        },

        '.caption-s': {
          fontWeight: 400,
          fontSize: '11px',
          lineHeight: '14px'
        },
        '.caption-xs': {
          fontWeight: 400,
          fontSize: '8px',
          lineHeight: '12px'
        },

        '.button-l-bold': {
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '16px'
        }
      })
    })
  ]
}
