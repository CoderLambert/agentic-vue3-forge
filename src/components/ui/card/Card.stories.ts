import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '.'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const SummaryPanel: Story = {
  render: () => ({
    components: {
      Badge,
      Button,
      Card,
      CardAction,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    },
    template: `
      <Card class="w-[360px]">
        <CardHeader>
          <div class="space-y-1">
            <CardTitle>Release pipeline</CardTitle>
            <CardDescription>Track the current handoff before merging.</CardDescription>
          </div>
          <CardAction>
            <Badge variant="secondary">Stable</Badge>
          </CardAction>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="rounded-lg border border-border/70 bg-muted/40 p-4">
            <p class="text-sm font-medium">All required checks are green.</p>
            <p class="mt-2 text-sm text-muted-foreground">
              Ready for final QA sign-off and deployment scheduling.
            </p>
          </div>
        </CardContent>
        <CardFooter class="justify-between gap-3">
          <Button variant="outline">Review log</Button>
          <Button>Ship release</Button>
        </CardFooter>
      </Card>
    `,
  }),
}

export const StackedCards: Story = {
  render: () => ({
    components: { Card, CardContent, CardDescription, CardHeader, CardTitle },
    template: `
      <div class="grid w-full max-w-3xl gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Design tokens</CardTitle>
            <CardDescription>Validated against the current Tailwind v4 theme.</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground">
              Surface, border and typography tokens render consistently in Storybook.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interaction states</CardTitle>
            <CardDescription>Compound components keep their expected composition.</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground">
              Dialog, Select and Checkbox remain testable without mounting the whole app shell.
            </p>
          </CardContent>
        </Card>
      </div>
    `,
  }),
}
