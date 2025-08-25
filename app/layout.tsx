import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://vitisanus.com.ar" // setear en prod

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harina de Uva Vitisanus — Antioxidantes naturales desde Finca Dinamia",
  description:
    "Harina de uva Vitisanus: fibra y polifenoles del viñedo mendocino. Recetas, beneficios y contacto por WhatsApp.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Harina de Uva Vitisanus — Antioxidantes naturales desde Finca Dinamia",
    description:
      "Harina de uva Vitisanus: fibra y polifenoles del viñedo mendocino. Recetas, beneficios y contacto por WhatsApp.",
    url: siteUrl,
    siteName: "Vitisanus",
    images: [{ url: "/harina250.png", width: 1200, height: 630, alt: "Harina de Uva Vitisanus" }],
    locale: "es_AR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <style>{`
          @font-face {
            font-family: 'ChunkFive';
            src: url('/fonts/Chunkfive Ex.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </head>
      <body className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
