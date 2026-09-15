/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0e27',
          800: '#1a1f3a',
          700: '#2a2f4a',
        },
      },
    },
  },
  plugins: [],
}
