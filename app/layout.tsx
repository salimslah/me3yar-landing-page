import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tajawal, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import './globals.css'
import '@emran-alhaddad/saudi-riyal-font/index.css'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
  description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة لضمان تحقيق أهداف منظمتك.',
  generator: 'Meyar Strategy Suite',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
    description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة.',
    url: 'https://meyar.com',
    siteName: 'معيار - Meyar',
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
    <html lang="ar" dir="rtl" className={`bg-background ${tajawal.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
