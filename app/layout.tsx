import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

// TODO: update this to your real deployed domain (e.g. https://kennethaduakwabeng.com).
// It is used to build absolute URLs for the favicon, social-share preview, and Google.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adukenneth.egamentorship.org"

const SITE_TITLE = "Kenneth Adu-Akwabeng | Leadership, Engineering & Social Impact"
const SITE_DESCRIPTION =
  "Personal website for Kenneth Adu-Akwabeng, civil engineering graduate, youth leader, emerging legal professional, and founder of Ken Inspired Network."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Kenneth Adu-Akwabeng",
  keywords: [
    "Kenneth Adu-Akwabeng",
    "Ken Inspired Network",
    "Ghana youth leader",
    "civil engineering",
    "leadership",
    "law",
    "social impact",
    "mentorship",
  ],
  authors: [{ name: "Kenneth Adu-Akwabeng" }],
  creator: "Kenneth Adu-Akwabeng",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Kenneth Adu-Akwabeng",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1254,
        height: 1254,
        alt: "Kenneth Adu-Akwabeng logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kenneth Adu-Akwabeng",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  jobTitle: "Founder & Executive Director, Ken Inspired Network",
  description: SITE_DESCRIPTION,
  nationality: "Ghanaian",
  alumniOf: "KAAF University",
  knowsAbout: [
    "Civil Engineering",
    "Law and Governance",
    "Youth Leadership and Mentorship",
    "Cyber Security",
    "Data Analytics",
    "Artificial Intelligence",
  ],
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
