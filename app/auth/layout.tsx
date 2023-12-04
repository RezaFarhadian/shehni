import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SHEHNI - Sign in or Sign up",
  description: "Sign in for ultimate salon experience"
}

export default function AuthLayout({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <main className="
      flex
      flex-col
      gap-10
      pr-10
      pl-10
      pt-28
      pb-10
      h-screen
      bg-red-300
    ">
      {children}
    </main>
  )
}
