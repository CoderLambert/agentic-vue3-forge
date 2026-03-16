import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { Checkbox } from '.'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)

      return { checked }
    },
    template: `
      <div class="flex max-w-sm items-start gap-3">
        <Checkbox id="storybook-checkbox" v-model:model-value="checked" class="mt-0.5" />
        <div class="space-y-1">
          <label class="text-sm font-medium" for="storybook-checkbox">
            Enable release notifications
          </label>
          <p class="text-sm text-muted-foreground">
            State: {{ checked ? 'enabled' : 'muted' }}
          </p>
        </div>
      </div>
    `,
  }),
}

export const DisabledState: Story = {
  render: () => ({
    components: { Checkbox },
    template: `
      <div class="flex max-w-sm items-start gap-3">
        <Checkbox id="storybook-checkbox-disabled" :model-value="true" disabled class="mt-0.5" />
        <div class="space-y-1">
          <label class="text-sm font-medium" for="storybook-checkbox-disabled">
            Locked setting
          </label>
          <p class="text-sm text-muted-foreground">
            This option is controlled by workspace policy.
          </p>
        </div>
      </div>
    `,
  }),
}
