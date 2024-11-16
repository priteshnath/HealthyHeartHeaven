/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-hover': '#270f3a', // Replace with your desired color
        'btn-primary-color': '#000', // Replace with your desired color
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

