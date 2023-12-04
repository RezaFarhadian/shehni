import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { HiArrowRight } from "react-icons/hi";

export default function Auth() {
  return (
    <>
      <Heading>FORGOT PASSWORD</Heading>

      <Input
        placeholder="Email"
        className="mt-10"
      />

      <div className="flex flex-row-reverse">
        <HiArrowRight size={50} />
      </div>

      <div className="flex flex-col-reverse h-full gap-4 font-sans font-semibold">
        <a href="/auth">
          <div>Sign in</div>
        </a>
      </div>
    </>
  )
}
