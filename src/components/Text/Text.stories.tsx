import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './index'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren Ipsum'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    size: 'lg',
    children: (
      <p>Customized text</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
