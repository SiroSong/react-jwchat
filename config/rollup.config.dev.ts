import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'

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
    babel({ exclude: 'node_modules/**', extensions }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    serve({
      port: 8888,
      contentBase: ['example', 'src'],
    }),
  ],
}
