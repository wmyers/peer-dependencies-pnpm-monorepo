import coreConfig from '../tailwind.core.config.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  ...coreConfig,
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
