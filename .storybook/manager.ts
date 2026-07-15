import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "One-UI",
  brandUrl: "https://github.com/kk808/one-ui",
  brandImage: "./logo.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
