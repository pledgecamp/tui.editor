import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';

const pkg = require('./package.json');

export default {
  input: 'build/squire-raw.js',
  output: {
    exports: 'named',
    file: pkg.main,
    format: 'esm',
    sourcemap: true,
  },
  external: [...Object.keys(pkg.devDependencies)],
  plugins: [
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
};
