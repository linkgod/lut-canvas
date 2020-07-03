import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      { file: pkg.browser,
        format: 'umd',
        name: 'renderLut',
        plugins: [
          getBabelOutputPlugin({
            presets: [
              ["@babel/env", { "modules": false }]
            ],
            allowAllFormats: true
          })
        ]
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ],
    external: []
  }
];
