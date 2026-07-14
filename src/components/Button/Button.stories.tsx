import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "inline-radio",
      options: ["lg", "md", "sm"],
    },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "lg",
    isLoading: false,
    disabled: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 min-w-[360px]">
      <div className="flex gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div className="flex gap-3">
        <Button size="lg">Large</Button>
        <Button size="md">Medium</Button>
        <Button size="sm">Small</Button>
      </div>
      <div className="flex gap-3">
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
};
