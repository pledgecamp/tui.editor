import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';

const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    exports: 'default',
    file: pkg.main,
    format: 'esm',
    banner: ['to-mark', `@version ${pkg.version} | ${new Date().toDateString()}`].join('\n'),
    sourcemap: true,
  },
  external: [...Object.keys(pkg.devDependencies)],
  plugins: [
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
};
