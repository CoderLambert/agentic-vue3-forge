import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory } from 'vue-router'

import App from '@/App.vue'
import { createAppRouter } from '@/router'
import ShadcnComponentsSpike from '@/spikes/shadcn-components/ShadcnComponentsSpike.vue'

describe('shadcn component spike page', () => {
  it('renders the requested component surface', () => {
    const wrapper = mount(ShadcnComponentsSpike)

    expect(wrapper.get('[data-testid="shadcn-spike-title"]').text()).toContain(
      'shadcn-vue 基础组件验证',
    )
    expect(wrapper.get('[data-testid="summary-text"]').text()).toContain('Forge Operator')
    expect(wrapper.text()).toContain('Button / Avatar / Select / Badge / Card / Checkbox / Dialog / Input')
  })

  it('updates the summary when the input changes', async () => {
    const wrapper = mount(ShadcnComponentsSpike)

    await wrapper.get('[data-testid="profile-name-input"]').setValue('Dialog Pilot')

    expect(wrapper.get('[data-testid="summary-text"]').text()).toContain('Dialog Pilot')
  })
})

describe('shadcn spike route', () => {
  it('renders the spike page at /__spike/shadcn-components', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/__spike/shadcn-components')
    await flushPromises()

    expect(router.currentRoute.value.name).toBe('spike-shadcn-components')
    expect(wrapper.text()).toContain('shadcn-vue 基础组件验证')
  })
})
