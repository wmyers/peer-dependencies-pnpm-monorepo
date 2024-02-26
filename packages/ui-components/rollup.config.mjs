import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm'
      }
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      commonjs()
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime'
    ]
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
