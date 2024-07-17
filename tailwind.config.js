/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      backgroundColor: {
        'back-color-1': '#0A101B',
        'back-color-2': '#090E17'
      },
      boxShadow: {
        'custom': '0 0 50px rgba(0, 0, 0, 0.5)',
        'header': '2px 0 10px rgba(0, 0, 0, 0.2)',
        'poster-pc': '0 -150px 400px 320px rgba(10, 16, 27, 100)',
        'poster-phone': '10px -5px 10px #0A101B,\n' +
            '                -10px -5px 10px #0A101B,\n' +
            '                10px -15px 25px #0A101B,\n' +
            '                -10px -15px 25px #0A101B,\n' +
            '                10px -25px 50px #0A101B,\n' +
            '                -10px -25px 50px #0A101B,\n' +
            '                10px -35px 80px #0A101B,\n' +
            '                -10px -35px 80px #0A101B,\n' +
            '                10px -50px 100px #0A101B,\n' +
            '                -10px -50px 100px #0A101B, \n' +
            '                10px -80px 150px #0A101B, \n' +
            '                -10px -80px 150px #0A101B'
      },
    }
  },
  plugins: [],
}

