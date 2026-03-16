---
name: test-tailwind-v4
description: 创建 Tailwind CSS V4 的独立验证页面和测试，用于验证样式令牌、响应式行为和交互状态。
---

当需要验证 Tailwind CSS V4 的样式系统、自定义主题令牌、响应式断点或交互状态时，使用此技能。

## 分支规则

- **不要**直接在主产品分支上添加样式验证页面。
- 优先使用专用的 spike 分支，例如 `spike/tailwind-v4-lab` 或 `spike/design-tokens`。
- 如果当前分支用于生产工作，在添加临时页面或路由之前，将验证工作移至 spike 分支。

## 仓库约定

- 保持实验代码明显隔离在临时区域，例如 `src/spikes/tailwind-v4/`。
- **测试路由统一管理**：所有测试路由必须注册到 `src/router/test-routes.ts` 文件中。
- **统一路由前缀**：
  - `/__spike/<feature-name>` - 用于特定功能/架构验证页面
  - `/__test/<component-name>` - 用于组件级别测试页面
  - `/__lab/<experiment-name>` - 用于实验性功能验证页面
- 页面保持自包含。使用内联模拟数据或本地状态，而不是真实 API。
- 仅添加最小的测试来锁定样式令牌和渲染合同。
- 在合并回主分支之前，删除一次性验证页面和路由，除非它们提供持续的回归价值。

## 测试路由注册规范

### 在 `src/router/test-routes.ts` 中注册新路由

```typescript
export const spikeRoutes: RouteRecordRaw[] = [
  {
    path: `${SPIKE_PREFIX}/tailwind-v4`,  // 使用统一前缀
    name: 'spike-tailwind-v4',
    component: () => import('@/spikes/tailwind-v4/TailwindV4Spike.vue'),
    meta: {
      type: 'spike',
      description: 'Tailwind CSS V4 设计令牌验证',
      createdAt: '2026-03-16',  // 可选：记录创建日期
    },
  },
  // 添加更多路由...
]
```

### 路由文件结构

```
src/
├── router/
│   ├── index.ts              # 主路由，导入 allTestRoutes
│   └── test-routes.ts        # 测试路由统一管理文件
├── spikes/
│   └── <feature-name>/
│       └── <FeatureName>Spike.vue
└── __tests__/
    └── <feature-name>.spec.ts
```

### 主路由自动加载

`src/router/index.ts` 会自动导入并展开 `allTestRoutes`：

```typescript
import { allTestRoutes } from './test-routes'

export function createAppRouter() {
  return createRouter({
    routes: [
      { path: '/', name: 'home', component: HomePage },
      ...allTestRoutes,  // 自动包含所有测试路由
      { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
    ],
  })
}
```

## Tailwind V4 特定测试场景

### 1. 设计令牌验证

验证 `@theme` 中定义的自定义令牌是否正确应用：

```vue
<template>
  <div class="p-8 space-y-4">
    <!-- 颜色令牌 -->
    <div class="bg-ink text-paper p-4">Ink & Paper</div>
    <div class="bg-clay p-4">Clay Accent</div>
    <div class="bg-signal p-4">Signal Highlight</div>
    <div class="bg-mist p-4">Mist Background</div>

    <!-- 字体令牌 -->
    <div class="font-display text-xl">Display Font</div>
    <div class="font-body text-base">Body Font</div>

    <!-- 阴影令牌 -->
    <div class="shadow-panel p-8 bg-paper">Panel Shadow</div>
  </div>
</template>
```

### 2. 响应式断点探测

包含断点探针以验证响应式行为：

```vue
<template>
  <div class="p-4">
    <div class="hidden sm:block lg:hidden">SM only</div>
    <div class="hidden lg:block xl:hidden">LG only</div>
    <div class="hidden xl:block">XL only</div>

    <!-- 断点标签 -->
    <div class="block sm:hidden">Mobile (&lt;640px)</div>
    <div class="hidden sm:block md:hidden">Tablet (640px-768px)</div>
    <div class="hidden md:block lg:hidden">Small Desktop (768px-1024px)</div>
    <div class="hidden lg:block xl:hidden">Desktop (1024px-1280px)</div>
    <div class="hidden xl:block">Large Desktop (&gt;1280px)</div>
  </div>
</template>
```

### 3. 交互状态展示

展示悬停、焦点、激活或切换状态：

```vue
<template>
  <div class="p-8 space-y-4">
    <!-- 按钮状态 -->
    <button class="bg-signal hover:bg-clay focus:ring-2 focus:ring-signal active:scale-95 px-4 py-2">
      Interactive Button
    </button>

    <!-- 链接状态 -->
    <a href="#" class="text-signal hover:text-clay focus:underline">
      Styled Link
    </a>

    <!-- 输入框状态 -->
    <input
      class="bg-paper border border-mist focus:border-signal focus:ring-1 focus:ring-signal px-3 py-2"
      placeholder="Focus to see state"
    />
  </div>
</template>
```

### 4. 颜色方案验证

验证暗色/亮色模式支持：

```vue
<template>
  <div class="p-4">
    <div class="bg-paper text-ink dark:bg-ink dark:text-paper p-4">
      Adapts to color scheme
    </div>
  </div>
</template>
```

### 5. 渐变和背景

验证复杂背景效果：

```vue
<template>
  <div class="gradient-probe h-48 bg-gradient-to-r from-signal/20 to-clay/20" />
</template>
```

## 测试文件结构

在 `src/__tests__/` 下创建测试文件：

```typescript
// src/__tests__/tailwind-v4.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TailwindV4Spike from '@/spikes/tailwind-v4/TailwindV4Spike.vue'

describe('Tailwind V4 Design Tokens', () => {
  it('applies custom color tokens from @theme', () => {
    const wrapper = mount(TailwindV4Spike)
    const inkElement = wrapper.find('.bg-ink')
    // 验证自定义颜色令牌已应用
    expect(inkElement.classes()).toContain('bg-ink')
  })

  it('renders responsive breakpoint probes', () => {
    const wrapper = mount(TailwindV4Spike)
    // 验证响应式类已正确应用
    const probes = wrapper.findAll('[class*="hidden"]')
    expect(probes.length).toBeGreaterThan(0)
  })

  it('includes interactive state classes', () => {
    const wrapper = mount(TailwindV4Spike)
    const button = wrapper.find('button')
    expect(button.classes()).toContain('hover:bg-clay')
    expect(button.classes()).toContain('focus:ring-2')
  })
})
```

## 可以合并回主分支的内容

- 技能更新
- 可重用的样式验证工具
- 命名和路由约定
- 保护最终架构的最小合同测试
- 阐明已验证规则的文档或注释

## 实现规则

- **验证必须是视觉化的**。测试页面不是散文文档。
- 偏好确定性状态切换，以便审查者可以强制每个状态。
- 如果功能引入了样式或令牌，在 spike 页面中显示确切的实用程序类。
- 如果功能引入了交互，包括悬停、焦点、激活或切换状态。
- 如果功能引入了响应式行为，包括断点探针。
- 在 spike 结束时提取结论，然后从合并候选中删除临时资产。

## 验证步骤

1. 运行 `pnpm test:unit -- --run` 确保测试通过。
2. 运行 `pnpm build` 验证样式和路由变更可以正确构建。
3. 在开发模式下访问 `/__spike/tailwind-v4` 进行视觉验证。
4. 记录设计令牌验证结果和任何发现的问题。

## 清理清单

在删除 spike 页面之前：

- [ ] 提取已验证的设计令牌列表
- [ ] 记录任何发现的样式问题
- [ ] 确认响应式断点行为符合预期
- [ ] 验证交互状态在所有支持的状态下正常工作
- [ ] 将有用的约定或测试添加到主测试套件（如果适用）
- [ ] **从 `src/router/test-routes.ts` 中移除路由注册**
- [ ] 删除 `src/spikes/` 下的 spike 页面目录
- [ ] 删除 `src/__tests__/` 下相关的 spike 测试文件（如不适用）
