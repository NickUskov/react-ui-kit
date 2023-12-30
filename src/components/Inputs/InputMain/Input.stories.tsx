import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'ReactComponentLibrary/Input/Main',
  component: Input
} satisfies Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Demo = Template.bind({})
// InputMain.args = {}
