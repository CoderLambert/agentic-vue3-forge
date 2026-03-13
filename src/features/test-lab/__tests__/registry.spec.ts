import { describe, expect, it } from 'vitest'

import { featureTestPages } from '@/features/test-lab/registry'

describe('feature test page registry', () => {
  it('contains at least one page', () => {
    expect(featureTestPages.length).toBeGreaterThan(0)
  })

  it('enforces the test page contract', () => {
    const seenSlugs = new Set<string>()

    for (const page of featureTestPages) {
      expect(page.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(seenSlugs.has(page.slug)).toBe(false)
      expect(page.title.trim()).not.toBe('')
      expect(page.summary.trim()).not.toBe('')
      expect(page.goal.trim()).not.toBe('')
      expect(page.status).toMatch(/^(ready|draft)$/)
      expect(page.component).toBeTruthy()
      expect(page.checks.length).toBeGreaterThanOrEqual(3)
      expect(page.manualChecks.length).toBeGreaterThanOrEqual(2)

      for (const item of [...page.checks, ...page.manualChecks]) {
        expect(item.trim()).not.toBe('')
      }

      seenSlugs.add(page.slug)
    }
  })
})
