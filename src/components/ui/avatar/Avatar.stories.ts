import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { Avatar, AvatarFallback, AvatarImage } from '.'

const avatarSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
    <defs>
      <linearGradient id="avatar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d9b26a" />
        <stop offset="100%" stop-color="#85a8ff" />
      </linearGradient>
    </defs>
    <rect width="96" height="96" rx="24" fill="#111827" />
    <circle cx="48" cy="48" r="36" fill="url(#avatar-gradient)" />
    <text
      x="50%"
      y="55%"
      text-anchor="middle"
      dominant-baseline="middle"
      font-family="Arial, sans-serif"
      font-size="28"
      font-weight="700"
      fill="#111827"
    >FO</text>
  </svg>
`)

const avatarSrc = `data:image/svg+xml;utf8,${avatarSvg}`

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback, AvatarImage },
    setup() {
      return { avatarSrc }
    },
    template: `
      <div class="flex items-center gap-4">
        <Avatar class="size-14">
          <AvatarImage :src="avatarSrc" alt="Forge Operator" />
          <AvatarFallback>FO</AvatarFallback>
        </Avatar>
        <div class="space-y-1">
          <p class="text-sm font-medium">Forge Operator</p>
          <p class="text-sm text-muted-foreground">Active deployment owner</p>
        </div>
      </div>
    `,
  }),
}

export const FallbackOnly: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback, AvatarImage },
    template: `
      <div class="flex items-center gap-4">
        <Avatar class="size-14">
          <AvatarImage src="/missing-avatar.png" alt="Fallback only" />
          <AvatarFallback>FO</AvatarFallback>
        </Avatar>
        <div class="space-y-1">
          <p class="text-sm font-medium">Fallback state</p>
          <p class="text-sm text-muted-foreground">Use initials when no image is available.</p>
        </div>
      </div>
    `,
  }),
}
