import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={
      clsx('py-3 px-4 bg-ciano-500 rounded font-semibold text-black text-md w-full transition-colors hover:bg-ciano-300 focus:ring ring-white')
    }>{children}</Comp>
  )
}
