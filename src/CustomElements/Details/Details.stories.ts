import './Details.ts'
import type { Meta, StoryObj } from '@storybook/web-components'

const meta = {
  title: 'Custom Elements/Details',
  component: 'ue-details',
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
