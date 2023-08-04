import { resolve } from 'node:path'
import { execSync } from 'node:child_process'
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
  css: {
    // transformer: 'lightningcss',
  },
  base: './',
  resolve: {
    alias: {
      '~/': `${resolve(process.cwd(), 'src/')}`,
      '@/': `${resolve(process.cwd(), 'src/')}`,
      'assets/': `${resolve(process.cwd(), 'assets')}/`,
      'public/': `${resolve(process.cwd(), 'public')}/`,
      '#internals/': `${resolve(process.cwd(), 'src/internals')}/`,
    },
  },
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
          // exec('pnpm build:wca:vscode') // high cpu usage
          // exec('pnpm build:wca:ce')
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
          s.prepend('import UElement from \'#internals/UElement.ts\'\n')

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
            'html',
            'LitElement',
            'supportsAdoptingStyleSheets',
            'unsafeCSS',
            ...[
              'CSSResult',
              'CSSResultOrNative',
            ].map(name => ({ name, type: true })),
          ],
        },
        {
          from: 'lit/decorators.js',
          imports: [
            'customElement',
            'property',
            'state',
          ],
        },
        {
          from: '@storybook/web-components',
          imports: [
            ...[
              'Meta',
              'StoryObj',
            ].map(name => ({ name, type: true })),
          ],
        },
        {
          from: '@storybook/blocks',
          imports: [
            'ArgTypes',
            'Canvas',
            'ColorPalette',
            'Controls',
            'Description',
            'IconGallery',
            'Markdown',
            'Meta',
            'Primary',
            'Source',
            'Stories',
            'Story',
            'Subtitle',
            'Title',
            'Typeset',
            'Unstyled',
            'useOf',
          ],
        },
        {
          from: '@faker-js/faker',
          imports: [
            'faker',
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
