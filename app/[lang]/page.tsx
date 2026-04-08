'use client';

import React, { use } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HomePrograms from '@/components/sections/HomePrograms';
import HomeTrainers from '@/components/sections/HomeTrainers';
import HomeBlog from '@/components/sections/HomeBlog';
import CTA from '@/components/sections/CTA';

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);

  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <HomePrograms lang={lang} />
      <HomeTrainers lang={lang} />
      <HomeBlog lang={lang} />
      <CTA lang={lang} />
    </>
  );
}
