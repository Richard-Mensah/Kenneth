import type { Metadata } from "next"

import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kenneth Adu-Akwabeng | Leadership, Engineering & Social Impact",
  description:
    "Personal website for Kenneth Adu-Akwabeng, civil engineering graduate, youth leader, emerging legal professional, and founder of Ken Inspired Network.",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
