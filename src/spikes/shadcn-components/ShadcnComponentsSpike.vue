<script setup lang="ts">
import { computed, ref } from 'vue'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'destructive'
type ButtonSize = 'sm' | 'default' | 'lg'
type Role = 'builder' | 'reviewer' | 'operator'

const profileName = ref('Forge Operator')
const selectedRole = ref<Role>('builder')
const notificationsEnabled = ref(true)
const controlsDisabled = ref(false)
const buttonVariant = ref<ButtonVariant>('default')
const buttonSize = ref<ButtonSize>('default')
const avatarEnabled = ref(true)
const dialogOpen = ref(false)

const buttonVariants: readonly ButtonVariant[] = ['default', 'secondary', 'outline', 'destructive']
const buttonSizes: readonly ButtonSize[] = ['sm', 'default', 'lg']

const roleLabels: Record<Role, string> = {
  builder: 'Builder',
  reviewer: 'Reviewer',
  operator: 'Operator',
}

const profileInitials = computed(() => {
  const source = profileName.value.trim() || 'Forge Operator'

  return source
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')
})

const profileAvatarSrc = computed(() => {
  const initials = profileInitials.value || 'FO'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d9b26a" />
          <stop offset="100%" stop-color="#85a8ff" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill="#111827" />
      <circle cx="48" cy="48" r="38" fill="url(#panel)" opacity="0.92" />
      <text
        x="50%"
        y="54%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Arial, sans-serif"
        font-size="28"
        font-weight="700"
        fill="#111827"
      >${initials}</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
})

const summaryText = computed(() => {
  return [
    profileName.value || 'Forge Operator',
    roleLabels[selectedRole.value],
    notificationsEnabled.value ? 'Notifications on' : 'Notifications muted',
    controlsDisabled.value ? 'Controls locked' : 'Controls live',
  ].join(' · ')
})
</script>

<template>
  <div
    data-testid="shadcn-spike-page"
    class="relative min-h-screen overflow-hidden bg-background text-foreground"
  >
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 left-0 size-72 rounded-full bg-signal/18 blur-3xl" />
      <div class="absolute top-40 right-0 size-80 rounded-full bg-clay/18 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-56 w-80 rounded-full bg-mist/12 blur-3xl" />
    </div>

    <div class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
      <header class="rounded-[2rem] border border-border/60 bg-card/75 p-6 shadow-sm backdrop-blur">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div class="space-y-3">
            <div class="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Spike Route</Badge>
              <Badge variant="outline">/__spike/shadcn-components</Badge>
              <Badge :variant="controlsDisabled ? 'destructive' : 'default'">
                {{ controlsDisabled ? 'Frozen State' : 'Interactive State' }}
              </Badge>
            </div>

            <div class="space-y-2">
              <h1
                data-testid="shadcn-spike-title"
                class="font-display text-3xl tracking-tight text-clay sm:text-4xl"
              >
                shadcn-vue 基础组件验证
              </h1>
              <p class="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                这个临时页面用于集中验证 Button、Avatar、Select、Badge、Card、Checkbox、Dialog、Input
                的基础可用性、组合方式和交互状态。
              </p>
            </div>
          </div>

          <Card class="w-full max-w-sm border-border/70 bg-background/70 py-4">
            <CardHeader class="px-4 pb-0">
              <CardTitle class="text-sm">Live Summary</CardTitle>
              <CardDescription>页面状态由左侧控制面板驱动。</CardDescription>
            </CardHeader>
            <CardContent class="px-4 pt-4">
              <p
                data-testid="summary-text"
                class="text-sm leading-6 text-foreground"
              >
                {{ summaryText }}
              </p>
            </CardContent>
          </Card>
        </div>
      </header>

      <main class="grid flex-1 gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <Card class="h-fit border-border/70 bg-card/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle>State Cockpit</CardTitle>
            <CardDescription>
              用本地状态切换各个 shadcn-vue 组件的展示结果。
            </CardDescription>
          </CardHeader>

          <CardContent class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium">Input · Profile name</label>
              <Input
                data-testid="profile-name-input"
                v-model="profileName"
                placeholder="Type a profile name"
                :disabled="controlsDisabled"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium">Select · Working role</label>
              <Select v-model:model-value="selectedRole" :disabled="controlsDisabled">
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

            <div class="rounded-xl border border-border/70 bg-background/60 p-4">
              <div class="flex items-start gap-3">
                <Checkbox
                  id="notifications"
                  v-model:model-value="notificationsEnabled"
                  :disabled="controlsDisabled"
                  class="mt-0.5"
                />
                <div class="space-y-1">
                  <label class="text-sm font-medium" for="notifications">
                    Checkbox · Notifications
                  </label>
                  <p class="text-xs leading-5 text-muted-foreground">
                    验证勾选态、禁用态和摘要联动。
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <p class="text-sm font-medium">Button · Variant</p>
              <div class="flex flex-wrap gap-2">
                <Button
                  v-for="variant in buttonVariants"
                  :key="variant"
                  type="button"
                  size="sm"
                  :variant="buttonVariant === variant ? 'default' : 'outline'"
                  @click="buttonVariant = variant"
                >
                  {{ variant }}
                </Button>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <p class="text-sm font-medium">Button · Size</p>
              <div class="flex flex-wrap gap-2">
                <Button
                  v-for="size in buttonSizes"
                  :key="size"
                  type="button"
                  size="sm"
                  :variant="buttonSize === size ? 'secondary' : 'outline'"
                  @click="buttonSize = size"
                >
                  {{ size }}
                </Button>
              </div>
            </div>

            <div class="rounded-xl border border-border/70 bg-background/60 p-4">
              <div class="flex items-start gap-3">
                <Checkbox
                  id="avatar-preview"
                  v-model:model-value="avatarEnabled"
                  :disabled="controlsDisabled"
                  class="mt-0.5"
                />
                <div class="space-y-1">
                  <label class="text-sm font-medium" for="avatar-preview">
                    Avatar image preview
                  </label>
                  <p class="text-xs leading-5 text-muted-foreground">
                    关闭后可以直接观察 AvatarFallback。
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              class="w-full"
              @click="controlsDisabled = !controlsDisabled"
            >
              {{ controlsDisabled ? 'Unlock interactive controls' : 'Lock interactive controls' }}
            </Button>
          </CardContent>
        </Card>

        <div class="grid gap-6 xl:grid-cols-2">
          <Card class="border-border/70 bg-card/80 shadow-sm backdrop-blur xl:col-span-2">
            <CardHeader>
              <CardTitle>Button + Badge</CardTitle>
              <CardDescription>
                验证主要动作按钮、状态徽章和组件变体切换。
              </CardDescription>
              <CardAction>
                <Badge variant="outline">{{ buttonVariant }} / {{ buttonSize }}</Badge>
              </CardAction>
            </CardHeader>

            <CardContent class="flex flex-col gap-6">
              <div class="flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  :variant="buttonVariant"
                  :size="buttonSize"
                  :disabled="controlsDisabled"
                >
                  Primary Action
                </Button>
                <Button type="button" variant="secondary" size="sm" :disabled="controlsDisabled">
                  Secondary
                </Button>
                <Button type="button" variant="outline" size="sm" :disabled="controlsDisabled">
                  Outline
                </Button>
                <Button type="button" variant="destructive" size="sm" :disabled="controlsDisabled">
                  Destructive
                </Button>
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <Badge>default</Badge>
                <Badge variant="secondary">secondary</Badge>
                <Badge variant="outline">outline</Badge>
                <Badge variant="destructive">destructive</Badge>
              </div>
            </CardContent>

            <CardFooter class="px-6 pt-0">
              <p class="text-xs leading-5 text-muted-foreground">
                观察 hover、focus、active 和 disabled 状态时，不需要依赖真实后端。
              </p>
            </CardFooter>
          </Card>

          <Card class="border-border/70 bg-card/80 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle>Avatar + Identity</CardTitle>
              <CardDescription>
                验证 AvatarImage / AvatarFallback 和摘要联动。
              </CardDescription>
            </CardHeader>

            <CardContent class="flex items-start gap-4">
              <Avatar class="size-18 border border-border/70 shadow-sm">
                <AvatarImage
                  v-if="avatarEnabled"
                  :src="profileAvatarSrc"
                  :alt="profileName"
                />
                <AvatarFallback class="bg-secondary text-secondary-foreground">
                  {{ profileInitials }}
                </AvatarFallback>
              </Avatar>

              <div class="flex min-w-0 flex-1 flex-col gap-2">
                <p class="truncate text-lg font-semibold">{{ profileName }}</p>
                <p class="text-sm text-muted-foreground">{{ roleLabels[selectedRole] }}</p>
                <div class="flex flex-wrap gap-2">
                  <Badge :variant="notificationsEnabled ? 'default' : 'outline'">
                    {{ notificationsEnabled ? 'Notifications on' : 'Notifications muted' }}
                  </Badge>
                  <Badge variant="secondary">
                    {{ avatarEnabled ? 'Image enabled' : 'Fallback only' }}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card class="border-border/70 bg-card/80 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle>Input + Card Composition</CardTitle>
              <CardDescription>
                用完整 Card 结构展示表单输入结果和静态说明。
              </CardDescription>
            </CardHeader>

            <CardContent class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium">Mirrored input</label>
                <Input
                  :model-value="profileName"
                  placeholder="Mirrored field"
                  disabled
                />
              </div>

              <div class="rounded-xl border border-dashed border-border/80 bg-background/60 p-4">
                <p class="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Route contract
                </p>
                <p class="mt-2 font-mono text-sm text-foreground">
                  /__spike/shadcn-components
                </p>
              </div>
            </CardContent>

            <CardFooter class="px-6 pt-0">
              <p class="text-xs leading-5 text-muted-foreground">
                这个页面是临时验证面，不应成为默认入口。
              </p>
            </CardFooter>
          </Card>

          <Card class="border-border/70 bg-card/80 shadow-sm backdrop-blur xl:col-span-2">
            <CardHeader>
              <CardTitle>Dialog Contract</CardTitle>
              <CardDescription>
                通过 DialogTrigger、DialogTitle 和 DialogFooter 验证复合组件组合。
              </CardDescription>
            </CardHeader>

            <CardContent class="flex flex-wrap items-center justify-between gap-4">
              <div class="space-y-2">
                <p class="text-sm leading-6 text-muted-foreground">
                  当前人物卡会被带入弹窗内容，便于确认输入、徽章和按钮在 overlay 里也能正常工作。
                </p>
                <p class="font-mono text-xs text-muted-foreground">
                  Components: Button / Avatar / Select / Badge / Card / Checkbox / Dialog / Input
                </p>
              </div>

              <Dialog v-model:open="dialogOpen">
                <DialogTrigger as-child>
                  <Button type="button" :disabled="controlsDisabled">
                    Open validation dialog
                  </Button>
                </DialogTrigger>

                <DialogContent class="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Review component state</DialogTitle>
                    <DialogDescription>
                      这个弹窗只服务于 spike 验证，不连接真实数据。
                    </DialogDescription>
                  </DialogHeader>

                  <div class="grid gap-5 py-2 sm:grid-cols-[auto_minmax(0,1fr)]">
                    <Avatar class="size-16 border border-border/70">
                      <AvatarImage
                        v-if="avatarEnabled"
                        :src="profileAvatarSrc"
                        :alt="profileName"
                      />
                      <AvatarFallback class="bg-secondary text-secondary-foreground">
                        {{ profileInitials }}
                      </AvatarFallback>
                    </Avatar>

                    <div class="flex min-w-0 flex-col gap-3">
                      <Input :model-value="profileName" disabled />
                      <div class="flex flex-wrap gap-2">
                        <Badge>{{ roleLabels[selectedRole] }}</Badge>
                        <Badge :variant="notificationsEnabled ? 'secondary' : 'outline'">
                          {{ notificationsEnabled ? 'Subscribed' : 'Paused' }}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" @click="dialogOpen = false">
                      Close
                    </Button>
                    <Button type="button" @click="dialogOpen = false">
                      Confirm layout
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  </div>
</template>
