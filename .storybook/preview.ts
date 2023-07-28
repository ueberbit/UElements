/* eslint-disable import/no-extraneous-dependencies */
import type { Preview } from '@storybook/web-components'
import { setCustomElements } from '@storybook/web-components'
import customElements from '../dist/custom-elements.json'

/**
 * Remove private class members from controls.
 */
// customElements.modules.forEach((module) => {
//   module.declarations.forEach((declaration) => {
//     declaration.members = declaration.members
//       .filter((member) => member.privacy !== 'private')
//       .filter((member) => !member.static)
//   })
// })

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
  },
}

export default preview
