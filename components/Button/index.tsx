import { MouseEventHandler } from "react"

interface ButtonProps {
  children: string
  transparent?: boolean
  fullWidth?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
        ${props.transparent ? "bg-transparent" : "bg-black"}
        ${props.transparent ? "text-black" : "text-white"}
        ${props.transparent ? "border-2 border-black" : "border-none" }
        ${props.fullWidth ? "w-full" : "w-3/4"}
        bg-black
        w-3/4
        h-14
        font-medium
        text-lg
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
