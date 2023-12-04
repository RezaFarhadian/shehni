import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { HiArrowRight } from "react-icons/hi";

export default function Auth() {
  return (
    <>
      <Heading>SIGN UP</Heading>

      <Input
        placeholder="Email"
        className="mt-10"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Input
        type="password"
        placeholder="Repeat password"
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
