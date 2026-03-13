# Repository Guidelines

## Branch Intent

- Keep the main product branch clean. Do not leave temporary architecture validation pages, routes, or demo-only shells in the merge target.
- Use a dedicated `spike/<topic>` branch for architecture checks such as router experiments, Tailwind pipeline verification, layout trials, or framework integration smoke tests.
- Treat spike work as disposable by default. The spike proves a decision; it is not automatically part of the product.

## Architecture Validation Workflow

1. Create a `spike/<topic>` branch.
2. Keep temporary code isolated under `src/spikes/<topic>/`.
3. If a route is needed, use a clearly temporary path such as `/__spike/<topic>`.
4. Add only the smallest tests needed to lock the intended rule or render contract.
5. After the validation is complete, merge back only reusable residue:
   - naming or routing conventions
   - reusable scaffolding
   - minimal contract tests
   - docs or skills that capture the rule
6. Remove one-off validation pages and routes from the final merge candidate unless they provide lasting regression value.

## Routing Rules

- `/` is reserved for the product-facing homepage or dashboard.
- Temporary validation routes must never become the default app entry.
- Do not couple the homepage to spike-only experiments.

## Testing Rules

- Add tests early, but keep them proportional.
- On the main product branch, prefer minimal contract tests that protect stable architecture decisions.
- Put broad visual verification, temporary smoke pages, and exploratory state matrices on spike branches instead of the mainline.

## Skills

- The local skill `.agents/skills/add-test-page/SKILL.md` is for temporary validation work and should be applied on spike branches, not on the main product branch.
