import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ConvexClientProvider } from '@/components/providers/ConvexClientProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface LangLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;
  const isRtl = lang === 'ar';

  return (
    <ConvexClientProvider>
      <ThemeProvider>
        <div dir={isRtl ? 'rtl' : 'ltr'} className="main-wrapper">
          <Navbar lang={lang} />
          <main>{children}</main>
          <Footer lang={lang} />
        </div>
      </ThemeProvider>
    </ConvexClientProvider>
  );
}
