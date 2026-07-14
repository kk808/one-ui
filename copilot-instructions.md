---
applyTo: "**"
---

# Repository Instructions

This repository is a React component library with Storybook documentation.

## Project Structure

- Put source components under `src/components/<ComponentName>/`.
- Export public components and types from `src/index.ts`.
- Keep shared styles in `src/styles/`.
- Add Storybook stories next to components as `*.stories.tsx`.

## Build and Tooling

- Library builds with `tsup`.
- ESM output is `dist/index.mjs`.
- CommonJS output is `dist/index.js`.
- CSS output is emitted because `src/index.ts` imports `./styles/index.css`.
- Tailwind and PostCSS are part of the build and Storybook pipeline.

## Validation

Prefer these checks after changes:

```bash
npm run typecheck
npm run build
npm run build-storybook
```

Use `npm run storybook` for local interactive development.

## Dependency Rules

- Keep Storybook packages pinned to the same exact version to avoid peer dependency conflicts.
- Treat `react` and `react-dom` as peer dependencies unless there is a strong reason to change packaging.

## Component Library Conventions

- Preserve the current public export surface unless the task explicitly changes the API.
- When adding a component, also add a Storybook story that demonstrates its main variants and states.
- Keep changes minimal and consistent with the existing TypeScript and React style.
- Favor colocated component folders with an implementation file and `index.ts` barrel.

## Release and CI Context

- CI workflow is in `.github/workflows/ci.yml` and runs install, typecheck, build, and Storybook build.
- Publish workflow is in `.github/workflows/publish.yml` and publishes on manual dispatch or `v*` tags.
- `NPM_TOKEN` is required for publishing.

## Documentation

- Update `README.md` when changing install steps, scripts, exports, release flow, or consumer usage.
- `SUMMARY.md` is a concise history of setup work completed in this repository.
- `setup-notes.md` contains additional setup context and project-specific notes.
