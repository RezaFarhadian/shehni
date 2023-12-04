interface HeadingProps {
  children: React.ReactNode
  className?: string
}

export default function Heading(props: HeadingProps) {
  return (
    <p className={`${props.className} text-4xl font-serif`}>
      {props.children}
    </p>
  )
}
