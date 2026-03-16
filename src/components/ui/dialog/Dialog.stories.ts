import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Input,
    },
    setup() {
      const releaseName = ref('forge-ui-v1.2.0')

      return { releaseName }
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create release branch</DialogTitle>
            <DialogDescription>
              Confirm the release label before opening a new handoff.
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-2">
            <label class="text-sm font-medium">Release name</label>
            <Input v-model:model-value="releaseName" />
          </div>
          <DialogFooter showCloseButton>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}
