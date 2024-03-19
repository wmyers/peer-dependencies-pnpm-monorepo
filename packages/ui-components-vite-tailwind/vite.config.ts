import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import hq from 'alias-hq';
import external from '@yelo/rollup-node-external';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    // - not needed as not using @ aliases in tsconfig
    // resolve: {
    //     alias: hq.get('rollup'),
    // },
    plugins: [react(), dts({ rollupTypes: true, exclude: ['**/*.stories.(ts|tsx)'] })],
    build: {
        sourcemap: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: [resolve(__dirname, 'src/lib/index.ts'), resolve(__dirname, 'src/lib/components/Button')],
            name: 'Library name',
            // the proper extensions will be added
            fileName: 'index',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            // NB @yelo/rollup-node-external externalizes anything in node_modules
            external: external(),
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                },
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer({}),
                postcssPresetEnv({}),
                process.env.NODE_ENV === 'production' && cssnano(),
            ],
        },
    },
});
