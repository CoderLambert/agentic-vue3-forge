# shadcn-vue CLI Reference

Configuration is read from `components.json`.

> Run commands with the project's package runner: `npx shadcn-vue@latest`, `pnpm dlx shadcn-vue@latest`, or `bunx --bun shadcn-vue@latest`.

Only use flags that are confirmed by `shadcn-vue --help`.

## `info`

```bash
npx shadcn-vue@latest info
```

Use first. It reports framework detection, Tailwind CSS file, alias prefix, and the resolved `components.json` paths.

Supported flags:

- `--cwd <cwd>`

## `init`

```bash
npx shadcn-vue@latest init [components...] [options]
```

Use to initialize an existing Vue project for `shadcn-vue`.

Supported flags:

- `--base-color <base-color>`
- `--yes`
- `--defaults`
- `--force`
- `--cwd <cwd>`
- `--silent`
- `--css-variables`
- `--no-css-variables`
- `--no-base-style`

## `add`

```bash
npx shadcn-vue@latest add [components...] [options]
```

Use to add components by explicit name, URL, or local path.

Supported flags:

- `--yes`
- `--overwrite`
- `--cwd <cwd>`
- `--all`
- `--path <path>`
- `--silent`
- `--css-variables`
- `--no-css-variables`

Notes:

- Check `src/components/ui` before adding a component that may already exist.
- Review the generated files after `add`.
- Confirm before using `--overwrite`.

## `diff`

```bash
npx shadcn-vue@latest diff [component]
```

Use before overwriting an existing component.

Supported flags:

- `--yes`
- `--cwd <cwd>`

## Other Commands

`shadcn-vue` also exposes `migrate`, `build`, and `mcp`. Inspect their local help output before using them:

```bash
npx shadcn-vue@latest migrate --help
npx shadcn-vue@latest build --help
npx shadcn-vue@latest mcp --help
```

## Quick Reference

```bash
npx shadcn-vue@latest info
npx shadcn-vue@latest init --force
npx shadcn-vue@latest add button card dialog input
npx shadcn-vue@latest diff button
```
