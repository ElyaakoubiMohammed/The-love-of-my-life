import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The love of my life',
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
