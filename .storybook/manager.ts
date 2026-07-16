import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "One-UI",
  brandUrl: "https://kk808.github.io/one-ui",
  brandImage: "./logo.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
