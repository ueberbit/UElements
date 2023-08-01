import { resolve } from 'node:path'
import { exec, execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import MagicString from 'magic-string'
import Unimport from 'unimport/unplugin'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    // rollupOptions: {
    //   external: ['lit'],
    // },
  },
  define: {
    'process.env': process.env,
  },
  base: './',
  plugins: [
    {
      name: 'vite-plugin-wca-watcher',
      enforce: 'pre',
      buildStart() {
        execSync('pnpm build:wca:vscode')
        execSync('pnpm build:wca:ce')
      },
      transform(code: string) {
        if (code.match(/@customElement/)) {
          exec('pnpm build:wca:vscode')
          exec('pnpm build:wca:ce')
        }
      },
    },
    {
      name: 'vite-plugin-import-extends',
      enforce: 'pre',
      async transform(code: string, id: string) {
        if (id.match(/\/node_modules\//))
          return
        if (code.match(/extends UElement/)) {
          const s = new MagicString(code)
          s.prepend('import UElement from \'../internals/UElement.ts\'\n')

          return {
            code: s.toString(),
            map: s.generateMap(),
          }
        }
        if (code.match(/extends LitElement/)) {
          const s = new MagicString(code)
          s.prepend('import { LitElement } from \'lit\'\n')

          return {
            code: s.toString(),
            map: s.generateMap(),
          }
        }
      },
    },
    Unimport.vite({
      presets: [
        {
          from: 'lit',
          imports: [
            'adoptStyles',
            'css',
            'LitElement',
            'html',
            'supportsAdoptingStyleSheets',
            'unsafeCSS',
          ],
        },
        {
          from: 'lit/decorators.js',
          imports: [
            'customElement',
            'property',
          ],
        },
      ],
      dirs: [
        './src/internals/**/*',
      ],
      dts: './src/unimport.d.ts',
    }),
  ],
})
