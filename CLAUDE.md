# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A React component library generated from a Figma "Design System (Community)" file, published to npm as `one-ui-component-library` (One-UI), with Storybook for interactive documentation. Components (`Button`, `Heading`, `Text`) are direct translations of Figma component sets — variant/size/state props map 1:1 to Figma component properties (see comments in `Button.tsx` / `Typography.tsx` for the exact node IDs and mappings).

## Commands

```bash
npm install              # install deps
npm run typecheck        # tsc --noEmit
npm run build            # tsup src/index.ts -> dist/ (esm, cjs, d.ts, css)
npm run build:watch      # tsup in watch mode
npm run storybook        # storybook dev -p 6006
npm run build-storybook  # static Storybook build -> storybook-static/
```

There is no test runner configured — validation is typecheck + build + Storybook build, matching CI (`.github/workflows/ci.yml`). Run all three after any change to source or config.

## Architecture

- **Two copies of each component exist**: the canonical, buildable source lives in `src/components/<Name>/`; root-level files (`Button.tsx`, `Typography.tsx`) are the original Figma-generated kept for reference/compatibility and are not part of the build. When editing component behavior, edit `src/components/<Name>/` — do not rely on the root copies staying in sync.
- `index.ts` (root) re-exports `./src` for compatibility with existing references; `src/index.ts` is the real library entrypoint and the single source of truth for the public export surface (components + types). It also imports `./styles/index.css` so tsup emits `dist/index.css`.
- Component folders follow `src/components/<Name>/<Name>.tsx` + `index.ts` barrel + `<Name>.stories.tsx`, all colocated.
- Styling is Tailwind utility classes composed via plain string joins (no `cva`/`clsx`), with color and font-size tokens defined in `tailwind.config.js` — these tokens were pulled directly from Figma variable collections (Colors node `47:1045`, Typography node `27:606`) and are documented inline with their Figma names (e.g. `primary.navy` = "Primary/Navy (hover)"). Component states (hover/focus/active/disabled/loading) are handled via Tailwind's `hover:`/`focus-visible:`/`active:`/`disabled:` modifiers on a real `<button>`, not a `state` prop.
- Typography renders a mobile size by default and switches to the desktop size at the `md:` breakpoint (Figma defines separate desktop/mobile type ramps as one component).
- Build output (`dist/`) and `storybook-static/` are generated — never hand-edit them.

## Conventions (from `copilot-instructions.md`)

- Put new components under `src/components/<ComponentName>/`; export public components and types from `src/index.ts`; keep shared styles in `src/styles/`.
- Add a Storybook story (`*.stories.tsx`) demonstrating main variants/states alongside any new component.
- Preserve the current public export surface unless a task explicitly changes the API.
- Keep Storybook packages (`@storybook/*`, `storybook`) pinned to the exact same version across `package.json` to avoid peer-dependency conflicts — this has caused install failures before.
- Treat `react`/`react-dom` as peer dependencies; don't add them as direct dependencies without a strong reason.
- Update `README.md` when changing install steps, scripts, exports, or the release flow.

## Release flow

Publishing is tag/dispatch-driven (`.github/workflows/publish.yml`), not automatic on merge:

1. `npm version patch|minor|major` (patch=fixes, minor=new backward-compatible features/props, major=breaking) — follows Conventional Commits (`fix:`→patch, `feat:`→minor, `feat!:`/`BREAKING CHANGE:` footer→major).
2. `git push origin main --follow-tags`.
3. The `Publish` workflow builds and runs `npm publish --access public --provenance` using `NPM_TOKEN`, triggered by the pushed `v*` tag (or manually via `workflow_dispatch`).

Full checklist and examples are in `README.md`'s "Release Checklist" section.
