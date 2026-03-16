import { createRouter, createWebHistory, type RouterHistory } from 'vue-router'

import HomePage from '@/features/home/pages/HomePage.vue'
import { allTestRoutes } from './test-routes'

export function createAppRouter(
  history: RouterHistory = createWebHistory(import.meta.env.BASE_URL),
) {
  return createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomePage,
      },
      // 测试和 Spike 路由 - 统一使用 `/__spike` 前缀
      ...allTestRoutes,
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'home' },
      },
    ],
  })
}

const router = createAppRouter()

export default router
