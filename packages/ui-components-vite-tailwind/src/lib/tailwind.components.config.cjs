import coreConfig from '../../tailwind.core.config.cjs';
/** @type {import('tailwindcss').Config} */
export default {
    ...coreConfig,
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
