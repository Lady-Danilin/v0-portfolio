import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-source-sans-pro",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: "digital marketing, social media strategy, content creation, UX/UI design, communication specialist",
    authors: [{ name: "Daniela Ayelén Argüello" }],
    creator: 'Daniela Ayelén Argüello',
    publisher: 'Daniela Ayelén Argüello',
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
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: "website",
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_AR',
      url: `https://danielaarguello.com/${locale}`,
      siteName: 'Daniela Ayelén Argüello',
      images: [
        {
          url: '/static/Images/retrato-la-cueva-arg-374.jpg',
          width: 1200,
          height: 630,
          alt: 'Daniela Ayelén Argüello - Digital Communication Strategist',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: '@danil_arguello',
      images: ['/static/Images/retrato-la-cueva-arg-374.jpg'],
    },
    metadataBase: new URL('https://danielaarguello.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    generator: 'Next.js'
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${sourceSansPro.variable}`}>
      <body className="font-source-sans-pro antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster 
              position="bottom-right"
              richColors
              closeButton
              duration={5000}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
