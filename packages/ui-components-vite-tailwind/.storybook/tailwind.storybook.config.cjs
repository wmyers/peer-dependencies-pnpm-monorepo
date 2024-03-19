/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/lib/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
            600: '#ffcc00',
        },
      },
    }
  },
  plugins: [],
  corePlugins: {
      preflight: true,
  },
};
