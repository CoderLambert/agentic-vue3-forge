import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory } from 'vue-router'

import App from '@/App.vue'
import { createAppRouter } from '@/router'

describe('App', () => {
  it('renders the homepage on root', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/')
    await flushPromises()

    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.text()).toContain('Agentic Vue3 Forge')
    expect(wrapper.text()).toContain('Mainline Ready')
  })

  it('does not keep architecture validation routes in the main branch', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/lab')
    await flushPromises()

    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.text()).toContain('spike 分支')
  })
})
