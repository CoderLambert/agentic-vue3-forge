import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '.'

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
    },
    setup() {
      const role = ref<'builder' | 'reviewer' | 'operator'>('builder')

      return { role }
    },
    template: `
      <div class="w-full max-w-xs space-y-3">
        <Select v-model:model-value="role">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Choose a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Team role</SelectLabel>
              <SelectItem value="builder">Builder</SelectItem>
              <SelectItem value="reviewer">Reviewer</SelectItem>
              <SelectItem value="operator">Operator</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p class="text-sm text-muted-foreground">
          Current role: {{ role }}
        </p>
      </div>
    `,
  }),
}

export const DisabledState: Story = {
  render: () => ({
    components: {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
    },
    template: `
      <div class="w-full max-w-xs space-y-3">
        <Select default-value="reviewer" disabled>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Choose a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Team role</SelectLabel>
              <SelectItem value="builder">Builder</SelectItem>
              <SelectItem value="reviewer">Reviewer</SelectItem>
              <SelectItem value="operator">Operator</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
}
