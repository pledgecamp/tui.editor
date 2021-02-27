import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

const pkg = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      file: pkg.main,
      format: 'esm',
      sourcemap: true,
    },
    external: [...Object.keys(pkg.devDependencies)],
    plugins: [
      json(),
      typescript(),
      commonjs(),
      resolve(),
      sourceMaps(),
    ],
  },
  {
    input: 'src/__sample__/index.ts',
    output: {
      exports: 'default',
      name: 'sample',
      file: 'dist/sample.js',
      format: 'umd',
      globals: ['codemirror'],
      sourcemap: true,
    },
    external: [...Object.keys(pkg.devDependencies)],
    plugins: [
      json(),
      typescript(),
      commonjs(),
      resolve(),
      sourceMaps(),
    ],    
  },
];
