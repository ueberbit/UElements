import type { Meta, StoryObj } from '@storybook/web-components'
// import type { HeaderProps } from './Header'
import './MyElement.ts'
import '../index.css'
import { html } from 'lit'

const meta = {
  title: 'Example/MyElement',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/web-components/writing-docs/autodocs
  tags: ['autodocs'],
  component: 'my-element',
  // render: (args: any) => html`<my-element>my element</my-element>`,
} satisfies Meta<any>

export default meta
type Story = StoryObj<any>

export const LoggedIn: Story = {
  render: () => html`<my-element>my element</my-element>`,
}
