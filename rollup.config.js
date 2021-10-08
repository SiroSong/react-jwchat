import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './src/components/index.ts',
  output: {
    file: path.resolve('./', pkg.main),
    format: 'esm',
  },
  plugins: [
    commonjs({ include: 'node_modules/**' }),
    postcss({ plugins: [] }),
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**', extensions }),
  ],
  external: ['react'],
}
