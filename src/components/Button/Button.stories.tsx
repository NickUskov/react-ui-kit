import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  content: "Demo button",
  type: "main",
  size: "medium",
};
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
