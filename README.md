# axon-ds

A React design-system component library, built as a Turborepo + pnpm monorepo.

## Stack

- **React 19** components, bundled with **tsup** (ESM + CJS + `.d.ts`)
- **Tailwind CSS v4** (CSS-first `@theme` config) bound to a token layer of CSS custom properties in `packages/tokens`
- **Storybook** (`@storybook/react-vite`) for component development and docs
- **Vitest** + **React Testing Library** for unit tests
- **Turborepo** + **pnpm workspaces** for the monorepo, **ESLint 9** (flat config) + Prettier for linting/formatting

## Structure

```
apps/storybook       Storybook host — stories are colocated in packages/ui
packages/ui           React components
packages/tokens        Design tokens as CSS custom properties (synced from Figma)
packages/typescript-config  Shared tsconfig bases
packages/eslint-config      Shared flat ESLint config
```

## Getting started

```sh
pnpm install
pnpm dev          # starts Storybook at http://localhost:6006 and tsup --watch for packages/ui
```

Other scripts (all run via Turborepo across the workspace):

```sh
pnpm build        # build every package (tsup) and the Storybook static site
pnpm lint
pnpm typecheck
pnpm test
pnpm storybook    # just the Storybook dev server
```

## Design tokens → components → stories workflow

1. Pull the latest values from Figma variables (via the Figma MCP server) into `packages/tokens/src/tokens.css`.
2. Consume tokens in `packages/ui` components through the Tailwind theme mapping in `packages/ui/src/styles.css`.
3. Add or update the component in `packages/ui/src/components/<Name>` with a colocated `.stories.tsx` file.
4. Verify visually in Storybook (`pnpm storybook`), which also exposes an MCP endpoint at `/mcp` for AI-assisted verification — see `CLAUDE.md`.

## Publishing

Not set up yet — packages are consumed via pnpm workspace linking only. When ready to publish, add [Changesets](https://github.com/changesets/changesets) for versioning and a release workflow.
