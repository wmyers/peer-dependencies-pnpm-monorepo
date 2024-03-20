import rootConfig from '../tailwind.core.config.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  ...rootConfig,
  theme: {
    extend: {
      colors: {
        gray: {
            600: '#ffcc00',
        },
      },
    }
  },
  corePlugins: {
      preflight: true,
  },
};
