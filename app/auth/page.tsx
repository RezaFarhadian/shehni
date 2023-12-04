import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { HiArrowRight } from "react-icons/hi";

export default function Auth() {
  return (
    <>
      <Heading>SIGN IN</Heading>

      <Input
        placeholder="Email"
        className="mt-10"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <a href="/onboard">
        <div className="flex flex-row-reverse">
          <HiArrowRight size={50} />
        </div>
      </a>

      <div className="flex flex-col-reverse h-full gap-4 font-sans font-semibold">
        <a href="/auth/forgot">
          <div>Forgot your password?</div>
        </a>

        <a href="/auth/signup">
          <div>Sign up</div>
        </a>
      </div>
    </>
  )
}
