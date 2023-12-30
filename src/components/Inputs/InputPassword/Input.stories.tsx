import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { InputPassword } from './InputPassword'

export default {
  title: 'ReactComponentLibrary/Input/Password',
  component: InputPassword
} satisfies Meta<typeof InputPassword>

const Template: StoryFn<typeof InputPassword> = (args) => <InputPassword {...args} />

export const Demo = Template.bind({})
// InputMain.args = {}
