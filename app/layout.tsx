import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Candramawa Studio',
  description: 'Candramawa Studio - Solusi Terbaik untuk Persiapan CPNS',
  generator: 'Candramawa Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/logo.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
