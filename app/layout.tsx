import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sammed Vidyasagar Bukshete | Cybersecurity Researcher & Educator',
  description: 'Assistant Professor and Cybersecurity Researcher specializing in AI-driven cybersecurity, SIEM optimization, SOC automation, ethical hacking, and penetration testing. 500+ students trained with expertise in threat detection and security analytics.',
  keywords: [
    'Cybersecurity Researcher',
    'Ethical Hacking',
    'SIEM',
    'SOC',
    'Penetration Testing',
    'AI-driven Cybersecurity',
    'Threat Detection',
    'Security Analytics',
    'Assistant Professor',
    'Vulnerability Assessment',
  ],
  authors: [{ name: 'Sammed Vidyasagar Bukshete' }],
  creator: 'Sammed Vidyasagar Bukshete',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sammed Vidyasagar Bukshete | Cybersecurity Researcher & Educator',
    description: 'Assistant Professor and Cybersecurity Researcher specializing in AI-driven cybersecurity, SIEM optimization, and ethical hacking.',
    siteName: 'Sammed Bukshete Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sammed Vidyasagar Bukshete | Cybersecurity Researcher',
    description: 'Assistant Professor and Cybersecurity Researcher specializing in AI-driven cybersecurity and ethical hacking.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
