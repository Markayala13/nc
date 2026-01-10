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
  title: "Padilla's Prestige Remodeling | Dallas-Fort Worth Remodeling Services",
  description:
    "Professional interior and exterior remodeling services in DFW. Specializing in siding installation, kitchen remodeling, bathroom remodeling, flooring, and painting. Expert craftsmanship for your home.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
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
