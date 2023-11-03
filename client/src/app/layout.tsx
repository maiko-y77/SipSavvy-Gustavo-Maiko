import type { Metadata } from 'next'
import './globals.scss'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar type="default" />
      <main>
        {children}
        </main>
      <Footer />
      </body>
    </html>
  )
}
