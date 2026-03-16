import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory } from 'vue-router'

import App from '@/App.vue'
import { createAppRouter } from '@/router'
import TailwindV4Spike from '@/spikes/tailwind-v4/TailwindV4Spike.vue'

describe('Tailwind V4 Design Tokens', () => {
  describe('Color Tokens', () => {
    it('applies custom color tokens from @theme', () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证颜色令牌类存在
      const inkElement = wrapper.find('.bg-ink')
      const paperElement = wrapper.find('.bg-paper')
      const clayElement = wrapper.find('.bg-clay')
      const signalElement = wrapper.find('.bg-signal')
      const mistElement = wrapper.find('.bg-mist')

      expect(inkElement.exists()).toBe(true)
      expect(paperElement.exists()).toBe(true)
      expect(clayElement.exists()).toBe(true)
      expect(signalElement.exists()).toBe(true)
      expect(mistElement.exists()).toBe(true)
    })
  })

  describe('Font Tokens', () => {
    it('applies custom font tokens', () => {
      const wrapper = mount(TailwindV4Spike)

      const displayElement = wrapper.find('.font-display')
      const bodyElement = wrapper.find('.font-body')

      expect(displayElement.exists()).toBe(true)
      expect(bodyElement.exists()).toBe(true)
    })
  })

  describe('Shadow Tokens', () => {
    it('applies shadow-panel custom shadow', () => {
      const wrapper = mount(TailwindV4Spike)

      const shadowElement = wrapper.find('.shadow-panel')
      expect(shadowElement.exists()).toBe(true)
    })

    it('includes standard Tailwind shadow classes', () => {
      const wrapper = mount(TailwindV4Spike)

      expect(wrapper.text()).toContain('shadow-sm')
      expect(wrapper.text()).toContain('shadow-md')
      expect(wrapper.text()).toContain('shadow-lg')
      expect(wrapper.text()).toContain('shadow-xl')
    })
  })

  describe('Responsive Breakpoints', () => {
    it('renders responsive breakpoint probes', () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证响应式类存在
      const hiddenClasses = wrapper.findAll('[class*="hidden"]')
      const smClasses = wrapper.findAll('[class*="sm:"]')
      const mdClasses = wrapper.findAll('[class*="md:"]')
      const lgClasses = wrapper.findAll('[class*="lg:"]')
      const xlClasses = wrapper.findAll('[class*="xl:"]')

      expect(hiddenClasses.length).toBeGreaterThan(0)
      expect(smClasses.length).toBeGreaterThan(0)
      expect(mdClasses.length).toBeGreaterThan(0)
      expect(lgClasses.length).toBeGreaterThan(0)
      expect(xlClasses.length).toBeGreaterThan(0)
    })
  })

  describe('Interactive States', () => {
    it('includes hover state classes', () => {
      const wrapper = mount(TailwindV4Spike)

      const hoverButtons = wrapper.findAll('button[class*="hover:"]')
      expect(hoverButtons.length).toBeGreaterThan(0)
    })

    it('includes focus state classes', () => {
      const wrapper = mount(TailwindV4Spike)

      const focusElements = wrapper.findAll('[class*="focus:"]')
      expect(focusElements.length).toBeGreaterThan(0)
    })

    it('includes active state classes', () => {
      const wrapper = mount(TailwindV4Spike)

      const activeElements = wrapper.findAll('[class*="active:"]')
      expect(activeElements.length).toBeGreaterThan(0)
    })

    it('has interactive button that toggles state', async () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证存在可交互的按钮
      const buttons = wrapper.findAll('button')
      expect(buttons.length).toBeGreaterThan(3) // 至少有导航按钮和交互按钮
    })
  })

  describe('Gradients', () => {
    it('includes gradient utility classes', () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证渐变元素存在（通过查找带有渐变类的 div）
      const gradientElements = wrapper.findAll('[class*="gradient"]')
      expect(gradientElements.length).toBeGreaterThan(0)

      // 验证文本包含渐变描述
      expect(wrapper.text()).toContain('线性渐变')
      expect(wrapper.text()).toContain('三色渐变')
    })

    it('includes opacity modifiers', () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证 HTML 中包含不透明度修饰符类
      const html = wrapper.html()
      expect(html).toContain('/20')
      expect(html).toContain('/10')
    })
  })

  describe('Navigation', () => {
    it('has section navigation buttons', () => {
      const wrapper = mount(TailwindV4Spike)

      const navButtons = wrapper.findAll('nav button')
      expect(navButtons.length).toBe(6)

      const labels = navButtons.map(btn => btn.text())
      expect(labels).toContain('颜色')
      expect(labels).toContain('字体')
      expect(labels).toContain('阴影')
      expect(labels).toContain('响应式')
      expect(labels).toContain('交互')
      expect(labels).toContain('渐变')
    })

    it('can switch between sections', async () => {
      const wrapper = mount(TailwindV4Spike)

      // 验证初始活动部分是颜色
      expect((wrapper.vm as any).activeSection).toBe('colors')

      // 点击字体按钮
      const fontsButton = wrapper.findAll('nav button').find(btn => btn.text() === '字体')
      await fontsButton?.trigger('click')

      // 验证切换成功
      expect((wrapper.vm as any).activeSection).toBe('fonts')
    })
  })
})

describe('Spike Route Guard', () => {
  it('renders spike page at /__spike/tailwind-v4', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/__spike/tailwind-v4')

    expect(router.currentRoute.value.name).toBe('spike-tailwind-v4')
    expect(wrapper.text()).toContain('Tailwind CSS V4 设计令牌验证')
  })

  it('does not keep architecture validation routes in the main branch', async () => {
    const router = createAppRouter(createMemoryHistory())
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    // 未知路由应该重定向到主页
    await router.push('/unknown-route')

    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.text()).toContain('Agentic Vue3 Forge')
  })
})
