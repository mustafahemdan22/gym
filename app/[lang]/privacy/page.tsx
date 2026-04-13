'use client';

import React, { use } from 'react';
import styles from './legal.module.css';

export default function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const isAr = lang === 'ar';

  return (
    <div className={styles.legal}>
      <div className={styles.legalHero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop" 
            alt="" 
            className={styles.heroImage} 
          />
          <div className={styles.heroOverlay} />
        </div>
        <h1>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
      </div>

      <div className={styles.container}>
        <p className={styles.lastUpdated}>{isAr ? 'آخر تحديث: 13 أبريل 2024' : 'Last Updated: April 13, 2024'}</p>
        
        <div className={styles.content}>
          <section>
            <h2>{isAr ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}</h2>
            <p>
              {isAr 
                ? 'نحن نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حساباً أو تشترك في نشرتنا الإخبارية.' 
                : 'We collect information you provide directly to us, such as when you create an account or sign up for our newsletter.'}
            </p>
          </section>

          <section>
            <h2>{isAr ? '2. كيف نستخدم معلوماتك' : '2. How We Use Your Information'}</h2>
            <p>
              {isAr 
                ? 'نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها، وللتواصل معك.' 
                : 'We use the information we collect to provide, maintain, and improve our services, and to communicate with you.'}
            </p>
          </section>

          <section>
            <h2>{isAr ? '3. أمن البيانات' : '3. Data Security'}</h2>
            <p>
              {isAr 
                ? 'نتخذ تدابير معقولة للمساعدة في حماية المعلومات المتعلقة بك من الفقدان والسرقة وسوء الاستخدام.' 
                : 'We take reasonable measures to help protect information about you from loss, theft, and misuse.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
