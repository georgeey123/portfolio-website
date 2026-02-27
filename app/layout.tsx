import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-mono'
})

export const metadata: Metadata = {
  title: 'methinks...',
  description: 'The worlds window into my reality',
  keywords: 'backend engineer, software engineer, software architecture, low-level programming',
  authors: [{ name: 'George Kofi Ohene-Adjei' }],
  openGraph: {
    title: 'George Kofi Ohene-Adjei | Methinks...',
    description: 'The worlds window into my reality',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })()
          `
        }} />
      </head>
      <body className={`${ibmPlexMono.variable} font-mono antialiased bg-skin-fill text-skin-base transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
