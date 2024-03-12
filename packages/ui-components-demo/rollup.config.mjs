import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: ['src/index.ts', 'src/components/Button/index.ts', 'src/components/LabelledInput/index.ts'],
    output: [
      {
        dir: 'dist',
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
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
