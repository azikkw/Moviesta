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
      },
    }
  },
  plugins: [],
}

