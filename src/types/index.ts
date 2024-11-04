import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface TypeIconProps {
  className?: string
  fill?: string
  width?: number
  height?: number
}

export interface BtnProps {
  className: string
  text:string,
  onClick?:() => void;
  disabled:boolean,
}

export type ComponentProps = BtnProps
