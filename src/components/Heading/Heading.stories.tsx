import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './index'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Loren Ipsum',
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj = {}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    size: 'lg',
    children: (
      <h1>Heading with h1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
