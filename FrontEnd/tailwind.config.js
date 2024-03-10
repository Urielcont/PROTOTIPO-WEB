/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#6BEAEA',
        customBlue2: '#16C1C8',
      }
    },
  },
  plugins: [],
}

