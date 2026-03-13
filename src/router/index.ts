import { createRouter, createWebHistory, type RouterHistory } from 'vue-router'

import HomePage from '@/features/home/pages/HomePage.vue'
import { defaultFeatureTestPage, featureTestPages } from '@/features/test-lab/registry'

const featureTestRoutes = featureTestPages.map((page) => ({
  path: `/lab/${page.slug}`,
  name: page.slug,
  component: page.component,
  meta: { page },
}))

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
        path: '/lab',
        redirect: { name: defaultFeatureTestPage.slug },
      },
      ...featureTestRoutes,
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'home' },
      },
    ],
  })
}

const router = createAppRouter()

export default router
