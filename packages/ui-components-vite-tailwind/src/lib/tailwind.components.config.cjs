/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/lib/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                gray: {
                    600: '#ff0000',
                },
            },
        },
    },
    plugins: [],
    corePlugins: {
        // prevents tailwind global style resets
        preflight: false,
    },
};
