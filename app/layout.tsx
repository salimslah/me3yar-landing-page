import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tajawal, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import './globals.css'
import '@emran-alhaddad/saudi-riyal-font/index.css'
import {
  OrganizationSchema,
  WebsiteSchema,
  SoftwareApplicationSchema,
  FAQSchema
} from '@/components/structured-data'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const BASE_URL = 'https://meyar.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
  description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة لضمان تحقيق أهداف منظمتك.',
  generator: 'Meyar Strategy Suite',
  applicationName: 'منصة معيار',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'منصة معيار',
    'إدارة الأداء',
    'الإدارة الإستراتيجية',
    'بطاقة الأداء المتوازن',
    'BSC',
    'مؤشرات قياس الأداء',
    'KPIs',
    'إدارة المخاطر',
    'مساحة عمل إستراتيجية',
    'السوق السعودي',
    'تتبع المبادرات'
  ],
  authors: [{ name: 'معيار', url: BASE_URL }],
  creator: 'معيار',
  publisher: 'معيار',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'ar': BASE_URL,
    },
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  category: 'Business Software',
  openGraph: {
    title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
    description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة لضمان تحقيق أهداف منظمتك.',
    url: BASE_URL,
    siteName: 'معيار - Meyar',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'منصة معيار',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة',
    description: 'منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة.',
    images: ['/logo.jpeg'],
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
        <OrganizationSchema />
        <WebsiteSchema />
        <SoftwareApplicationSchema />
        <FAQSchema />
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

