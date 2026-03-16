import type { Preview } from '@storybook/vue3-vite'

import '../src/styles/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Canvas theme',
      defaultValue: 'dark',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      if (typeof document !== 'undefined') {
        const isDark = context.globals.theme === 'dark'

        document.documentElement.classList.toggle('dark', isDark)
        document.body.classList.toggle('dark', isDark)
      }

      const Story = story()

      return {
        components: { Story },
        template: `
          <div class="min-h-8 bg-background p-6 text-foreground sm:p-8">
            <Story />
          </div>
        `,
      }
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'UI',
          ['Button', 'Badge', 'Input', 'Checkbox', 'Avatar', 'Card', 'Select', 'Dialog'],
        ],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
