/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
