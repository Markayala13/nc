import type React from "react"
import type { Metadata } from "next"
import { Cormorant, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import "./globals.css"

const cormorant = Cormorant({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Adrian Bravo | Stucco & Construction Services",
  description:
    "Professional stucco, tile, concrete, landscaping, roofing, and fence services for San Diego County. Expert craftsmanship for your home.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased custom-cursor`}>
        <Preloader />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
