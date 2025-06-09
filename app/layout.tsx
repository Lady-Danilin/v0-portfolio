import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-source-sans-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Daniela Ayelén Argüello - Digital Communication & Marketing Strategist",
  description:
    "Passionate about digital communication, social media strategy, and content creation. Specializing in building digital communities and developing comprehensive marketing strategies.",
  keywords: "digital marketing, social media strategy, content creation, UX/UI design, communication specialist",
  authors: [{ name: "Daniela Ayelén Argüello" }],
  openGraph: {
    title: "Daniela Ayelén Argüello - Digital Communication Strategist",
    description:
      "Professional portfolio showcasing expertise in digital marketing, social media strategy, and content creation.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sourceSansPro.variable}`}>
      <body className="font-source-sans-pro antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
