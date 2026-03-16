import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { Badge } from '.'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'secondary', 'outline', 'destructive'],
    },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Stable release</Badge>',
  }),
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    `,
  }),
}
