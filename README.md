# One-UI Component Library

A React component library scaffolded from Figma-derived sample components with Storybook for local development and documentation.

## Included Components

- `Button`
- `Heading`
- `Text`

## Project Structure

```text
.
├─ .storybook/
├─ src/
│  ├─ components/
│  │  ├─ Button/
│  │  └─ Typography/
│  ├─ styles/
│  └─ index.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsup.config.ts
└─ tsconfig.json
```

## Install

```bash
npm install
```

## Development

Run Storybook:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

Type-check the project:

```bash
npm run typecheck
```

Build Storybook static output:

```bash
npm run build-storybook
```

Build a local publish tarball (for testing the package in another project before publishing):

```bash
npm run pack:local
```

This builds the library and runs `npm pack`, writing `kk88-one-ui-<version>.tgz` to
`pack-output/` (gitignored). Install it in a test project with:

```bash
npm install /path/to/one-ui/pack-output/kk88-one-ui-<version>.tgz
```

## Library Usage

Install the package in your app, then import components and styles.

```tsx
import "@kk88/one-ui/styles.css";
import { Button, Heading, Text } from "@kk88/one-ui";

export function Example() {
  return (
    <div>
      <Heading level={2}>Hello</Heading>
      <Text size={2}>Component library example.</Text>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### Per-component imports (tree-shaking)

Each component also has its own subpath export, built as a standalone bundle. Importing from a
subpath guarantees only that component's code is included, even for consumers/bundlers that don't
tree-shake the main barrel (e.g. plain CJS `require`):

```tsx
import { Button } from "@kk88/one-ui/button";
import { Heading, Text } from "@kk88/one-ui/typography";
```

Importing from the root `@kk88/one-ui` entrypoint still works and is tree-shaken by modern
bundlers (webpack, Rollup, esbuild, Vite) since the package sets `"sideEffects"` correctly; the
subpaths above are for guaranteed isolation regardless of bundler.

## Export Surface

- `.` — `Button`, `Heading`, `Text` (barrel)
- `./button` — `Button` only
- `./typography` — `Heading`, `Text` only
- `./styles.css` — compiled Tailwind output
- Types from each component (`ButtonProps`, `HeadingProps`, `TextProps`, etc.)

## Notes

- Build output is generated into `dist/` with ESM, CJS, type declarations, and CSS.
- `tsup.config.ts` defines three entry points (`index`, `button`, `typography`) so each component
  compiles to its own standalone file in `dist/`; add new components there as they're added.
- Tailwind tokens are configured in `tailwind.config.js` and consumed by components.

## Release Checklist

1. Confirm `NPM_TOKEN` is set in repository secrets.
2. Update package version:

```bash
npm version patch
```

Version alternatives:

```bash
npm version minor
npm version major
```

Semver guideline:

- `patch`: bug fixes, internal refactors, non-breaking improvements.
- `minor`: backward-compatible new features or component props.
- `major`: breaking API or behavior changes.

Conventional Commits to version mapping:

- `fix:` -> `patch`
- `feat:` -> `minor`
- `feat!:` or any commit with `BREAKING CHANGE:` footer -> `major`

Examples:

- `fix(button): correct disabled loading styles`
- `feat(typography): add caption text variant`
- `feat!: rename Text tone values`
- Multiline breaking-change example:
  ```text
  feat(typography): update heading scale

  BREAKING CHANGE: Heading level 4 now uses a different size token.
  ```

3. Push commit and tag:

```bash
git push origin main --follow-tags
```

4. Wait for the `Publish` workflow in `.github/workflows/publish.yml` to complete.
5. Verify package version on npm:

```bash
npm view @kk88/one-ui version
```

Optional manual publish trigger:

- Open Actions in GitHub and run the `Publish` workflow via `workflow_dispatch`.
