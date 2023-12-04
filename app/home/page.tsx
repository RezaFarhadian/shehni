import Heading from "@/components/Heading";
import SpecialistsItem from "@/components/SpecialistsItem";
import { HiMenuAlt4, HiOutlineAdjustments, HiSearch } from "react-icons/hi";

export default function Home() {
  return (
    <main className="
      pl-4
      pr-4
      pt-8
    ">
      <div className="flex flex-row">
        <HiMenuAlt4 size={30} />

        <div className="flex-1"></div>

        <HiSearch size={30} />
      </div>

      <Heading className="mt-8">
        SPECIALISTS
      </Heading>

      <div className="
        flex
        flex-row
        gap-2
        items-center
        mt-3
      ">
        <div className="
          h-0.5
          w-full
          bg-black
          flex-1
        "></div>

        <div>
          <HiOutlineAdjustments size={30} />
        </div>
      </div>

      <div className="
        flex
        flex-col
        gap-8
        mt-4
      ">
        <SpecialistsItem
          priceRange="$100 - $300"
          name="Sara Nichols"
          ability="Haircut"
          picture="/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg"
        />

        <SpecialistsItem
          priceRange="$100 - $300"
          name="Maria Callas"
          ability="Makeup"
          picture="/gallery-7-star-wn4hVCMLpG0-unsplash.jpg"
          invert
        />

        <SpecialistsItem
          priceRange="$100 - $300"
          name="Lili Reinhart"
          ability="Skincare"
          picture="/oleg-ivanov-QhR78CbFPoE-unsplash.jpg"
        />

        <SpecialistsItem
          priceRange="$100 - $300"
          name="Rachel Wolfson"
          ability="Nail"
          picture="/ryan-jacobson-7QpjN5NvS0M-unsplash.jpg"
          invert
        />
      </div>
    </main>
  )
}
