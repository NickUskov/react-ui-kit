import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { UncontrolledAccordion } from './UncontrolledAccordion'

export default {
  title: 'ReactComponentLibrary/Accordion/UncontrolledAccordion',
  component: UncontrolledAccordion
} satisfies Meta<typeof UncontrolledAccordion>

const Template: StoryFn<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />

export const Demo = Template.bind({})
