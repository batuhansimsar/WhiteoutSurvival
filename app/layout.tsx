import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Oswald } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
})
const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Whiteout Survival — Buzda Hayatta Kal',
  description:
    'Dünya dondu. Fırını yak, şehrini kur, kahramanlarını topla ve ittifakınla birlikte buz çağında hayatta kal. Whiteout Survival şimdi ücretsiz.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1a2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${oswald.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
