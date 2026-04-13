import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ConvexClientProvider } from '@/components/providers/ConvexClientProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

import { Oswald, Roboto_Slab, Cairo } from 'next/font/google';
import '../globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;
  const isRtl = lang === 'ar';

  return (
    <html
      lang={lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${oswald.variable} ${robotoSlab.variable} ${cairo.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ConvexClientProvider>
          <ThemeProvider>
            <div className="main-wrapper">
              <Navbar lang={lang} />
              <main>{children}</main>
              <Footer lang={lang} />
            </div>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
