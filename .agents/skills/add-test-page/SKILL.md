---
name: add-test-page
description: Add a standalone feature validation page to this repo when a new capability needs a demo, smoke test, or isolated basic functional verification.
---

Use this skill when the user asks to add a standalone validation page, demo route, smoke test page, or a basic feature verification page.

## Read First

- `src/features/test-lab/registry.ts`
- `src/features/test-lab/components/TestLabShell.vue`
- `src/features/test-lab/pages/TailwindV4TestPage.vue`
- `src/features/test-lab/__tests__/registry.spec.ts`

## Repo Contract

- The home route is not a test page. Keep `/` reserved for the product-facing homepage or dashboard.
- Keep the shell generic. Do not add feature-specific content to `src/App.vue` or `src/features/test-lab/components/TestLabShell.vue`.
- Create one page component per feature under `src/features/test-lab/pages/<FeatureName>TestPage.vue`.
- Register the page in `src/features/test-lab/registry.ts`. Routes are generated from the registry, so the slug becomes the URL name.
- Test pages must live under `/lab/<slug>` and stay isolated from homepage concerns.
- Keep the page self-contained. Use inline mock data or local state instead of real APIs unless the feature explicitly requires integration verification.
- Add or update tests so the registry contract and the new page's key text remain discoverable by Vitest.

## Required Metadata

Every registry item must provide:

- `slug`: unique kebab-case identifier
- `title`: short feature name
- `summary`: one-line scope statement
- `goal`: explicit validation target
- `checks`: at least 3 visible requirements
- `manualChecks`: at least 2 browser actions or observations
- `status`: `ready` or `draft`
- `component`: the Vue page component

## Page Shape

Each test page should include these sections:

1. A hero block that states what is being validated.
2. A live demo area that exposes the core feature.
3. Evidence cards for key states, variants, or edge cases.
4. A checklist area that mirrors `checks` and `manualChecks`.
5. A success criterion that says what counts as "working".

## Implementation Rules

- Make the verification visual. A test page is not a prose document.
- Prefer deterministic state toggles so the reviewer can force each state on demand.
- If the feature introduces styles or tokens, show the exact utility classes in the page.
- If the feature introduces interaction, include hover, focus, active, or toggled states.
- If the feature introduces responsive behavior, include a breakpoint probe.
- If the feature is not ready, keep the page status at `draft` instead of hiding incomplete coverage.

## Validation

- Run `pnpm test:unit -- --run`.
- Run `pnpm build` when routes, styles, or utility classes change.
