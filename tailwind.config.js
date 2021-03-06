module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6937ff',
          secondary: '#00adff',
          accent: '#221e41',
          neutral: '#090909',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
