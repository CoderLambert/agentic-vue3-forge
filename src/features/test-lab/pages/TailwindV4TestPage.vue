<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import type { FeatureTestPage } from '@/features/test-lab/registry'

const route = useRoute()

const page = computed(() => route.meta.page as FeatureTestPage | undefined)

const density = ref<'comfortable' | 'compact'>('comfortable')
const tone = ref<'signal' | 'clay'>('signal')
const showOverlay = ref(true)

const densityLabel = computed(() =>
  density.value === 'comfortable' ? 'Comfortable spacing' : 'Compact spacing',
)

const framePaddingClass = computed(() =>
  density.value === 'comfortable' ? 'gap-5 p-6 sm:p-7' : 'gap-3 p-4 sm:p-5',
)

const previewSurfaceClass = computed(() =>
  tone.value === 'signal'
    ? 'bg-[linear-gradient(135deg,rgba(111,188,220,0.18),rgba(247,244,238,0.96))]'
    : 'bg-[linear-gradient(135deg,rgba(197,143,99,0.18),rgba(247,244,238,0.96))]',
)

const progressValue = computed(() => (density.value === 'comfortable' ? 86 : 68))

const probeCards = [
  {
    title: 'Typography token',
    detail: 'font-display + tracking-[0.32em]',
    note: '标题与正文应该有明显的气质差异，不是同一套默认字重。',
  },
  {
    title: 'State variants',
    detail: 'hover / focus-visible / peer-checked / group-hover',
    note: '悬浮、聚焦和切换时必须给出清晰反馈，方便肉眼判断状态类是否编译成功。',
  },
  {
    title: 'Arbitrary values',
    detail: 'rounded-[32px] + bg-[linear-gradient(...)]',
    note: '这类任意值最容易暴露扫描和构建问题，验证页里必须显式出现。',
  },
]

const responsiveProbes = [
  {
    label: 'Spacing',
    hint: 'px-4 sm:px-6 xl:px-8',
  },
  {
    label: 'Grid',
    hint: 'md:grid-cols-2 xl:grid-cols-4',
  },
  {
    label: 'Type',
    hint: 'text-sm sm:text-base',
  },
  {
    label: 'Visibility',
    hint: 'hidden sm:inline-flex',
  },
]
</script>

<template>
  <article v-if="page" class="grid gap-5">
    <section class="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
      <div
        class="rounded-[32px] border border-paper/14 bg-paper/92 p-6 text-ink shadow-panel sm:p-8"
      >
        <div class="space-y-6">
          <div class="space-y-3">
            <p class="text-xs uppercase tracking-[0.34em] text-ink/45">
              Tailwind CSS v4 smoke test
            </p>
            <div class="space-y-3">
              <h3 class="font-display text-4xl leading-none text-balance sm:text-5xl">
                Tailwind v4 is wired through Vite.
              </h3>
              <p class="max-w-3xl text-sm leading-7 text-ink/70 sm:text-base">
                {{ page.summary }}
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              class="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.24em]"
            >
              font-display
            </span>
            <span
              class="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.24em]"
            >
              text-signal
            </span>
            <span
              class="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.24em]"
            >
              shadow-panel
            </span>
            <span
              class="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.24em]"
            >
              rounded-[32px]
            </span>
            <span
              class="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.24em]"
            >
              peer-checked
            </span>
          </div>

          <div class="grid gap-3 lg:grid-cols-[repeat(2,minmax(0,1fr))_minmax(220px,0.9fr)]">
            <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
              <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Accent tone</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/35"
                  :class="
                    tone === 'signal'
                      ? 'border-signal/40 bg-signal/12 text-ink'
                      : 'border-ink/10 bg-white text-ink/75'
                  "
                  @click="tone = 'signal'"
                >
                  Signal accent
                </button>
                <button
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/35"
                  :class="
                    tone === 'clay'
                      ? 'border-clay/40 bg-clay/16 text-ink'
                      : 'border-ink/10 bg-white text-ink/75'
                  "
                  @click="tone = 'clay'"
                >
                  Clay accent
                </button>
              </div>
            </div>

            <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
              <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Density</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/35"
                  :class="
                    density === 'comfortable'
                      ? 'border-ink bg-ink text-paper'
                      : 'border-ink/10 bg-white text-ink/75'
                  "
                  @click="density = 'comfortable'"
                >
                  Comfortable
                </button>
                <button
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/35"
                  :class="
                    density === 'compact'
                      ? 'border-ink bg-ink text-paper'
                      : 'border-ink/10 bg-white text-ink/75'
                  "
                  @click="density = 'compact'"
                >
                  Compact
                </button>
              </div>
            </div>

            <label class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
              <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Overlay</p>
              <div class="mt-3 flex items-center justify-between gap-4">
                <span class="text-sm text-ink/75">Highlight overlay</span>
                <span class="relative inline-flex items-center">
                  <input v-model="showOverlay" type="checkbox" class="peer sr-only" />
                  <span
                    class="h-6 w-11 rounded-full bg-ink/15 transition peer-checked:bg-signal/35"
                  />
                  <span
                    class="pointer-events-none absolute left-1 top-1 size-4 rounded-full bg-paper shadow-sm transition peer-checked:translate-x-5"
                  />
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div
        :class="previewSurfaceClass"
        class="group relative overflow-hidden rounded-[32px] border border-paper/14 p-1 shadow-panel"
      >
        <div
          v-if="showOverlay"
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,199,229,0.26),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(203,153,112,0.16),transparent_34%)]"
        />

        <div
          :class="framePaddingClass"
          class="relative grid h-full rounded-[28px] border border-ink/8 bg-paper/86 backdrop-blur-sm"
        >
          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.28em]"
              :class="
                tone === 'signal'
                  ? 'border-signal/30 bg-signal/12 text-ink'
                  : 'border-clay/40 bg-clay/16 text-ink'
              "
            >
              {{ tone === 'signal' ? 'signal token' : 'clay token' }}
            </span>
            <span class="text-xs uppercase tracking-[0.28em] text-ink/45">
              {{ densityLabel }}
            </span>
          </div>

          <div class="grid gap-4 md:grid-cols-[1.45fr_0.55fr]">
            <div class="space-y-3">
              <h4 class="font-display text-3xl leading-none sm:text-4xl">
                Utilities should feel obvious.
              </h4>
              <p class="max-w-xl text-sm leading-7 text-ink/70">
                这块同时验证自定义主题 token、任意值圆角、阴影、响应式布局和状态类是否全部生效。
              </p>

              <div class="space-y-3 rounded-[24px] border border-ink/10 bg-white/65 p-4">
                <div class="flex items-center justify-between gap-3">
                  <span class="text-xs uppercase tracking-[0.28em] text-ink/45">Build signal</span>
                  <span
                    class="rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.24em] text-paper"
                  >
                    ok
                  </span>
                </div>

                <div class="h-3 overflow-hidden rounded-full bg-ink/10">
                  <div
                    class="h-full rounded-full bg-ink transition-all duration-500"
                    :style="{ width: `${progressValue}%` }"
                  />
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-ink/6 px-3 py-1 text-xs">rounded-[32px]</span>
                  <span class="rounded-full bg-ink/6 px-3 py-1 text-xs">shadow-panel</span>
                  <span class="rounded-full bg-ink/6 px-3 py-1 text-xs">sm:grid-cols-2</span>
                </div>
              </div>
            </div>

            <div class="grid gap-3">
              <div
                class="rounded-[24px] border border-ink/10 bg-ink/5 p-4 transition duration-300 group-hover:-translate-y-1"
              >
                <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Hover probe</p>
                <p class="mt-3 font-display text-2xl leading-none">group-hover</p>
                <p class="mt-2 text-sm leading-6 text-ink/70">
                  把鼠标移到整张卡上，这块应当轻微上浮。
                </p>
              </div>

              <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
                <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Focus probe</p>
                <button
                  type="button"
                  class="mt-3 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/35"
                >
                  Press Tab to focus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div
        class="rounded-[32px] border border-paper/14 bg-paper/92 p-6 text-ink shadow-panel sm:p-7"
      >
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Utility probes</p>
        <div class="mt-4 grid gap-3 md:grid-cols-3">
          <div
            v-for="probe in probeCards"
            :key="probe.title"
            class="rounded-[24px] border border-ink/10 bg-ink/5 p-4"
          >
            <p class="font-display text-2xl leading-none">{{ probe.title }}</p>
            <p
              class="mt-3 rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.24em] text-ink/60"
            >
              {{ probe.detail }}
            </p>
            <p class="mt-4 text-sm leading-7 text-ink/70">{{ probe.note }}</p>
          </div>
        </div>

        <div class="mt-6 rounded-[28px] border border-ink/10 bg-ink/5 p-4">
          <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Responsive probes</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              class="rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.24em] text-paper"
            >
              base
            </span>
            <span
              class="hidden rounded-full bg-signal px-3 py-1 text-xs uppercase tracking-[0.24em] text-ink sm:inline-flex"
            >
              sm
            </span>
            <span
              class="hidden rounded-full bg-clay px-3 py-1 text-xs uppercase tracking-[0.24em] text-ink md:inline-flex"
            >
              md
            </span>
            <span
              class="hidden rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.24em] text-paper lg:inline-flex"
            >
              lg
            </span>
            <span
              class="hidden rounded-full border border-ink/15 bg-white px-3 py-1 text-xs uppercase tracking-[0.24em] text-ink xl:inline-flex"
            >
              xl
            </span>
          </div>

          <div class="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="probe in responsiveProbes"
              :key="probe.label"
              class="rounded-[22px] border border-ink/10 bg-white/70 p-4"
            >
              <p class="font-display text-xl leading-none">{{ probe.label }}</p>
              <p class="mt-3 text-xs uppercase tracking-[0.24em] text-ink/45">{{ probe.hint }}</p>
            </div>
          </div>

          <p class="mt-4 text-sm leading-7 text-ink/70">
            拖动窗口时，上面的断点徽标会逐级出现，下面的卡片布局也会从 1 列切到 2 列和 4 列。
          </p>
        </div>
      </div>

      <div
        class="rounded-[32px] border border-paper/14 bg-paper/92 p-6 text-ink shadow-panel sm:p-7"
      >
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Checklists</p>
        <div class="mt-4 grid gap-4 xl:grid-cols-2">
          <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
            <p class="font-display text-2xl leading-none">Required checks</p>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in page.checks"
                :key="item"
                class="flex items-start gap-3 text-sm leading-7 text-ink/75"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-signal" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-[24px] border border-ink/10 bg-ink/5 p-4">
            <p class="font-display text-2xl leading-none">Manual checks</p>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in page.manualChecks"
                :key="item"
                class="flex items-start gap-3 text-sm leading-7 text-ink/75"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-clay" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-6 rounded-[24px] border border-ink/10 bg-[linear-gradient(135deg,rgba(17,24,39,0.05),rgba(199,145,108,0.16))] p-5"
        >
          <p class="text-xs uppercase tracking-[0.28em] text-ink/45">Success criteria</p>
          <p class="mt-3 max-w-2xl font-display text-3xl leading-none">
            页面有证据，不是只有说明。
          </p>
          <p class="mt-3 max-w-2xl text-sm leading-7 text-ink/70">
            如果颜色、字型、交互和响应式都能在这个页面里被快速观察到，后面给任何新功能补最小验证页都会稳定很多。
          </p>
        </div>
      </div>
    </section>
  </article>
</template>
