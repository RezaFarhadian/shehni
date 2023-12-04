import Heading from "@/components/Heading";
import Image from "next/image";

export default function Onboard() {
  return (
    <main className="
      pl-8
      pt-8
    ">
      <Heading>CHOOSE <br/> CATEGORY</Heading>
      
      <br />

      <a href="/home">
        <div style={{
          width: "150px",
          height: "150px"
        }} className="bg-red-300 absolute right-12"></div>

        <Image
          alt=""
          priority={true}
          width={80}
          height={80}
          src="/curved-arrow.png"
          className="absolute right-64 mt-10 rotate-45"
        />

        <Image
          alt=""
          priority={true}
          width={120}
          height={120}
          src="/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg"
          className="absolute right-28 mt-10 rotate-6"
        />

        <Image
          alt=""
          priority={true}
          width={120}
          height={120}
          src="/victoria-priessnitz-b6hK5LiLhfI-unsplash.jpg"
          className="absolute right-36 mt-36 -rotate-6"
        />

        <Image
          alt=""
          priority={true}
          width={120}
          height={120}
          src="/sour-moha-k47viB7Dt8I-unsplash.jpg"
          className="absolute right-40 mt-64 -rotate-12"
        />

        <Image
          alt=""
          priority={true}
          width={120}
          height={120}
          src="/baylee-gramling-MMz03PyCOZg-unsplash.jpg"
          className="absolute right-36 mt-80 -rotate-45"
        />

        <Image
          alt=""
          priority={true}
          width={120}
          height={120}
          src="/hayley-kim-studios-sRSRuxkOuzI-unsplash.jpg"
          className="absolute right-28 mt-96 -rotate-12"
        />
      </a>
    </main>
  )
}
