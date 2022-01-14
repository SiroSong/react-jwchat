import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './example/index.tsx',
  output: {
    file: path.resolve('./', './example/dist.js'),
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    postcss({ plugins: [] }),
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**', extensions, babelHelpers: 'bundled' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    serve({
      port: 8888,
      contentBase: ['example', 'src'],
    }),
  ],
}
