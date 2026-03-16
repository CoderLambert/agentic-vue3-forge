/**
 * 测试和 Spike 路由配置
 *
 * 此文件集中管理所有用于开发验证、视觉测试和架构验证的临时路由。
 * 所有测试路由使用统一的 `/__spike` 前缀，便于识别和清理。
 *
 * 命名约定:
 * - `/__spike/<feature-name>` - 用于特定功能的验证页面
 * - `/__test/<component-name>` - 用于组件级别的测试页面
 * - `/__lab/<experiment-name>` - 用于实验性功能的验证页面
 */

import type { RouteRecordRaw } from 'vue-router'

/**
 * 测试路由统一前缀
 * 使用双下划线前缀确保路由不会与产品路由冲突
 */
const SPIKE_PREFIX = '/__spike'
const TEST_PREFIX = '/__test'
const LAB_PREFIX = '/__lab'

/**
 * Spike 路由列表
 *
 * 添加新的测试页面时，在此处注册路由。
 * 路由路径应遵循: `${SPIKE_PREFIX}/${feature-name}` 格式
 */
export const spikeRoutes: RouteRecordRaw[] = [
  {
    path: `${SPIKE_PREFIX}/tailwind-v4`,
    name: 'spike-tailwind-v4',
    component: () => import('@/spikes/tailwind-v4/TailwindV4Spike.vue'),
    meta: {
      type: 'spike',
      description: 'Tailwind CSS V4 设计令牌验证',
      createdAt: '2026-03-16',
    },
  },
  // 在此添加更多 spike 路由...
  // {
  //   path: `${SPIKE_PREFIX}/router-layout`,
  //   name: 'spike-router-layout',
  //   component: () => import('@/spikes/router-layout/RouterLayoutSpike.vue'),
  //   meta: {
  //     type: 'spike',
  //     description: '路由布局验证',
  //   },
  // },
]

/**
 * 测试路由列表
 *
 * 用于组件级别的测试页面
 */
export const testRoutes: RouteRecordRaw[] = [
  // 示例:
  // {
  //   path: `${TEST_PREFIX}/button`,
  //   name: 'test-button',
  //   component: () => import('@/tests/components/ButtonTest.vue'),
  //   meta: {
  //     type: 'test',
  //     description: 'Button 组件测试页面',
  //   },
  // },
]

/**
 * Lab 实验路由列表
 *
 * 用于实验性功能的验证
 */
export const labRoutes: RouteRecordRaw[] = [
  // 示例:
  // {
  //   path: `${LAB_PREFIX}/dark-mode`,
  //   name: 'lab-dark-mode',
  //   component: () => import('@/labs/dark-mode/DarkModeLab.vue'),
  //   meta: {
  //     type: 'lab',
  //     description: '暗色模式实验',
  //   },
  // },
]

/**
 * 合并所有测试路由
 *
 * 使用 Object.freeze 防止意外修改
 */
export const allTestRoutes: Readonly<RouteRecordRaw[]> = Object.freeze([
  ...spikeRoutes,
  ...testRoutes,
  ...labRoutes,
])

/**
 * 工具函数：获取所有测试路由的路径列表
 */
export function getTestRoutePaths(): string[] {
  return allTestRoutes.map(route => route.path as string)
}

/**
 * 工具函数：检查路径是否为测试路由
 */
export function isTestRoute(path: string): boolean {
  return (
    path.startsWith(SPIKE_PREFIX) ||
    path.startsWith(TEST_PREFIX) ||
    path.startsWith(LAB_PREFIX)
  )
}

/**
 * 工具函数：获取测试路由前缀类型
 */
export function getRoutePrefixType(path: string): 'spike' | 'test' | 'lab' | null {
  if (path.startsWith(SPIKE_PREFIX)) return 'spike'
  if (path.startsWith(TEST_PREFIX)) return 'test'
  if (path.startsWith(LAB_PREFIX)) return 'lab'
  return null
}
