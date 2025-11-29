import type { Metadata } from 'next'
import { Inter, Raleway, Poppins } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/TopNav'
import BackToTop from '@/components/BackToTop'
import AOSInit from '@/components/AOSInit'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Abdullah-Al-Sajid - Portfolio',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/image2.jpg" />
        <link rel="apple-touch-icon" href="/assets/img/image2.jpg" />
      </head>
      <body className={`${inter.variable} ${raleway.variable} ${poppins.variable}`}>
        <AOSInit />
        <TopNav />
        <main>
          {children}
        </main>
        <BackToTop />
      </body>
    </html>
  )
}
