# Setup Notes

- Storybook deps should be pinned to the same exact patch version to avoid npm peer resolution conflicts.
- Library build uses tsup with ESM output at dist/index.mjs and CJS at dist/index.js.
- src/index.ts imports ./styles/index.css so tsup emits dist/index.css for consumers.
- Repo is now a React component library with source under src/components and public exports from src/index.ts.
- Storybook is configured in .storybook/main.ts and .storybook/preview.ts; demo stories exist for Button and Typography.
- Tailwind and PostCSS are wired for both library build and Storybook; tailwind content includes src and .storybook.
- package.json now exposes a publishable package with build, build:watch, storybook, build-storybook, and typecheck scripts.
- Peer deps are react/react-dom; dev tooling includes TypeScript, tsup, Tailwind, PostCSS, and Storybook.
- Validation already passed for npm install, npm run typecheck, npm run build, and npm run build-storybook.
- CI workflow at .github/workflows/ci.yml runs npm ci, typecheck, build, and Storybook build on PRs and pushes to main.
- Publish workflow at .github/workflows/publish.yml supports manual dispatch and v* tags, and publishes to npm using NPM_TOKEN.
- README.md documents install, usage, scripts, release checklist, semver guidance, and Conventional Commits mapping.
- SUMMARY.md contains a user-facing bullet summary of all actions completed during setup.
