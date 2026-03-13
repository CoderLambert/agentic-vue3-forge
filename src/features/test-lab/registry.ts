import type { Component } from 'vue'

import TailwindV4TestPage from '@/features/test-lab/pages/TailwindV4TestPage.vue'

export type FeatureTestPageStatus = 'ready' | 'draft'

export interface FeatureTestPage {
  slug: string
  title: string
  summary: string
  goal: string
  checks: string[]
  manualChecks: string[]
  status: FeatureTestPageStatus
  component: Component
}

export const featureTestPages: FeatureTestPage[] = [
  {
    slug: 'tailwind-v4',
    title: 'Tailwind CSS v4',
    summary: 'Validate tokens, utilities, states, and responsive behavior in a single page.',
    goal: 'Confirm Tailwind CSS v4 is wired through Vite and available inside Vue SFCs.',
    checks: [
      'Custom theme tokens such as `font-display`, `text-signal`, and `shadow-panel` should render.',
      'Interactive states including `hover`, `focus-visible`, `peer-checked`, and `group-hover` should react.',
      'Responsive utilities should reveal extra badges and change the card grid as the viewport grows.',
      'Arbitrary values such as `rounded-[32px]` and `bg-[linear-gradient(...)]` should compile without missing styles.',
    ],
    manualChecks: [
      'Click the tone and density controls to verify stateful class switches update immediately.',
      'Toggle the overlay switch and confirm the preview chrome appears and disappears without layout shifts.',
      'Resize the window across `sm`, `md`, `lg`, and `xl` widths to observe the breakpoint badges and grid changes.',
    ],
    status: 'ready',
    component: TailwindV4TestPage,
  },
]

const firstFeatureTestPage = featureTestPages[0]

if (!firstFeatureTestPage) {
  throw new Error('featureTestPages must contain at least one page')
}

export const defaultFeatureTestPage: FeatureTestPage = firstFeatureTestPage
