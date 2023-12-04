import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHEHNI - Magnificent style salon',
  description: 'Nail, Hair, Skin. We got it all.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-red-50`}>{children}</body>
    </html>
  )
}
