import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { ControlledAccordion } from './ControlledAccordion'

export default {
  title: 'ReactComponentLibrary/Accordion/ControlledAccordion',
  component: ControlledAccordion
} satisfies Meta<typeof ControlledAccordion>

const Template: StoryFn<typeof ControlledAccordion> = (args) => <ControlledAccordion {...args} />

export const Demo = Template.bind({})
Demo.args = {
  color: '#93713b',
  border: true,
  backgroundColor: 'black',
  titleColor: 'white',
  backgroundTextColor: 'white',
  btnDescriptionColor: '#a06c13',
  disabledComponent: 2,
  noselected: true
}
