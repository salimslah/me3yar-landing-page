import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
  description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة لضمان تحقيق أهداف منظمتك.',
  generator: 'Me3yar Strategy Suite',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
    description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة.',
    url: 'https://me3yar.com',
    siteName: 'معيار - Me3yar',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
    description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة.',
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2D7D5A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
