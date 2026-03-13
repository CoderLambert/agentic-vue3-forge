---
name: add-test-page
description: Create a temporary standalone validation page on a spike branch when architecture or feature behavior needs isolated visual verification.
---

Use this skill when the user asks to add a standalone validation page, demo route, smoke test page, or an isolated visual verification surface.

## Branch Rule

- Do not add architecture validation pages directly on the main product branch.
- Prefer a dedicated spike branch such as `spike/tailwind-v4-lab` or `spike/router-layout-check`.
- If the current branch is intended for production-facing work, move the validation work to a spike branch before adding temporary pages or routes.

## Repo Contract

- The home route is not a test page. Keep `/` reserved for the product-facing homepage or dashboard.
- Temporary validation routes must not become the default entry path of the app.
- Keep experiment code visibly isolated under a temporary area such as `src/spikes/<topic>/`.
- Name temporary routes clearly, for example `/__spike/tailwind-v4` or `/__spike/router-layout`.
- Keep the page self-contained. Use inline mock data or local state instead of real APIs unless the feature explicitly requires integration verification.
- Add only the smallest tests needed to lock the intended architecture rule or render contract.
- Before merging back, delete one-off validation pages and routes unless they provide lasting regression value.

## What Can Merge Back

- Skill updates
- Reusable scaffolding
- Naming and routing conventions
- Minimal contract tests that protect the final architecture
- Documentation or comments that clarify the validated rule

## Implementation Rules

- Make the verification visual. A test page is not a prose document.
- Prefer deterministic state toggles so the reviewer can force each state on demand.
- If the feature introduces styles or tokens, show the exact utility classes in the spike page.
- If the feature introduces interaction, include hover, focus, active, or toggled states.
- If the feature introduces responsive behavior, include a breakpoint probe.
- End the spike by extracting conclusions, then remove temporary assets from the merge candidate.

## Validation

- Run `pnpm test:unit -- --run`.
- Run `pnpm build` when routes, styles, or utility classes change.
