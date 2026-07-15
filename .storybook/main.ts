import type { StorybookConfig } from "@storybook/react-vite";
import { getCodeEditorStaticDirs } from "storybook-addon-code-editor/getStaticDirs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-code-editor",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    ...getCodeEditorStaticDirs(__filename),
    { from: "./assets", to: "/" },
  ],
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="./logo.svg" />
    <link rel="shortcut icon" href="./logo.svg" />
  `,
};

export default config;
