import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, InputProps, InputRootProps } from './index'

export default {
  title: 'Components/Input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Input placeholder='Type your e-mail address' />
    ]
  },
} as Meta<InputRootProps>

export const Default: StoryObj = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
}

export const WithIcon: StoryObj = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
}