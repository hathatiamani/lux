import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Ruslan_Display as Roslindale_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const roslindale = Roslindale_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Lux - Premium Products",
  description: "Experience luxury craftsmanship",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body
        className={`font-sans antialiased`}
        style={{ "--font-display": roslindale.style.fontFamily } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}
