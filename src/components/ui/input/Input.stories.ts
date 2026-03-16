import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { Input } from '.'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('Forge Operator')

      return { value }
    },
    template: `
      <div class="w-full max-w-sm space-y-3">
        <Input v-model:model-value="value" placeholder="Type a profile name" />
        <p class="text-sm text-muted-foreground">
          Current value: {{ value || 'empty' }}
        </p>
      </div>
    `,
  }),
}

export const InvalidState: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="w-full max-w-sm space-y-3">
        <Input
          default-value="forge@example.com"
          aria-invalid="true"
          placeholder="team@company.com"
        />
        <p class="text-sm text-destructive">
          Use a team mailbox for release notifications.
        </p>
      </div>
    `,
  }),
}

export const DisabledState: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="w-full max-w-sm space-y-3">
        <Input default-value="Read only field" disabled />
      </div>
    `,
  }),
}
