/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { defineConfig } from 'vite'
import MagicString from 'magic-string'
import Unimport from 'unimport/unplugin'
import fg from 'fast-glob'
import { analyzeText, transformAnalyzerResult } from 'web-component-analyzer'

export default defineConfig({
  // test: {
  //   globals: true,
  //   environment: 'happy-dom',
  // },
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
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./assets', import.meta.url)),
      'public': fileURLToPath(new URL('./public', import.meta.url)),
      '#internals': fileURLToPath(new URL('./src/internals', import.meta.url)),
    },
  },
  plugins: [
    {
      name: 'vite-plugin-wca-watcher',
      enforce: 'pre',
      buildStart() {
        generateCustomHTMLData()
      },
      async handleHotUpdate({ file, read }) {
        if (!file.endsWith('.ts'))
          return
        const code = await read()
        if (code.match(/@customElement/))
          generateCustomHTMLData()
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
            'query',
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

async function generateCustomHTMLData() {
  const files = await fg([
    'src/CustomElements/**/*.ts',
  ], {
    onlyFiles: true,
    ignore: [
      '**/*.test.ts',
    ],
  })

  const contents = (await Promise.all(files.flatMap(async (fileName) => {
    const fileContent = await fs.readFile(fileName, 'utf-8')

    return fileContent
  }))).filter(text => text !== '')

  const { results, program } = analyzeText(contents)
  const vscode = transformAnalyzerResult('vscode', results, program)
  const json = transformAnalyzerResult('json', results, program)

  try {
    fs.access('./dist', fs.constants.F_OK)
  }
  catch {
    await fs.mkdir('./dist')
  }
  finally {
    await fs.writeFile('./dist/vscode.html-custom-data.json', vscode)
    await fs.writeFile('./dist/custom-elements.json', json)
  }
}
