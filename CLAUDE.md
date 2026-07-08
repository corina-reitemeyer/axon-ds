# axon-ds

React design-system component library. Turborepo + pnpm monorepo, Tailwind CSS v4, Storybook.

## Repo map

- `packages/ui` — components live in `src/components/<Name>/<Name>.tsx`, with a colocated `<Name>.stories.tsx` and `<Name>.test.tsx`. Barrel-exported from `src/index.ts`.
- `packages/tokens` — `src/tokens.css` holds design tokens as CSS custom properties (`--axon-*`). This is the sync target for Figma variables.
- `apps/storybook` — Storybook host (`@storybook/react-vite`). Stories glob points into `packages/ui/src/**/*.stories.tsx`; nothing is authored here directly.
- `packages/ui/src/styles.css` maps Tailwind's `@theme` onto the `--axon-*` token variables — this is how token changes reach utility classes like `bg-primary-500`.

## Workflow for implementing a new component from a Figma design

1. Use the **Figma MCP** server to inspect the target frame/selection — read its variables, layout, and any exported code so component structure and token usage match the design.
2. If the frame introduces new or changed token values, update `packages/tokens/src/tokens.css` first (don't hardcode values into the component).
3. Scaffold the component under `packages/ui/src/components/<Name>/`, using Tailwind utility classes wired to tokens (see `Button` for the reference pattern).
4. Add a colocated `.stories.tsx` with stories for each meaningful variant/state.
5. Run `pnpm storybook` and use the **Storybook MCP** server (exposed at `http://localhost:6006/mcp` once running) to inspect the rendered story and confirm it matches the Figma frame before considering the component done.
6. Add a `.test.tsx` covering interaction behavior (not visual output) with Vitest + React Testing Library.

## MCP servers

- **Figma MCP** — installed as a Claude Code plugin (`figma@claude-plugins-official`), not part of this repo. Link-based: paste the Figma file/frame link you want inspected.
- **Storybook MCP** — `@storybook/addon-mcp`, registered as a project-scoped HTTP MCP server pointing at `http://localhost:6006/mcp`. Requires `pnpm storybook` (or `pnpm dev`) to be running.

## Conventions

- No component ships without a story and a test.
- Don't hand-write hex/px values in components — go through the token layer (`packages/tokens`) and Tailwind theme mapping (`packages/ui/src/styles.css`).
- Packages are workspace-linked only; nothing is published yet (see README's Publishing section).
