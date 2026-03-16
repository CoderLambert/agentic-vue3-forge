<template>
  <div class="min-h-screen bg-ink text-paper p-8">
    <header class="mb-8 border-b border-mist pb-4">
      <h1 class="font-display text-3xl text-clay">Tailwind CSS V4 设计令牌验证</h1>
      <p class="mt-2 font-body text-mist">Spike 测试页面 - 仅用于开发验证</p>
      <nav class="mt-4 flex gap-2">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="activeSection = section.id"
          class="rounded px-3 py-1 text-sm transition-colors"
          :class="activeSection === section.id ? 'bg-signal text-ink' : 'bg-mist/20 hover:bg-mist/30'"
        >
          {{ section.label }}
        </button>
      </nav>
    </header>

    <main class="space-y-12">
      <!-- 1. 颜色令牌验证 -->
      <section v-show="activeSection === 'colors'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">颜色令牌</h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div class="bg-ink rounded p-4 shadow-panel">
            <div class="h-16 rounded bg-ink border border-mist" />
            <code class="text-xs text-mist">bg-ink</code>
          </div>
          <div class="bg-paper text-ink rounded p-4 shadow-panel">
            <div class="h-16 rounded bg-paper border border-mist" />
            <code class="text-xs text-mist">bg-paper</code>
          </div>
          <div class="bg-clay rounded p-4 shadow-panel">
            <div class="h-16 rounded bg-clay border border-mist" />
            <code class="text-xs text-mist">bg-clay</code>
          </div>
          <div class="bg-signal rounded p-4 shadow-panel">
            <div class="h-16 rounded bg-signal border border-mist" />
            <code class="text-xs text-mist">bg-signal</code>
          </div>
          <div class="bg-mist rounded p-4 shadow-panel">
            <div class="h-16 rounded bg-mist border border-mist" />
            <code class="text-xs text-mist">bg-mist</code>
          </div>
        </div>
      </section>

      <!-- 2. 字体令牌验证 -->
      <section v-show="activeSection === 'fonts'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">字体令牌</h2>
        <div class="space-y-4">
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-display text-2xl">Display 字体</h3>
            <p class="font-display text-lg text-mist">
              Iowan Old Style, Palatino Linotype, Book Antiqua
            </p>
            <code class="text-xs text-mist">font-display</code>
          </div>
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-body text-2xl">Body 字体</h3>
            <p class="font-body text-lg text-mist">
              Avenir Next, Segoe UI, Helvetica Neue
            </p>
            <code class="text-xs text-mist">font-body</code>
          </div>
        </div>
      </section>

      <!-- 3. 阴影令牌验证 -->
      <section v-show="activeSection === 'shadows'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">阴影令牌</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-paper text-ink rounded p-8" style="box-shadow: var(--shadow-panel)">
            <p class="font-display">Panel Shadow</p>
            <code class="text-xs text-mist">shadow-panel (custom)</code>
            <p class="mt-2 text-sm text-mist">0 28px 90px -36px rgba(15, 23, 42, 0.55)</p>
          </div>
          <div class="bg-paper/10 rounded p-4">
            <h4 class="font-body text-sm text-signal">标准 Tailwind 阴影</h4>
            <div class="mt-2 space-y-2">
              <div class="bg-paper text-ink rounded p-4 shadow-sm">shadow-sm</div>
              <div class="bg-paper text-ink rounded p-4 shadow-md">shadow-md</div>
              <div class="bg-paper text-ink rounded p-4 shadow-lg">shadow-lg</div>
              <div class="bg-paper text-ink rounded p-4 shadow-xl">shadow-xl</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 响应式断点验证 -->
      <section v-show="activeSection === 'breakpoints'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">响应式断点</h2>
        <div class="bg-paper/10 rounded p-4">
          <h3 class="font-body text-lg text-signal">当前视口探测</h3>
          <div class="mt-4 grid gap-2">
            <div class="block sm:hidden rounded bg-signal/20 px-3 py-2 text-center">
              Mobile (&lt;640px)
            </div>
            <div class="hidden sm:block md:hidden rounded bg-clay/20 px-3 py-2 text-center">
              Tablet (640px - 768px)
            </div>
            <div class="hidden md:block lg:hidden rounded bg-signal/20 px-3 py-2 text-center">
              Small Desktop (768px - 1024px)
            </div>
            <div class="hidden lg:block xl:hidden rounded bg-clay/20 px-3 py-2 text-center">
              Desktop (1024px - 1280px)
            </div>
            <div class="hidden xl:block rounded bg-signal/20 px-3 py-2 text-center">
              Large Desktop (&gt;1280px)
            </div>
          </div>
          <div class="mt-4 grid grid-cols-5 gap-1 text-center text-xs">
            <div class="rounded bg-mist/20 py-1">默认</div>
            <div class="rounded bg-mist/20 py-1">sm<br/>640px</div>
            <div class="rounded bg-mist/20 py-1">md<br/>768px</div>
            <div class="rounded bg-mist/20 py-1">lg<br/>1024px</div>
            <div class="rounded bg-mist/20 py-1">xl<br/>1280px</div>
          </div>
        </div>
      </section>

      <!-- 5. 交互状态验证 -->
      <section v-show="activeSection === 'interactive'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">交互状态</h2>
        <div class="space-y-4">
          <!-- 按钮状态 -->
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-body text-sm text-signal">按钮状态</h3>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                class="rounded bg-signal px-4 py-2 font-body text-ink transition-colors hover:bg-clay focus:outline-none focus:ring-2 focus:ring-signal active:scale-95"
              >
                主要按钮 (hover/focus/active)
              </button>
              <button
                class="rounded border border-mist px-4 py-2 font-body transition-colors hover:bg-mist/20 focus:outline-none focus:ring-2 focus:ring-mist active:bg-mist/30"
              >
                次要按钮
              </button>
              <button
                class="rounded bg-paper px-4 py-2 font-body text-ink transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-clay active:scale-90"
              >
                缩放按钮
              </button>
            </div>
          </div>

          <!-- 链接状态 -->
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-body text-sm text-signal">链接状态</h3>
            <div class="mt-2 space-x-2">
              <a href="#" class="text-signal hover:text-clay focus:underline">
                悬停变色链接
              </a>
              <a href="#" class="border-b border-signal hover:border-clay focus:outline-none focus:ring-1 focus:ring-signal">
                带下划线链接
              </a>
            </div>
          </div>

          <!-- 输入框状态 -->
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-body text-sm text-signal">输入框状态</h3>
            <div class="mt-2 space-y-2">
              <input
                v-model="inputValue"
                type="text"
                placeholder="聚焦查看状态变化"
                class="w-full max-w-md rounded border border-mist bg-paper px-3 py-2 transition-colors focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
              />
              <p class="text-sm text-mist">输入内容：{{ inputValue || '(空)' }}</p>
            </div>
          </div>

          <!-- 切换状态 -->
          <div class="bg-paper/10 rounded p-4">
            <h3 class="font-body text-sm text-signal">切换状态</h3>
            <div class="mt-2 flex items-center gap-4">
              <button
                @click="toggled = !toggled"
                class="rounded px-4 py-2 font-body transition-colors"
                :class="toggled ? 'bg-signal text-ink' : 'bg-mist/20 hover:bg-mist/30'"
              >
                {{ toggled ? '已开启' : '已关闭' }}
              </button>
              <label class="flex cursor-pointer items-center gap-2">
                <input
                  v-model="checkboxChecked"
                  type="checkbox"
                  class="h-4 w-4 accent-signal"
                />
                <span class="font-body">复选框</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 渐变和背景 -->
      <section v-show="activeSection === 'gradients'" class="space-y-4">
        <h2 class="font-display text-xl text-signal">渐变和背景</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div
            class="h-32 rounded bg-gradient-to-r from-signal/20 to-clay/20 p-4"
          >
            <p class="font-body">线性渐变 (from-signal/20 to-clay/20)</p>
          </div>
          <div
            class="h-32 rounded bg-gradient-to-br from-signal/30 via-clay/20 to-mist/10 p-4"
          >
            <p class="font-body">三色渐变 (signal → clay → mist)</p>
          </div>
          <div
            class="h-32 rounded bg-gradient-to-t from-ink via-paper/5 to-signal/10 p-4"
          >
            <p class="font-body">垂直渐变 (bottom to top)</p>
          </div>
          <div
            class="h-32 rounded bg-radial-gradient from-signal/20 to-transparent p-4"
          >
            <p class="font-body">径向渐变</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="mt-12 border-t border-mist pt-4 text-center text-sm text-mist">
      <p>Tailwind CSS V4 Spike 测试页面 | 此页面仅用于开发验证</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref<'colors' | 'fonts' | 'shadows' | 'breakpoints' | 'interactive' | 'gradients'>('colors')
const inputValue = ref('')
const toggled = ref(false)
const checkboxChecked = ref(false)

const sections = [
  { id: 'colors', label: '颜色' },
  { id: 'fonts', label: '字体' },
  { id: 'shadows', label: '阴影' },
  { id: 'breakpoints', label: '响应式' },
  { id: 'interactive', label: '交互' },
  { id: 'gradients', label: '渐变' },
] as const
</script>

<style scoped>
/* 径向渐变需要自定义，因为 Tailwind 默认不提供 */
.bg-radial-gradient {
  background-image: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
}
</style>
