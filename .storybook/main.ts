import type { StorybookConfig } from "@storybook/react-vite";
import { getCodeEditorStaticDirs } from "storybook-addon-code-editor/getStaticDirs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "storybook-addon-code-editor",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: [
    ...getCodeEditorStaticDirs(),
    { from: "./assets", to: "/" },
  ],

  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="./logo.svg" />
    <link rel="shortcut icon" href="./logo.svg" />
  `
};

export default config;
