---
name: shadcn
description: Manages shadcn-vue components and projects in Vue 3 apps — initializing, adding, updating, styling, and composing UI in components.json-based repositories.
user-invocable: false
---

# shadcn-vue

Use this skill only for Vue 3 repositories that manage UI with `shadcn-vue`.

> Run commands with the project's package runner: `npx shadcn-vue@latest`, `pnpm dlx shadcn-vue@latest`, or `bunx --bun shadcn-vue@latest`.

## Use This Skill When

- The repository is a Vue 3 app.
- The user wants to initialize, add, update, or fix `shadcn-vue` components.
- The repository contains `components.json` or a `src/components/ui` directory.

## Current Project Context

```text
!`npx shadcn-vue@latest info 2>/dev/null || echo 'No shadcn-vue project found. Run shadcn-vue init first.'`
```

## Workflow

1. Run `npx shadcn-vue@latest info`.
2. Check `components.json` and the existing `src/components/ui` directory before adding anything.
3. Add components with `npx shadcn-vue@latest add <component>...`.
4. Review generated files under `src/components/ui/<name>/`.
5. Before overwriting an existing component, run `npx shadcn-vue@latest diff <component>`.
6. Only overwrite after explicit approval.
7. Verify with `pnpm build` or `vue-tsc --build`.

## Configuration Checks

- `components.json` should use `$schema: "https://shadcn-vue.com/schema.json"`.
- Keep `tailwind.css` pointing at the project's real global stylesheet.
- Alias maps should match the repository. Typical keys are `components`, `ui`, `utils`, `lib`, and `composables`.
- Generated UI components should be Vue component directories such as `src/components/ui/button/Button.vue` plus `src/components/ui/button/index.ts`.
- If `components.json` contains unsupported keys such as `rsc`, `tsx`, `rtl`, `menuColor`, or `menuAccent`, fix the configuration before adding components.

## Working Rules

- Use existing components before writing custom markup.
- Use alias imports such as `@/components/ui/button`.
- Prefer component variants and semantic tokens over raw colors.
- Use `class` for layout and spacing, not to restyle component internals.
- Use `gap-*` instead of `space-x-*` or `space-y-*`.
- Use `size-*` when width and height are equal.
- Use `truncate` instead of long overflow utility combinations.
- Use `cn()` for conditional class merging.
- `Avatar` should include `AvatarFallback`.
- `Dialog` should include `DialogTitle`.
- `SelectItem` should be placed inside `SelectGroup`.
- Use full `Card` composition when the subparts exist: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.

## Common Checks After `add`

- The generated files are `.vue` files with `index.ts` re-exports.
- Imports use project aliases instead of hard-coded relative paths.
- Required dependencies are present in `package.json`.
- The global CSS file still matches `components.json`.
- The build still passes.

## Quick Reference

```bash
npx shadcn-vue@latest info
npx shadcn-vue@latest init --force
npx shadcn-vue@latest add button card dialog input
npx shadcn-vue@latest diff button
```

## References

- [cli.md](./cli.md) — `shadcn-vue` command reference
