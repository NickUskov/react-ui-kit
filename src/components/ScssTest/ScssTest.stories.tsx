import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { ScssTest } from './ScssTest'

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/ScssTest',
  component: ScssTest
} satisfies Meta<typeof ScssTest>

const Template: StoryFn<typeof ScssTest> = (args) => <ScssTest {...args} />

export const Test = Template.bind({})
