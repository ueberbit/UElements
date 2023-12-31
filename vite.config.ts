import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { defineConfig } from 'vite'
import Unimport from 'unimport/unplugin'
import fg from 'fast-glob'
import { analyzeText, transformAnalyzerResult } from 'web-component-analyzer'
// import noBundlePlugin from 'vite-plugin-no-bundle'
// import dts from 'vite-plugin-dts'

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
    //   output: {
    //     preserveModules: true,
    //     preserveModulesRoot: 'src',
    //     entryFileNames: '[name].js',
    //   },
    // },
    // rollupOptions: {
    //   external: ['lit'],
    // },
  },
  define: {
    'process.env': process.env,
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
    // dts(),
    // noBundlePlugin(),
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
          from: 'lit/static-html.js',
          imports: [
            'literal',
            'unsafeStatic',
          ],
        },
        {
          from: 'lit/directives/unsafe-html.js',
          imports: [
            'unsafeHTML',
          ],
        },
        {
          from: 'lit/decorators.js',
          imports: [
            'customElement',
            'property',
            'query',
            'queryAll',
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
    'src/custom-elements/**/*.ts',
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
