import Button from "@/components/Button"
import Image from "next/image"

export default function Home() {
  return (
  <main className="text-center flex flex-col gap-6 items-center mt-10">
    <p className="text-lg font-mono italic">
      We thrive your natural looks,<br />
      come once and see us forever.
    </p>

    <Image
      src="/fleur-kaan-pq2rbxu0Kpk-unsplash.jpg"
      alt=""
      width={218}
      height={300}
      priority={true}
      className="rounded-t-full"
    />

    <div className="text-5xl font-bold font-serif">
      SHEHNI <br />
      <span className="font-medium text-xl flex-initial p-0">
        Magnificent style salon 
      </span>
    </div>

    <a href="/auth" className="w-full">
      <Button>Sign In</Button>
    </a>
    </main>
  )
}
