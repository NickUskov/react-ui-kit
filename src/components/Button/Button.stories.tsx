import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DemoButton = Template.bind({});
DemoButton.args = {
  content: "Demo button",
  type: "main",
  size: "medium",
};
