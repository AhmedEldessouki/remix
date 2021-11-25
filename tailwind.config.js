const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const fromRoot = p => path.join(__dirname, p)

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  darkMode: 'class',
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'dark', 'group-hover'],
    boxShadow: ['responsive', 'active', 'hover', 'focus', 'dark'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1536px', // this is the "design resolution"
    },
    colors: {
      // color scheme is defined in /app.css
      trans: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,

      my: {
        100: 'var(--my01)',
        200: 'var(--my02)',
        300: 'var(--my03)',
        400: 'var(--my04)',
        500: 'var(--my05)',
        600: 'var(--my06)',
      },

      mm: {
        100: 'var(--mm-900)',
        200: 'var(--mm-800)',
        300: 'var(--mm-700)',
        400: 'var(--mm-600)',
        500: 'var(--mm-500)',
        600: 'var(--mm-400)',
        700: 'var(--mm-300)',
        800: 'var(--mm-200)',
        900: 'var(--mm-100)',
      },
      sky: colors.sky,
      blueGray: colors.blueGray,
      green: {
        50: colors.green['50'],
        400: colors.green['400'],
        500: colors.green['500'],
      },
      red: {
        50: colors.red['50'],
        400: colors.red['400'],
        500: colors.red['500'],
      },
    },

    extend: {
      fontFamily: {
        sans: ['lato', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      spacing: {
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
      },
      minHeight: {
        sm: '70px',
        mx: '73vh',
        '98vh': '98vh',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      maxHeight: {
        '50vh': '50vh',
        '75vh': '75vh',
      },

      typography: theme => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = size => {
          const result = theme(`fontSize.${size}`)
          return Array.isArray(result) ? result[0] : result
        }

        return {
          // DEFAULT only holds shared stuff and not the things that change
          // between light/dark
          DEFAULT: {
            css: [
              {
                p: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                '> div': {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                a: {
                  textDecoration: 'none',
                },
                'a:hover,a:focus': {
                  textDecoration: 'underline',
                  outline: 'none',
                },
                strong: {
                  fontWeight: theme('fontWeight.medium'),
                  fontSize: fontSize('lg'),
                },
                hr: {
                  margin: theme('spacing.8'),
                  borderRadius: theme('spacing.4'),
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme('fontWeight.normal'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontWeight: theme('fontWeight.medium'),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                h2: {
                  fontStyle: 'oblique !important',
                },
                'h1, h2': {
                  color: theme('colors.blueGray.600'),
                  fontSize: fontSize('2xl'),
                  marginTop: theme('spacing.20'),
                  marginBottom: theme('spacing.10'),
                  fontWeight: theme('fontWeight.black'),
                  fontStyle: 'normal',
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('3xl'),
                  },
                },
                h3: {
                  fontSize: fontSize('xl'),
                  marginTop: theme('spacing.16'),
                  marginBottom: theme('spacing.10'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('2xl'),
                  },
                },
                'h4, h5, h6': {
                  fontSize: fontSize('lg'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('xl'),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme('borderRadius.lg'),
                },
                blockquote: {
                  fontWeight: theme('fontWeight.normal'),
                  border: 'none',
                  borderRadius: theme('borderRadius.lg'),
                  padding: theme('spacing.8'),
                  marginTop: 0,
                  marginBottom: theme('spacing.10'),
                  color: theme('colors.my.200'),
                  backgroundColor: theme('colors.my.600'),
                },
                'blockquote > :last-child': {
                  marginBottom: 0,
                },
                button: {
                  fontSize: fontSize('xl'),
                },
              },
            ],
          },
        }
      },
    },
  },
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [fromRoot('./app/**/*.+(js|ts|tsx|mdx|md)')],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
