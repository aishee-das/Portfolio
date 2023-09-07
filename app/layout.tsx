import Header from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aishee | Portfolio',
  description: 'Aishee is a student at the University of Edinburgh studying computer science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}
       bg-cyan-950 text-rose-200 relative pt-28 sm:pt-36`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
//can add custom colors here from tailiwnd.config.js. Just say bg-custom.