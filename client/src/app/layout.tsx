import type { Metadata } from 'next'
import './globals.scss'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Sip Savvy',
  description: 'A Website built for users to explore narratives, knowledge, and insights from connoisseurs on all things wine.',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
      <Navbar type="default" />
      <main>
        {children}
        {modal}
        </main>
      <Footer />
      </body>
    </html>
  )
}
