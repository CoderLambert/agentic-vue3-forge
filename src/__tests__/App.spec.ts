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
    expect(wrapper.text()).toContain('Open Validation Lab')
  })

  it('keeps the validation page under the lab route', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/lab')
    await flushPromises()

    expect(router.currentRoute.value.name).toBe('tailwind-v4')
    expect(wrapper.text()).toContain('Tailwind CSS v4 smoke test')
    expect(wrapper.text()).toContain('Utilities should feel obvious.')
  })
})
