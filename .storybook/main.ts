/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/web-components-vite'
import RootConfig from '../vite.config'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async config => mergeConfig(config, RootConfig),
}
export default config
