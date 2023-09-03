/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      blue:'#345FF6',
      gunmetal:'#253347',
      "dark-electric-blue":'#5E6E85',
      borders:"#D8E2E7",
      pureWhite:'#FFFFFF',
      "gradient-2": '#D6E6FE'
    },
    fontSize: {
      sm: ['20px', '110%'],
      base: ['24px', '110%'],
      lg: ['48px', '110%'],
      xl: ['64px', '110%'],
      bodyM:['16px', '150%'],
      bodyS:['14px', '150%']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-curved-line-left.svg')",
      },
      dropShadow: {
        'card': '16px 32px 56px rgba(143, 174, 207, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

