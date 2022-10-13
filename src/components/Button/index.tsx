import { ReactNode } from 'react';
import clsx from "clsx"

export interface ButtonProps {
  children: ReactNode
}

export function Button({children}: ButtonProps) {
  return (
    <button className={
      clsx('py-4 px-3 bg-ciano-500 rounded font-semibold text-black text-md w-full transition-colors hover:bg-ciano-300 focus:ring ring-white')
    }>{children}</button>
  )
}
