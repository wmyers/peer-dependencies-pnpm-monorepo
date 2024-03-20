import rootConfig from '../../tailwind.config.cjs';

/** @type {import('tailwindcss').Config} */
export default {
    ...rootConfig,
    theme: {
        extend: {
            colors: {
                gray: {
                    600: '#ff0000',
                },
            },
        },
    },
    corePlugins: {
        // prevents tailwind global style resets
        preflight: false,
    },
};
