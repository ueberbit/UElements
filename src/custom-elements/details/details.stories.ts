import type { Meta, StoryObj } from '@storybook/web-components'
import { withActions } from '@storybook/addon-actions/decorator'

const meta = {
  title: 'Custom Elements/Details',
  component: 'ue-details',
  parameters: {
    actions: {
      handles: ['ue-show', 'ue-hide', 'ue-after-show', 'ue-after-hide'],
    },
  },
  decorators: [withActions],
} satisfies Meta<any>

export default meta

type Story = StoryObj<any>

export const Default: Story = {
  render: ({ open, summary = 'Summary' }) => html`
<ue-details ?open="${open}" summary="${summary}">
  <div>${faker.lorem.paragraph(2)}</div>
</ue-details>
  `,
}

export const HTMLSummary: Story = {
  render: ({ open }) => html`
<ue-details ?open="${open}">
  <div slot="summary">Summary with HTML</div>
  <div>${faker.lorem.paragraph(10)}</div>
</ue-details>
  `,
}

export const SlottedIcon: Story = {
  render: ({ open, summary = 'Custom Icon' }) => html`
<ue-details ?open="${open}" summary="${summary}">
  <i slot="icon">💩</i>
  <div>${faker.lorem.paragraph(2)}</div>
</ue-details>
  `,
}
