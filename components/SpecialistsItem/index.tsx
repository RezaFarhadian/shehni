import Image from "next/image"
import Button from "../Button"

interface SpecialistsItemProps {
  invert?: boolean
  name: string
  ability: string
  priceRange: string
  picture: string
}

export default function SpecialistsItem(props: SpecialistsItemProps) {
  return (
    <div className={`
      flex
      h-full
      w-full
      gap-8
      ${props.invert ? "flex-row-reverse" : "flex-row"}
    `}>
      <Image
        src={props.picture}
        priority={true}
        alt=""
        width="100"
        height="210"
        className="rounded-t-full"
        style={{
          width: "auto",
          height: "auto"
        }}
      />

      <div className="
        w-full
        flex
        flex-col
        justify-between
        font-sans
        font-semibold
      ">
        <p className="text-lg pl-5 border-l-4 border-black">{props.name}</p>

        <p className="text-2xl pl-6">{props.ability}</p>

        <Button transparent fullWidth>
          {props.priceRange}
        </Button>
      </div>
    </div>
  )
}
