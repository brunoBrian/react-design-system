import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputRootProps {
  children: ReactNode
} 

function InputRoot({children}: InputRootProps) {
  return (
    <div className='flex items-center gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-ciano-300 '>
      {children}
    </div>
  )
}

export interface InputIconProps {
  children: ReactNode
}

function InputIcon({children}: InputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input 
      className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400'
      {...props}
    />
  )
}

export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon
}