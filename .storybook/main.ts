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
  staticDirs: [...getCodeEditorStaticDirs(__filename)],
};

export default config;
