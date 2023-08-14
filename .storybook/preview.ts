/* eslint-disable import/no-extraneous-dependencies */
import type { Preview } from '@storybook/web-components'
import React from 'react'
import { themes } from '@storybook/theming'
import { setCustomElements } from '@storybook/web-components'
import { DocsContainer } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import { faker } from '@faker-js/faker'
import customElements from '../dist/custom-elements.json'
import './style.css'
import '~/index.ts'

faker.seed(1337)

/**
 * Filter out static styles.
 */
customElements.tags = customElements.tags.map((ce) => {
  ce.properties = ce.properties?.filter(prop => prop.name !== 'styles' && Object.keys(prop).length > 1)

  // Workaround to have attributes, parts and slots with identical names.
  ce.slots = ce.slots?.map((slot) => {
    return {
      ...slot,
      name: slot.name === '' ? 'default ' : `${slot.name} `,
    }
  })
  ce.cssParts = ce.cssParts?.map((cssPart) => {
    return {
      ...cssPart,
      name: `${cssPart.name}  `,
    }
  })
  return ce
})
setCustomElements(customElements)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      light: { ...themes.dark },
    },
    docs: {
      container: (props) => {
        const isDark = useDarkMode()
        const currentProps = { ...props }
        currentProps.theme = isDark ? themes.dark : themes.light
        return React.createElement(DocsContainer, currentProps)
      },
    },
  },
}

export default preview
