# agentic-vue3-forge

This template should help get you started developing with Vue 3 in Vite.

A pragmatic Vue3 foundation for human-AI agentic engineering.

`agentic-vue-forge` is a Vue3 engineering base template designed for long-term collaboration between humans and AI assistants.

It focuses on:

- modular architecture
- predictable search paths
- explicit responsibility boundaries
- stable naming conventions
- query/store separation
- reusable UI composition
- testability
- review-friendly AI output
- plugin-style engineering rules

## Core goals

- predictable module structure
- clear API / Query / Mutation / Store boundaries
- scalable module growth
- maintainable Tailwind + shadcn-vue UI composition
- stable Vitest testing patterns
- Storybook-ready component documentation
- extensible skill-driven workflows for AI collaboration

## Philosophy

This template is not only a Vue3 starter.

It is an **Agentic Engineering foundation**:

- humans can understand it
- AI can continue it
- modules can scale with it
- rules can evolve without breaking the core structure

## Architecture Validation Workflow

This repo keeps architecture experiments separate from the main product branch.

- Use `spike/<topic>` branches for temporary validation pages, smoke routes, layout probes, and style-chain experiments.
- Keep spike code isolated under `src/spikes/<topic>/` and temporary routes under paths such as `/__spike/<topic>`.
- Do not turn `/` into a test page. The homepage stays product-facing.
- After a spike proves the direction, merge back only reusable outcomes: conventions, scaffolding, minimal contract tests, and documentation.
- Delete one-off validation pages and routes before merging unless they have clear long-term regression value.

## Tech stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- TanStack Query
- Axios
- Zod
- Tailwind CSS v4
- shadcn-vue
- Vitest
- Storybook

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
