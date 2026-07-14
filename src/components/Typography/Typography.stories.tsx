import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text } from "./Typography";

const meta: Meta<typeof Heading> = {
  title: "Components/Typography",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-3 min-w-[540px]">
      <Heading level={1}>Headline 1</Heading>
      <Heading level={2}>Headline 2</Heading>
      <Heading level={3}>Headline 3</Heading>
      <Heading level={4}>Headline 4</Heading>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-2 min-w-[540px]">
      <Text size={1}>Body 1 text for long form content and intros.</Text>
      <Text size={2}>Body 2 text for regular paragraphs and labels.</Text>
      <Text size={3}>Body 3 text for helper copy and annotations.</Text>
      <Text size={2} tone="grey">Secondary tone text using neutral grey token.</Text>
      <Text size={2} tone="lgrey">Tertiary tone text using light grey token.</Text>
    </div>
  ),
};
