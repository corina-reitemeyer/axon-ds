# Add Component

Prompt template for scaffolding a new component in `packages/ui` from a Figma design. Fill in the variables below and paste the whole thing in to kick off the work.

## Inputs

- **Component name:** `<PascalCaseName>`
- **Figma link:** `<paste frame/selection link>`

## Prompt

Add a new `<PascalCaseName>` component to packages/ui, based on this Figma frame: `<paste frame/selection link>`.

Follow the repo's component workflow (see CLAUDE.md), confirming each step before moving to the next:

1. Check whether `manifests/<PascalCaseName>.json` exists. If not, this is the first manifest in the repo — flag that its structure is being established now, not inherited, and confirm the shape before writing it.
2. Inspect the Figma frame via the Figma MCP server — read its variables, layout, and exported code. Confirm variant property names match the manifest exactly (case-transformed only — e.g. `Primary` → `primary` — no renaming to synonyms).
3. If the frame introduces new or changed token values, update `packages/tokens/src/tokens.css` first. Don't hardcode hex/px values into the component.
4. Scaffold the component at `packages/ui/src/components/<PascalCaseName>/<PascalCaseName>.tsx`, using Tailwind utility classes wired to tokens (see `Button` for the reference pattern). Barrel-export it from `packages/ui/src/index.ts`.
5. Add a colocated `<PascalCaseName>.stories.tsx` with a story for every variant combination.
6. Run `pnpm storybook` and use the Storybook MCP server to inspect the rendered story against the Figma frame before considering the component done.
7. Add a colocated `<PascalCaseName>.test.tsx` with Vitest + React Testing Library, covering interaction behavior (not visual output): keyboard nav, focus order, and ARIA roles.
8. Confirm every size variant resolves to a hit area of at least 24×24px.
9. Check the Accessibility panel in Storybook (axe-core via `@storybook/addon-a11y`) for each story/variant and resolve violations.
10. Update `manifests/<PascalCaseName>.json` with the final variant values and defaults.

No component ships without a story and a test.
