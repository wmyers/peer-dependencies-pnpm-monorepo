import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import hq from 'alias-hq';
import external from '@yelo/rollup-node-external';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';

const getPostCSSPlugins = () => {
    // NB postcssPresetEnv increases css filesize
    const plugins = [postcssImport(), tailwindcss(), autoprefixer(), postcssPresetEnv()];
    if (process.env.NODE_ENV === 'production') {
        plugins.push(cssnano());
    }
    return plugins;
};

// https://vitejs.dev/config/
export default defineConfig({
    // - not needed as not using @ aliases in tsconfig
    // resolve: {
    //     alias: hq.get('rollup'),
    // },
    plugins: [react(), dts({ rollupTypes: true, exclude: ['**/*.stories.(ts|tsx)'] })],
    build: {
        // sourcemap: true,
        // see https://vitejs.dev/config/build-options#build-csscodesplit
        cssCodeSplit: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: [
                resolve(__dirname, 'src/lib/components/Button/Button'),
                resolve(__dirname, 'src/lib/components/Typography/Typography'),
                resolve(__dirname, 'src/lib/components/AlertButton/AlertButton'),
                resolve(__dirname, 'src/lib/index.ts'),
            ],
            name: '@recipeez/ui-components',
            // the proper extensions will be added
            fileName: (format: string, entryName: string) => `${entryName}.${format === 'es' ? 'js' : format}`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            // NB @yelo/rollup-node-external externalizes anything in node_modules
            external: external(),
        },
    },
    css: {
        postcss: {
            plugins: getPostCSSPlugins(),
        },
    },
});
