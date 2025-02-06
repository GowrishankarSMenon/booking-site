import "./globals.css"
import { Spline_Sans, Spline_Sans_Mono } from "next/font/google"
import type React from "react" // Import React

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
  display: "swap",
})

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-sans-mono",
  display: "swap",
})

export const metadata = {
  title: "TravelEase Bookings",
  description: "Your one-stop solution for all your travel needs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${splineSans.variable} ${splineSansMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

