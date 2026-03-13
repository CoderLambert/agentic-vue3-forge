import { createRouter, createWebHistory, type RouterHistory } from 'vue-router'

import HomePage from '@/features/home/pages/HomePage.vue'

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
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'home' },
      },
    ],
  })
}

const router = createAppRouter()

export default router
