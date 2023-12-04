interface InputProps extends Partial<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className={`
        ${props.className}
        pb-3
        font-semibold
        bg-transparent
        border-b
        border-black
        focus:outline-none
        placeholder-black
      `}
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder}
    />
  )
}
