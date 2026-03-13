<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { defaultFeatureTestPage } from '@/features/test-lab/registry'

const operatingPrinciples = [
  {
    title: 'Structure before scale',
    detail: '先把目录、路由和约束立住，再往里持续填模块。',
  },
  {
    title: 'Visible validation',
    detail: '每个新功能都能落到单独的实验页，不把验证逻辑混进业务首页。',
  },
  {
    title: 'AI-friendly clarity',
    detail: '命名、边界和测试都保持可搜索、可接手、可回归。',
  },
]

const nextSteps = [
  '补业务首页模块和真实导航',
  '按功能继续扩展 test-lab 页面注册表',
  '逐步补上 query、store、api 的最小测试',
]
</script>

<template>
  <main class="min-h-screen">
    <section class="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid w-full gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div
          class="relative overflow-hidden rounded-[36px] border border-paper/12 bg-paper/92 p-6 text-ink shadow-panel sm:p-8 lg:p-10"
        >
          <div
            class="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-signal/18 blur-3xl"
          />
          <div
            class="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-clay/18 blur-3xl"
          />

          <div class="relative space-y-8">
            <div class="space-y-4">
              <p class="text-xs uppercase tracking-[0.36em] text-ink/45">Agentic Vue3 Forge</p>
              <div class="space-y-4">
                <h1 class="max-w-4xl font-display text-5xl leading-none text-balance sm:text-6xl">
                  Vue3 工程底座先跑起来，验证页留在侧边战场。
                </h1>
                <p class="max-w-2xl text-sm leading-7 text-ink/68 sm:text-base">
                  首页先保持干净，承载项目定位和后续导航。功能验证统一放进 test
                  lab，避免首页被临时实验内容侵占。
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <RouterLink
                :to="{ name: defaultFeatureTestPage.slug }"
                class="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-[0.24em] text-paper transition hover:-translate-y-0.5 hover:bg-ink/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
              >
                Open Validation Lab
              </RouterLink>
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-ink/12 bg-white/75 px-5 py-3 text-sm uppercase tracking-[0.24em] text-ink transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/12"
              >
                Vue Docs
              </a>
            </div>

            <div class="grid gap-3 md:grid-cols-3">
              <div
                v-for="item in operatingPrinciples"
                :key="item.title"
                class="rounded-[24px] border border-ink/10 bg-ink/5 p-4"
              >
                <p class="font-display text-2xl leading-none">{{ item.title }}</p>
                <p class="mt-3 text-sm leading-7 text-ink/70">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="grid gap-6">
          <div
            class="rounded-[32px] border border-paper/12 bg-paper/10 p-6 shadow-panel backdrop-blur-sm"
          >
            <p class="text-xs uppercase tracking-[0.32em] text-paper/48">Project state</p>
            <div class="mt-4 space-y-4">
              <div class="rounded-[24px] border border-paper/12 bg-paper/8 p-4">
                <p class="font-display text-3xl leading-none text-paper">Scaffolded</p>
                <p class="mt-3 text-sm leading-7 text-paper/68">
                  Router、Pinia、Vitest、Tailwind v4 已经接好，适合开始按模块扩展。
                </p>
              </div>
              <div class="rounded-[24px] border border-paper/12 bg-paper/8 p-4">
                <p class="font-display text-3xl leading-none text-paper">Homepage stays clean</p>
                <p class="mt-3 text-sm leading-7 text-paper/68">
                  业务入口与验证入口分离。首页以后可以换成正式 landing 或
                  dashboard，不影响测试路由。
                </p>
              </div>
            </div>
          </div>

          <div
            class="rounded-[32px] border border-paper/12 bg-paper/10 p-6 shadow-panel backdrop-blur-sm"
          >
            <p class="text-xs uppercase tracking-[0.32em] text-paper/48">Next steps</p>
            <ul class="mt-4 space-y-3">
              <li
                v-for="step in nextSteps"
                :key="step"
                class="flex items-start gap-3 rounded-[22px] border border-paper/10 bg-paper/8 p-4 text-sm leading-7 text-paper/74"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-signal" />
                <span>{{ step }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
