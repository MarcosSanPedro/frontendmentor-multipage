/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        papaya: 'rgba(231, 129, 107, 1)',
        lighGray: 'rgb(241, 243, 245)'
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'extra-tighter': '-0.05em',
      },
      
    }
  },
  plugins: []
};