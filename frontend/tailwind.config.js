/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerOrange: '#ea580c',
        bgBlue: '#1d4ed8',
        secondaryBlue: '#2563eb',
        darkBlue: '#1e3a8a',
        accentGold: '#facc15',
      },
      fontFamily: {
        malayalam: ['Noto Sans Malayalam', 'Manjari', 'sans-serif'],
        sans: ['Outfit', 'Noto Sans Malayalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
