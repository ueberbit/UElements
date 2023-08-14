import type { Meta, StoryObj } from '@storybook/web-components'
import { withActions } from '@storybook/addon-actions/decorator'

const meta = {
  title: 'Custom Elements/Details Group',
  component: 'ue-detailsgroup',
  parameters: {
    actions: {
      handles: ['ue-show', 'ue-hide', 'ue-after-show', 'ue-after-hide'],
    },
  },
  // @ts-expect-error actions
  decorators: [withActions],
} satisfies Meta<any>

export default meta

type Story = StoryObj<any>

export const Default: Story = {
  render: ({ multiple }) => html`
<ue-detailsgroup ?multiple="${multiple}">
  ${Array.from({ length: 3 }).map((_, i) => html`
    <ue-details summary="Details ${++i}">
      <div>${faker.lorem.paragraph(4)}</div>
    </ue-details>
  `)}
</ue-detailsgroup>
  `,
}

export const Nested: Story = {
  render: ({ multiple }) => html`
<ue-detailsgroup ?multiple="${multiple}">
  ${Array.from({ length: 3 }).map((_, i) => html`
    <ue-details summary="Details ${++i}">
      <ue-detailsgroup ?multiple="${multiple}">
        ${Array.from({ length: 3 }).map((_, j) => html`
          <ue-details summary="Details ${i}.${++j}">
            <div>${faker.lorem.paragraph(4)}</div>
          </ue-details>
        `)}
      </ue-detailsgroup>
    </ue-details>
  `)}
</ue-detailsgroup>
  `,
}
