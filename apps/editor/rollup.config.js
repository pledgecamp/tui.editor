import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import css from 'rollup-plugin-import-css';
import copy from 'rollup-plugin-copy';

const pkg = require('./package.json');

export default {
  input: 'src/js/index.js',
  output: {
    exports: 'default',
    file: pkg.main,
    format: 'esm',
    banner: [
      '/*',
      pkg.name,
      `@version ${pkg.version} | ${new Date().toDateString()}`,
      `@author ${pkg.author}`,
      `@license ${pkg.license}`,
      '*/'
    ].join('\n'),
    sourcemap: true,
  },
  external: [...Object.keys(pkg.devDependencies)],
  plugins: [
    commonjs(),
    css(),
    resolve({ moduleDirectories: ['node_modules', '../libs'] }),
    sourceMaps(),
    copy({
      targets: [
        { src: 'src/css/*', dest: 'dist/css' },
        { src: 'src/img/*', dest: 'dist/img' }
      ]
    })
  ],
};
