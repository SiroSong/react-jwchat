import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'
import cleaner from 'rollup-plugin-cleaner'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './doc/doc.tsx',
  output: {
    file: path.resolve('./doc/dist/doc.js'),
    format: 'iife',
    sourcemap: false,
  },
  plugins: [
    cleaner({ targets: [path.resolve('./doc/dist/doc.js')] }),
    commonjs(),
    postcss({ plugins: [] }),
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**', extensions, babelHelpers: 'bundled' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
}
