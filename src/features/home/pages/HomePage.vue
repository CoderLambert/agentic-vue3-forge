<script setup lang="ts">
const operatingPrinciples = [
  {
    title: 'Primary branch stays clean',
    detail: '当前分支只放正式架构和业务代码，不承接一次性验证页面。',
  },
  {
    title: 'Spike first for architecture',
    detail: '框架、样式链路、目录试验先去 spike 分支验证，确认后只回收规则沉淀。',
  },
  {
    title: 'Keep only reusable residue',
    detail: '合回主线的应该是 skill、约定、脚手架和必要 contract test，而不是实验页面。',
  },
]

const nextSteps = [
  '补正式首页导航和业务模块入口',
  '为核心模块定义最小 contract test',
  '把架构验证流程固化到 spike 分支约定里',
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
                  主分支先保持纯净，架构验证放到独立 spike 分支。
                </h1>
                <p class="max-w-2xl text-sm leading-7 text-ink/68 sm:text-base">
                  这个首页先承担项目定位和正式入口。临时实验、样式验证、路由试探都不直接留在当前分支，
                  只把最终确认过的规则和可复用结构带回来。
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <span
                class="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-[0.24em] text-paper"
              >
                Mainline Ready
              </span>
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
                <p class="font-display text-3xl leading-none text-paper">Spike-driven validation</p>
                <p class="mt-3 text-sm leading-7 text-paper/68">
                  架构试验不常驻主线。需要 smoke page 时，去 `spike/*` 分支开临时页面和路由。
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
