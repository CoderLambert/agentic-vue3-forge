<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import { featureTestPages, type FeatureTestPage } from '@/features/test-lab/registry'

const route = useRoute()

const currentPage = computed(() => route.meta.page as FeatureTestPage | undefined)
const currentRouteName = computed(() => route.name?.toString() ?? '')

const labRules = [
  {
    title: '独立成页',
    description: '每个新功能单独放一个验证页，不把实验代码混进业务组件。',
  },
  {
    title: '覆盖关键态',
    description: '至少展示默认态、交互态、响应式或边界态中的三类证据。',
  },
  {
    title: '配最小单测',
    description: '注册表和关键文案要能被 Vitest 扫到，防止约定失效。',
  },
]
</script>

<template>
  <div class="min-h-screen">
    <div
      class="mx-auto flex min-h-screen max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:px-8 lg:py-8"
    >
      <aside
        class="flex w-full shrink-0 flex-col gap-5 rounded-[32px] border border-paper/15 bg-paper/8 p-5 shadow-panel backdrop-blur-sm lg:w-[320px]"
      >
        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.36em] text-paper/55">Forge Validation Lab</p>
          <div class="space-y-2">
            <h1 class="font-display text-3xl leading-none text-paper sm:text-4xl">功能验证台</h1>
            <p class="max-w-sm text-sm leading-6 text-paper/70">
              为每个新能力留一个可视化、可交互、可回归的最小验证页。
            </p>
          </div>
        </div>

        <nav class="space-y-3">
          <RouterLink
            v-for="page in featureTestPages"
            :key="page.slug"
            :to="{ name: page.slug }"
            class="group block rounded-[24px] border px-4 py-4 transition duration-200"
            :class="
              currentRouteName === page.slug
                ? 'border-signal/45 bg-signal/16 text-paper'
                : 'border-paper/12 bg-paper/6 text-paper/70 hover:border-paper/25 hover:bg-paper/10 hover:text-paper'
            "
          >
            <div class="flex items-start justify-between gap-3">
              <div class="space-y-2">
                <p class="font-display text-xl leading-none">{{ page.title }}</p>
                <p class="text-sm leading-6 opacity-80">{{ page.summary }}</p>
              </div>
              <span
                class="rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.28em]"
                :class="
                  page.status === 'ready'
                    ? 'border-signal/35 bg-signal/12 text-paper'
                    : 'border-clay/30 bg-clay/15 text-paper/80'
                "
              >
                {{ page.status }}
              </span>
            </div>
          </RouterLink>
        </nav>

        <section class="space-y-3 rounded-[28px] border border-paper/12 bg-ink/35 p-4">
          <p class="text-xs uppercase tracking-[0.32em] text-paper/45">规则</p>
          <div
            v-for="rule in labRules"
            :key="rule.title"
            class="rounded-[20px] border border-paper/8 bg-paper/6 p-3"
          >
            <p class="font-display text-lg text-paper">{{ rule.title }}</p>
            <p class="mt-1 text-sm leading-6 text-paper/70">{{ rule.description }}</p>
          </div>
        </section>
      </aside>

      <main class="flex min-w-0 flex-1 flex-col gap-5">
        <header
          class="overflow-hidden rounded-[32px] border border-paper/14 bg-paper/90 text-ink shadow-panel"
        >
          <div
            class="grid gap-5 p-6 sm:p-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] xl:items-end"
          >
            <div class="space-y-4">
              <p class="text-xs uppercase tracking-[0.34em] text-ink/45">
                Current Validation Target
              </p>
              <div class="space-y-3">
                <h2 class="font-display text-4xl leading-none text-balance sm:text-5xl">
                  {{ currentPage?.title ?? 'No page selected' }}
                </h2>
                <p class="max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
                  {{
                    currentPage?.goal ?? 'Add a page in the registry to start validating a feature.'
                  }}
                </p>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
                <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Pages</p>
                <p class="mt-3 font-display text-3xl">{{ featureTestPages.length }}</p>
                <p class="mt-1 text-sm text-ink/55">一个功能，一张验证页。</p>
              </div>
              <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
                <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Checks</p>
                <p class="mt-3 font-display text-3xl">{{ currentPage?.checks.length ?? 0 }}</p>
                <p class="mt-1 text-sm text-ink/55">默认要点，直接可见。</p>
              </div>
              <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
                <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Status</p>
                <p class="mt-3 font-display text-3xl uppercase">
                  {{ currentPage?.status ?? 'draft' }}
                </p>
                <p class="mt-1 text-sm text-ink/55">准备好后再并入业务页。</p>
              </div>
            </div>
          </div>
        </header>

        <RouterView />
      </main>
    </div>
  </div>
</template>
