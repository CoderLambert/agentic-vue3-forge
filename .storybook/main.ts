import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    '../src/components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
}

export default config
